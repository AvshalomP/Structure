import { combineReducers } from 'redux';
import projects from './projects';
import departments from './departments';

const rootReducer = combineReducers({
    projects,
    departments
});

export default rootReducer;