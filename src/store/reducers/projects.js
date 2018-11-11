import { LOAD_PROJECTS, REMOVE_PROJECT } from '../actionTypes';

export default (state = [], action) => {
    switch(action.type){
        case(LOAD_PROJECTS):
            return [...action.projects];
        case(REMOVE_PROJECT):
            return state.filter( project => project.name !== action.name);
        default:
            return state;
    }
}