import { ADD_TASK } from '../actions/types';

const INITIAL_STATE = {
    tasksToday: [],
    tasksTomorrow: [],
    tasksSomeday: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TASK:
            if (action.day === 'today') {
                let newArray = state.tasksToday;
                newArray.push(action.payload);
                return { ...state, tasksToday: newArray };
            }
            if (action.day === 'tomorrow') {
                let newArray = state.tasksTomorrow;
                newArray.push(action.payload);
                return { ...state, tasksTomorrow: newArray };
            }
            if (action.day === 'someday') {
                let newArray = state.tasksSomeday;
                newArray.push(action.payload);
                return { ...state, tasksSomeday: newArray };
            }

        default:
            return state;
    }
}