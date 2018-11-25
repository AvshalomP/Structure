import { combineReducers } from 'redux';
import projects from './projects';
import currentProject from './currentProject';

const rootReducer = combineReducers({
    projects,
    currentProject
});

export default rootReducer;