import { ADD_TASK, MARK_DONE } from './types';

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

export const markDone = (task) => async dispatch => {
    dispatch({
        type: MARK_DONE,
        payload: task
    });
};