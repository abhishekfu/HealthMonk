import { createAction } from 'redux-actions';
import { SEARCH_REDUCER_ACTION_TYPES } from '../constants/application';
import data from '../data/LabTest';

export const setSearchResultAction = createAction(SEARCH_REDUCER_ACTION_TYPES.POST_SEARCH_RESULT);

export const setSearchResult = (word) => dispatch => {
    return new Promise((resolve) => {
        const pattern = new RegExp('(\\w*'+word+'\\w*)','gi');
        const matchedResults = data.filter(item => {
            const matches = item.testName.match(pattern);
            return matches !== null
        });
        dispatch(setSearchResultAction(matchedResults));
        resolve();
    })    
}