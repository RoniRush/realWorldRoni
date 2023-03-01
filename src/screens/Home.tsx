import {View, StyleSheet} from 'react-native';
import {TagsBar} from "../components/TagsBar";
import {useCallback, useEffect, useState} from "react";
import {getTags} from "../services/tags";
import {ArticlesList} from "../components/ArticlesList";

export const Home = () => {
    const [tags, setTags] = useState<string[]>([]);
    const [activeTag, setActiveTag] = useState<string | undefined>(undefined)

    const getTagsFromServer = useCallback(async ()=> {
        setTags(await getTags());
    }, [tags, setTags])

    useEffect(()=> {
        getTagsFromServer();
    },[]);

    const onTagClick = useCallback((tag: string) => {
            activeTag === tag? setActiveTag(undefined) : setActiveTag(tag);
        },
        [activeTag]
    );

    return <View style={styles.container}>
        <TagsBar tags={tags} onTagClick={onTagClick} activeTag={activeTag}/>
        <ArticlesList/>
    </View>
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        height: "100%",
    },
    title: {
        marginBottom: 12,
        color: "black",
        fontSize: 22,
        fontWeight: "700",
    },
});