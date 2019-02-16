import { ADD_TASK } from './types';

export const addTasks = (text, day, callback) => async dispatch => {
    let collection = {};
    collection.text = text;
    collection.day = day;
    dispatch({
        type: ADD_TASK,
        payload: collection
    });
    callback();
};