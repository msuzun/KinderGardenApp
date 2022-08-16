const INITIAL_STATE = "Boş";

const noteReducer = (state = INITIAL_STATE,action) =>{
    switch (action.type){
        case "ADD_NOTE":
            return action.notes;
            break;
        default:
            return state;
            break;
    }
}
export default noteReducer;