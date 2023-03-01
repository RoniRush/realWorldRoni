import * as remx from 'remx';
import {ArticleType} from "../types";

type ArticlesState = {
    homeArticles: ArticleType[];
    chosenArticle: ArticleType | undefined;
};

const initialState = {
    homeArticles: [],
    chosenArticle: undefined,
};

const state = remx.state<ArticlesState>(initialState);

const getters = remx.getters({
    getHomeArticles() {
        return state.homeArticles;
    },
    getChosenArticle() {
        return state.chosenArticle;
    }
});

const setters = remx.setters({
    setChosenArticle(article: ArticleType | undefined) {
        return state.chosenArticle = article;
    },
    setHomeArticles(articles: ArticleType[]) {
        return state.homeArticles = articles;
    }
});

export const articleStore = {
    ...setters,
    ...getters
};
