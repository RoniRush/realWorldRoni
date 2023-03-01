import {FlatList, StyleSheet} from "react-native";
import {useCallback, useEffect, useState} from "react";
import {Article} from "./Article";
import {ResArticle} from "../services/types";
import {getAllArticles} from "../services/articles";

export const ArticlesList = () => {
    const [articles, setArticles] = useState<ResArticle>({articles: [], articlesCount: 0});

    const getArticlesFromServer = useCallback(async () => {
        setArticles(await getAllArticles({}));
    },[])

    useEffect(()=> {
        getArticlesFromServer();
    },[]);

    return <FlatList style={styles.container} data={articles.articles} renderItem={(article)=> {
        const {title, slug, description, body, tagList, createdAt, updatedAt, favorited, favoritesCount, author} = article.item
        return <Article slug={slug} title={title} description={description} body={body} tagList={tagList} createdAt={createdAt} updatedAt={updatedAt} favorited={favorited} favoritesCount={favoritesCount} author={author}/>}}>
    </FlatList>
}

const styles = StyleSheet.create({
    container: {
        marginLeft:5,
        marginRight:5,
    },
});