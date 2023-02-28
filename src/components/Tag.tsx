import {View, Text, StyleSheet} from "react-native";
import {Button} from "react-native-ui-lib";

type TagItemProps = Readonly<{
    tag: string;
    isActive: boolean;
    isLast: boolean;
    onClick: () => void;
}>;

export const Tag = ({ tag, isActive, onClick, isLast }: TagItemProps) => {
    return (
        // <View style={[styles.item, isLast && styles.itemLast]}>
        //     <Text
        //         style={[styles.text, isActive && styles.activeTag]}
        //         onPress={onClick}
        //     >
        //         {tag}
        //     </Text>
        // </View>
        <Button>{tag}</Button>
    );
}

const styles = StyleSheet.create({
    item: {
        height: 26,
        borderRadius: 13,
        paddingVertical: 4,
        paddingHorizontal: 6,
        marginVertical: 4,
        marginLeft: 8,
        backgroundColor: "#818a91",
    },
    itemLast: {
        marginRight: 8,
    },
    text: {
        color: "#fff",
    },
    activeTag: {
        backgroundColor: "black",
    },
});