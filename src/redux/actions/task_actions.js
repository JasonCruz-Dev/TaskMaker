import { ADD_TASK } from './types';

export const addTasks = (text) => {
    return {
        type: ADD_TASK,
        payload: text
    }
};