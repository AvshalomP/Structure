import { combineReducers } from 'redux';
import projects from './projects';
import departments from './departments';
import currentProject from './currentProject';

const rootReducer = combineReducers({
    projects,
    departments,
    currentProject
});

export default rootReducer;