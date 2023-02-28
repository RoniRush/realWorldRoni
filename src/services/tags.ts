import * as requests from './requests';
import {TagsResponse} from "./types";

export const getTabs = (): Promise<TagsResponse> => requests.get('/tags')
