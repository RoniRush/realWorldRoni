import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {screenTitle} from "./types";
import {Home} from "../screens/Home";
import {ScreenName} from "./constants";
import {ArticleScreen} from "../screens/ArticleScreen";


const Stack = createNativeStackNavigator();

export const screenOptions = {
    headerTintColor: "#fff",
    headerTitleStyle: {
        fontWeight: "700" as const,
    },
    headerStyle: {
        backgroundColor: "#ccccff",
    },
};

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={ScreenName.Home}
                screenOptions={screenOptions}
            >
                <Stack.Screen
                    name={ScreenName.Home}
                    component={Home}
                    options={{
                        title: screenTitle[ScreenName.Home],
                    }}
                />
                <Stack.Screen
                    name={ScreenName.Article}
                    component={ArticleScreen}
                    options={{
                        title: screenTitle[ScreenName.Article],
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
