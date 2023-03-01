import {Author} from "./Author";
import {TouchableOpacity, Text} from "react-native-ui-lib";
import {ArticleType} from "../types";
import {StyleSheet} from "react-native";
import {NavigationPropRootStack} from "../navigation/types";
import {useNavigation} from "@react-navigation/native";
import {useCallback} from "react";
import {ScreenName} from "../navigation/constants";
import {articleStore} from "../stores/articleStore";

export const Article = (props: ArticleType) => {
    const navigation = useNavigation<NavigationPropRootStack>();
    const {author, createdAt, title, description, slug} = props;

    const goToArticle = useCallback(
        () => {
            articleStore.setChosenArticle(props);
            navigation.navigate(ScreenName.Article, { articleSlug: slug })},
        [navigation, slug]
    );

    const {username, image, following} = author;
    return (<TouchableOpacity style={styles.container} onPress={goToArticle}>
        <Author username={username} image={image} following={following} date={createdAt} onClick={()=>{}}/>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
    </TouchableOpacity>)
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        marginTop:5,
        borderBottomWidth: 2,
        borderBottomColor: "#ccccff",
        paddingBottom: 10,
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
    },
    description: {
        fontSize: 16,
    },
});