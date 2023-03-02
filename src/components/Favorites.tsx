import {StyleSheet, View, Text} from "react-native";

type favoritesProps= {
    amount:number | undefined
}

export const Favorites = (props: favoritesProps) => {
    return <View style={styles.container}>
        <Text>{`\u2665 ${props.amount}`}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        borderStyle: "solid",
        borderRadius: 3,
        borderWidth: 1,
        borderColor: "#A0A0A0",
        flexDirection: "row",
        position: "absolute",
        right: 2,
    },
});