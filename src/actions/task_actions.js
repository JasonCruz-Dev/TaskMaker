import { ADD_TASK, MARK_DONE, UNDO_DONE, DELETE_TASK, CLEAR_COMPLETED } from './types';

export const addTasks = (task, day, callback) => async dispatch => {
    let collection = {};
    collection.description = task;
    collection.day = day;
    collection.completed = false;
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

export const clearCompleted = () => async dispatch => {
    dispatch({
        type: CLEAR_COMPLETED,
    });
};