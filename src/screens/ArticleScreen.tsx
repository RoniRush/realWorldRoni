import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {articleStore} from "../stores/articleStore";
import {Article} from "../components/Article";
import {SafeAreaView} from "react-native-safe-area-context";
import {Chip} from "react-native-ui-lib";
import {ChipComp} from "../components/Chip";

export const ArticleScreen = () => {
    const chosenArticle = articleStore.getChosenArticle();

    if(chosenArticle){
       const {title, description, createdAt, author, slug, body, favoritesCount, tagList} = chosenArticle;
        return <ScrollView>
            <SafeAreaView>
                <View style={styles.container}>
                    <Article title={title} description={description} createdAt={createdAt} author={author} slug={slug} isMinimized={false} favoritesCount={favoritesCount}/>
                    <Text style={styles.body}>{body}</Text>
                    <ChipComp tagList={tagList}/>
                </View>
            </SafeAreaView>
        </ScrollView>
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
        marginLeft:8,
        marginRight:8,
    },
    body: {
        fontSize: 16,
        marginTop: -10,
    },
});