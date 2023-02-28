import * as requests from './requests';
import {ArticlesRequestParams, LimitParams, ResArticle} from './types';

const parseLimitAndOffset = (params: LimitParams): string => {
    const limit = params.limit? `limit=${params.limit}&` : '';
    const offset = params.offset? `offset=${params.offset}` : '';
    return `${limit}${offset}`;
}

const parseFilterByOptions = (params: ArticlesRequestParams): string => {
    const tag = params.tag? `tag=${params.tag}&` : '';
    const author = params.author? `author=${params.author}&` : '';
    const favorited = params.favorited? `author=${params.favorited}&` : '';

    return `${tag}${author}${favorited}`;
}

export const getAllArticles = (params: LimitParams): Promise<ResArticle> => requests.get(`/articles?${parseLimitAndOffset(params)}`)

export const getAllArticlesUsingFilters = (params: LimitParams): Promise<ResArticle> => requests.get(`/articles?${parseFilterByOptions(params)}${parseLimitAndOffset(params)}`)