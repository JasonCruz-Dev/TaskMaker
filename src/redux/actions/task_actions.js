import { ADD_TASK, MARK_DONE, UNDO_DONE, DELETE_TASK } from './types';

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

export const undoDone = (task) => async dispatch => {
    dispatch({
        type: UNDO_DONE,
        payload: task
    });
};

export const deleteTask = (task) => async dispatch => {
    dispatch({
        type: DELETE_TASK,
        payload: task
    });
};