import { SET_CURRENT_PROJECT } from "../actionTypes";

export default (state="", action) => {
    switch (action.type){
        case SET_CURRENT_PROJECT:
            return action.currentProject;
        default:
            return state;
    }
}