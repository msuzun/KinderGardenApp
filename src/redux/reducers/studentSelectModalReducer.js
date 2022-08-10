const INITIAL_STATE = false;

const studentSelectModalReducer = (state = INITIAL_STATE,action) =>{
    switch (action.type){
        case "OPEN_STUDENT_MODAL":
            return true;
            break;
        case "CLOSE_STUDENT_MODAL":
            return false;
            break;
        default:
            return state;
            break;
    }
}
export default studentSelectModalReducer;