import {View, StyleSheet, Text} from 'react-native';
import {articleStore} from "../stores/articleStore";
import {Article} from "../components/Article";

export const ArticleScreen = () => {
    const chosenArticle = articleStore.getChosenArticle();

    if(chosenArticle){
       const {title, description, createdAt, author, slug} = chosenArticle;
        return <View style={styles.container}>
            <Article title={title} description={description} createdAt={createdAt} author={author} slug={slug}/>
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
    },
});