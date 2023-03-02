import {View, StyleSheet, Text} from 'react-native';
import {articleStore} from "../stores/articleStore";
import {Article} from "../components/Article";

export const ArticleScreen = () => {
    const chosenArticle = articleStore.getChosenArticle();

    if(chosenArticle){
       const {title, description, createdAt, author, slug, body, favoritesCount} = chosenArticle;
        return <View style={styles.container}>
            <Article title={title} description={description} createdAt={createdAt} author={author} slug={slug} isMinimized={false} favoritesCount={favoritesCount}/>
            <Text style={styles.body}>{body}</Text>
        </View>
    }
    else{
        return <View><Text>
            {"Failed to fetch"}
        </Text></View>
    }
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        height: "100%",
        marginLeft:5,
        marginRight:5,
    },
    body: {
        fontSize: 16,
        marginTop: -10,
    }
});