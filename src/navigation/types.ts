import { NavigationProp } from "@react-navigation/core/src/types";
import {ScreenName} from "./constants";

export type RootStackParamList = {
    [ScreenName.Article]: { articleSlug: string };
    [ScreenName.ArticleForm]: { articleSlug?: string };
    [ScreenName.Home]: undefined;
    [ScreenName.SignIn]: undefined;
    [ScreenName.Profile]: { username: string };
    [ScreenName.EditProfile]: undefined;
    [ScreenName.SignUp]: undefined;
};

export type NavigationPropRootStack = NavigationProp<RootStackParamList>;

export const screenTitle = {
    [ScreenName.Article]: "Article",
    [ScreenName.ArticleForm]: "Article Form",
    [ScreenName.Home]: "Home",
    [ScreenName.Profile]: "Profile",
    [ScreenName.EditProfile]: "Edit Profile",
    [ScreenName.SignIn]: "Sign In",
    [ScreenName.SignUp]: "Sign Up",
};
