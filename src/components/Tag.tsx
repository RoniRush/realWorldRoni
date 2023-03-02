import {View} from 'react-native';
import {Button} from "react-native-ui-lib";

type TagItemProps = Readonly<{
    tag: string;
    isActive: boolean;
    onClick: () => void;
}>;

export const Tag = ({ tag, isActive, onClick }: TagItemProps) => {
    return (
        <View>
            <Button label={tag} backgroundColor={isActive? "#6666ff": "#9999ff"} onPress={onClick} size={Button.sizes.small} style={{marginLeft:6}}></Button>
        </View>
    );
}