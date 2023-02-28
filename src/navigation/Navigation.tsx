import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {screenTitle} from "./types";
import {Home} from "../screens/Home/Home";
import {ScreenName} from "./constants";


const Stack = createNativeStackNavigator();

export const screenOptions = {
    headerTintColor: "#fff",
    headerTitleStyle: {
        fontWeight: "700" as const,
    },
    headerStyle: {
        backgroundColor: "#5CB85C",
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
            </Stack.Navigator>
        </NavigationContainer>
    );
}
