import { ADD_TASK } from '../actions/types';

const INITIAL_STATE = {
    taskArray: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TASK:
            let newArray = state.taskArray;
            newArray.push(action.payload);
            return { ...state, taskArray: newArray };

        default:
            return state;
    }
}