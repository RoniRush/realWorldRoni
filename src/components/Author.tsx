import {StyleSheet, View} from "react-native";
import {Avatar, Text} from "react-native-ui-lib";

export type authorProps = {
    username: string,
    image: string,
    following: boolean
    date: string,
    onClick: () => void
}

export const Author = (props: authorProps) => {
    const {username, image, date} = props;
    return (
        <View style={styles.container}>
            <Avatar size={40} source={{uri: image}}></Avatar>
            <View style={styles.nameAndDate}>
                <Text style={styles.text}>{username}</Text>
                <Text style={styles.text}>{date}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    text: {
        fontSize: 14,
    },
    nameAndDate: {
        marginLeft: 5,
        display: "flex"
    },
});