import { SET_CURRENT_PROJECT } from '../actionTypes';


/* Action Creator */
export function setCurrProject(project){
    return {
        type: SET_CURRENT_PROJECT,
        currentProject: project.id
    }
}

/* THUNK */
//middleware - project pick
export function setCurrentProject(project) {
    return dispatch => {
        //setting current viewing project
        dispatch(setCurrProject(project));
    }
}