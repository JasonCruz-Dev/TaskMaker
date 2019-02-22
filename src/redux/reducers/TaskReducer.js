import { ADD_TASK, MARK_DONE, UNDO_DONE, DELETE_TASK } from '../actions/types';

const INITIAL_STATE = {
    taskArray: [{ "text": "New Task", "day": "today" }],
    taskDoneArray: [{ "text": "Done Task", "day": "today" }]
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TASK:
            const array = [action.payload, ...state.taskArray];
            return { ...state, taskArray: array };

        case MARK_DONE:
            const doneArray = state.taskDoneArray.concat(action.payload);
            const newTaskArray = state.taskArray.filter(task => task !== action.payload);
            console.log('new array', newTaskArray);
            return { ...state, taskArray: newTaskArray, taskDoneArray: doneArray };

        case UNDO_DONE:
            const oldArray = [action.payload, ...state.taskArray];
            const newDoneArray = state.taskDoneArray.filter(task => task !== action.payload);
            return { ...state, taskArray: oldArray, taskDoneArray: newDoneArray };

        case DELETE_TASK:
            const newArray = state.taskDoneArray.filter(task => task !== action.payload);
            return { ...state, taskDoneArray: newArray };

        default:
            return state;
    }
};