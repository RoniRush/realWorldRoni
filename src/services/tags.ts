import * as requests from './requests';

export const getTags = async (): Promise<string[]> => {
    const res = await requests.get('/tags');
    if (res.tags) return res.tags;
    else return [];
}
