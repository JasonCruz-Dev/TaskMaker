import { ADD_TASK, MARK_DONE, UNDO_DONE, DELETE_TASK, CLEAR_COMPLETED } from '../actions/types';

const INITIAL_STATE = {
    taskArray: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TASK:
            const array = [action.payload, ...state.taskArray];
            return { ...state, taskArray: array };

        case MARK_DONE:
            let filteredTasks = state.taskArray.filter(task => task.description !== action.payload.description);
            filteredTasks.push({
                description: action.payload.description,
                day: action.payload.day,
                completed: true
            });
            return { ...state, taskArray: filteredTasks };

        case UNDO_DONE:
            let filteredUndoTasks = state.taskArray.filter(task => task.description !== action.payload.description);
            filteredUndoTasks.unshift({
                description: action.payload.description,
                day: action.payload.day,
                completed: false
            });
            return { ...state, taskArray: filteredUndoTasks };

        case DELETE_TASK:
            const newArray = state.taskArray.filter(task => task.description !== action.payload.description);
            return { ...state, taskArray: newArray };
        case CLEAR_COMPLETED:
            const unfinishedTask = state.taskArray.filter(task => task.completed === false);
            return { ...state, taskArray: unfinishedTask }
        default:
            return state;
    }
};