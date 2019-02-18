import { ADD_TASK, MARK_DONE } from '../actions/types';

const INITIAL_STATE = {
    taskArray: [],
    taskDoneArray: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TASK:
            //const array = state.taskArray.concat(action.payload);
            const array = [action.payload, ...state.taskArray];
            return { ...state, taskArray: array };
        case MARK_DONE: {
            const doneArray = state.taskDoneArray.concat(action.payload);
            const newTaskArray = state.taskArray.filter(task => task !== action.payload);
            console.log('new array', newTaskArray);
            return { ...state, taskArray: newTaskArray, taskDoneArray: doneArray };
        }
        default:
            return state;
    }
};