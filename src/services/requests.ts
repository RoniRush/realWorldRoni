// import { userStore } from "../stores";
// import { Alert } from "react-native";

export const API_URL = "https://api.realworld.io/api";

const enum SupportedMethods {
    Get = "GET",
    Post = "POST",
    Put = "PUT",
    Delete = "DELETE",
}

export const get = async (url: string) : Promise<any> => {
    return await request(SupportedMethods.Get, url);
}

export const post = async (url: string, data?: object) : Promise<any> => {
    return await request(SupportedMethods.Post, url, data);
}

export const del = async (url: string) : Promise<any> => {
    return await request(SupportedMethods.Delete, url);
}

export const put = async (url: string, data?: object) : Promise<any> => {
    return await request(SupportedMethods.Put, url, data);
}

const request = async (
    method: SupportedMethods,
    url: string,
    body?: object
): Promise<any> => {
    try {
        const response = await fetch(`${API_URL}${url}`, {
            method,
            headers,
            body: JSON.stringify(body),
        });

        // handle logout
        if (response.status === 401) {
            //await userStore.logout();
            return new Error("User session is ended. Please Sign In again");
        } else if (response.status === 404) {
             return new Error(`404 ${API_URL}${url}`);
        } else if (response.status === 204) {
            return undefined;
        }

        const json = await response.json();
        if (!response.ok) {
        return new Error(Object.entries(json.errors).join("; "));
        }

        return json;
    } catch (error) {
        return new Error(error?.toString() ?? "Generic Error");
    }
}

const headers = {
    "content-type": "application/json",
    "cache-control": "no-cache",
}

