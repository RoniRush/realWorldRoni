import {ArticleType} from "../types";

export type ResponseValue<V> = {
    value?: V;
    error?: string;
};

export type LimitParams = {
    limit?: number;
    offset?: number;
};

export type ArticlesRequestParams = LimitParams & {
    tag?: string;
    author?: string;
    favorited?: string;
};

export type ResponseErrors = {
    [id: string]: string[];
};

export type TagsResponse = {
    tags: string[];
};


export type ResArticle = {
    articles: ArticleType[];
    articlesCount: number;
};

export type ArticleCrud = {
    article: ArticleType;
};
