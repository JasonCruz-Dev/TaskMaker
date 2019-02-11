import { ADD_TASK } from './types';

export const addTasks = (text, day, callback) => async dispatch => {
    dispatch({
        type: ADD_TASK,
        payload: text, day
    });
    callback();
};