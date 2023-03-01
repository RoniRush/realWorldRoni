import {FlatList, StyleSheet} from "react-native";
import {useCallback, useEffect} from "react";
import {Article} from "./Article";
import {getAllArticles} from "../services/articles";
import {articleStore} from "../stores/articleStore";
import {useConnect} from "remx";

export const ArticlesList = () => {
    const homeArticles = useConnect(()=> articleStore.getHomeArticles());

    const getArticlesFromServer = useCallback(async () => {
        articleStore.setHomeArticles(await getAllArticles({}));
    },[])

    useEffect(()=> {
        getArticlesFromServer();
    },[]);

    return <FlatList style={styles.container} data={homeArticles} renderItem={(article)=> {
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