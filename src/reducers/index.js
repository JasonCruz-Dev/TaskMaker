import { combineReducers } from 'redux';
import TaskReducer from './TaskReducer';
import ThemeReducer from './ThemeReducer';

export default combineReducers({
    tasks: TaskReducer,
    ui: ThemeReducer
});