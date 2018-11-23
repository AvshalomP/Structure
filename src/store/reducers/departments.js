const INITIAL_STATE = ["Product", " R&D", "QA", "Design"];

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}