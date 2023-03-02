import {FlatList, StyleSheet} from "react-native";
import {useCallback, useEffect} from "react";
import {Article} from "./Article";
import {getAllArticles, getAllArticlesUsingFilters} from "../services/articles";
import {articleStore} from "../stores/articleStore";
import {useConnect} from "remx";

export type activeListProps = {
    activeTag: string | undefined,
}

export const ArticlesList = (props: activeListProps) => {
    console.log('ArticleTsgList --> active tag', props.activeTag)
    const allArticles = useConnect(()=> articleStore.getHomeArticles());
    const filteredArticles = useConnect(()=> articleStore.getFilteredArticles())

    const getArticlesFromServer = useCallback(async () => {
        articleStore.setHomeArticles(await getAllArticles({}));
    },[])

    const getArticleFromServerByTag = useCallback(async () => {
        articleStore.setFilteredArticles(await getAllArticlesUsingFilters({tag: props.activeTag}))
    },[props.activeTag])

    useEffect(()=> {
        props.activeTag? getArticleFromServerByTag(): getArticlesFromServer();
    },[props.activeTag]);

    const data = props.activeTag? filteredArticles: allArticles;
    return <FlatList style={styles.container} data={data} renderItem={(article)=> {
        const {title, slug, description, body, tagList, createdAt, updatedAt, favorited, favoritesCount, author} = article.item
        return <Article slug={slug} title={title} description={description} body={body} tagList={tagList} createdAt={createdAt} updatedAt={updatedAt} favorited={favorited} favoritesCount={favoritesCount} author={author} isMinimized={true}/>}}>
    </FlatList>
}

const styles = StyleSheet.create({
    container: {
        marginLeft:5,
        marginRight:5,
    },
});