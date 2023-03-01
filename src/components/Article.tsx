import {Author} from "./Author";
import {TouchableOpacity, Text} from "react-native-ui-lib";
import {ArticleType} from "../types";
import {StyleSheet} from "react-native";

export const Article = (props: ArticleType) => {
    const {author, createdAt, title, description} = props;
    const {username, image, following} = author;
    return (<TouchableOpacity style={styles.container}>
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