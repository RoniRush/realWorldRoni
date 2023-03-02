import {StyleSheet, View} from "react-native";
import {Chip} from "react-native-ui-lib";

export type chipProps= {
    tagList: string[] | undefined
}

export const ChipComp = (props: chipProps) => {
    return (
        <View style={styles.chipsContainer}>
        {props.tagList?.map(tag =>
            <Chip label={tag} key={tag} marginRight={5}></Chip>
        )}
    </View>)
}

const styles = StyleSheet.create({
    chipsContainer: {
        flexDirection: "row",
        marginTop: 10
    },
});