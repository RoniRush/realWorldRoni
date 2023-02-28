import {Text, View, StyleSheet} from 'react-native';


export const Home = () => {
    console.log('in home page')
    return <View style={styles.container}>
        <Text style={styles.title}> What</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        height: "100%",
    },
    title: {
        marginBottom: 12,
        color: "#fff",
        fontSize: 22,
        fontWeight: "700",
    },
});