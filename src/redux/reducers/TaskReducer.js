import { ADD_TASK } from '../actions/types';

const INITIAL_STATE = {
    taskArray: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TASK:
            const array = state.taskArray.concat(action.payload);
            return { ...state, taskArray: array };

        default:
            return state;
    }
};