import * as remx from 'remx';
import {ArticleType} from "../types";

type ArticlesState = {
    homeArticles: ArticleType[];
    chosenArticle: ArticleType | undefined;
    filteredArticles: ArticleType[];
};

const initialState = {
    homeArticles: [],
    chosenArticle: undefined,
    filteredArticles: [],
};

const state = remx.state<ArticlesState>(initialState);

const getters = remx.getters({
    getHomeArticles() {
        return state.homeArticles;
    },
    getChosenArticle() {
        return state.chosenArticle;
    },
    getFilteredArticles() {
        return state.filteredArticles;
    },
});

const setters = remx.setters({
    setChosenArticle(article: ArticleType | undefined) {
        return state.chosenArticle = article;
    },
    setHomeArticles(articles: ArticleType[]) {
        return state.homeArticles = articles;
    },
    setFilteredArticles(articles: ArticleType[]) {
        return state.filteredArticles = articles;
    },
});

export const articleStore = {
    ...setters,
    ...getters
};
