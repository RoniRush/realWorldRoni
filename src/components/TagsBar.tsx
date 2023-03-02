import React from "react";
import { FlatList, View } from "react-native";
import {Tag} from "./Tag";

type TagsListProps = {
    tags: string[];
    onTagClick?: (tag: string) => void;
    activeTag?: string | undefined;
};

export function TagsBar({ tags, onTagClick, activeTag }: TagsListProps) {
    return (
        <View>
            <FlatList style={{marginTop:6, marginBottom: 6}}
                data={tags}
                renderItem={({ item, index }) => (
                    <Tag
                        tag={item}
                        isActive={activeTag === item}
                        onClick={() => onTagClick?.(item)}
                    />
                )}
                keyExtractor={(item) => item}
                horizontal={true}
            />
        </View>
    );
}
