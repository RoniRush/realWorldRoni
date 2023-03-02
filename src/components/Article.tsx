import {Author} from "./Author";
import {TouchableOpacity, Text} from "react-native-ui-lib";
import {ArticleType} from "../types";
import {StyleSheet, View} from "react-native";
import {NavigationPropRootStack} from "../navigation/types";
import {useNavigation} from "@react-navigation/native";
import {useCallback} from "react";
import {ScreenName} from "../navigation/constants";
import {articleStore} from "../stores/articleStore";
import {Favorites} from "./Favorites";
import {ChipComp} from "./Chip";

export const Article = (props: ArticleType) => {
    const navigation = useNavigation<NavigationPropRootStack>();
    const {author, createdAt, title, description, slug, isMinimized, favoritesCount, tagList} = props;

    const goToArticle = useCallback(
        () => {
            articleStore.setChosenArticle(props);
            navigation.navigate(ScreenName.Article, { articleSlug: slug })},
        [navigation, slug]
    );

    const {username, image, following} = author;
    return (<TouchableOpacity style={[styles.container, isMinimized? styles.isMinimized: '']} onPress={goToArticle}>
        <View style={styles.topContainer} >
            <Author username={username} image={image} following={following} date={createdAt} onClick={()=>{}}/>
            {favoritesCount && <Favorites amount={favoritesCount}></Favorites>}
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        {isMinimized && <ChipComp tagList={tagList}/>}
    </TouchableOpacity>)
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        marginTop:5,
        paddingBottom: 10,
    },
    topContainer: {
        flexDirection: "row",
    },
    isMinimized: {
        borderBottomWidth: 2,
        borderBottomColor: "#ccccff",
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
    },
    description: {
        fontSize: 16,
    },
});