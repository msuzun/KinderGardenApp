const INITIAL_STATE = [];

const selectedStudentReducer = (state = INITIAL_STATE,action) =>{
    switch (action.type){
        case "ADD_SELECTED_STUDENTS":
            return action.values;
            break;
        default:
            return state;
            break;
    }
}
export default selectedStudentReducer;