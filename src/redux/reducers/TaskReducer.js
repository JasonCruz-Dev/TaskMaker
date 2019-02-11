import { ADD_TASK } from '../actions/types';

const INITIAL_STATE = {
    tasksToday: null,
    tasksTommorrow: null,
    tasksSomeday: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TASK:
            let newArray = state.taskArray;
            newArray.push(action.payload);
            if (action.day === 'today') {
                return { ...state, tasksToday: newArray };
            }
            if (action.day === 'tommorrow') {
                return { ...state, tasksTommorrow: newArray };
            }
            if (action.day === 'someday') {
                return { ...state, tasksSomeday: newArray };
            }

        default:
            return state;
    }
}