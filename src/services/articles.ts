import * as requests from './requests';
import {ArticlesRequestParams, LimitParams, ResArticle} from './types';
import {ArticleType} from "../types";

const parseLimitAndOffset = (params: LimitParams): string => {
    const limit = params.limit? `limit=${params.limit}&` : '';
    const offset = params.offset? `offset=${params.offset}` : '';
    return `${limit}${offset}`;
}

const parseFilterByOptions = (params: ArticlesRequestParams): string => {
    const tag = params.tag? `tag=${params.tag}&` : '';
    const author = params.author? `author=${params.author}&` : '';
    const favorited = params.favorited? `author=${params.favorited}&` : '';
    console.log('`${tag}${author}${favorited}`', `${tag}${author}${favorited}`);
    return `${tag}${author}${favorited}`;
}

export const getAllArticles = (params: LimitParams): Promise<ArticleType[]> => { return requests.get(`/articles?${parseLimitAndOffset(params)}`).then(response => {
    console.log('getAllArticles --> articlesCount', response.articles.length)
    return response.articles;
})}

export const getAllArticlesUsingFilters = (params: ArticlesRequestParams): Promise<ArticleType[]> => {
    console.log('params', params)
    return requests.get(`/articles?${parseFilterByOptions(params)}${parseLimitAndOffset(params)}`).then(response => {
        console.log('articlesCount', response.articles.length)
        return response.articles;
    })
}