const INITIAL_STATE = false;

const selectNoteModalReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "OPEN_NOTE_MODAL":
            return true;
            break;
        case "CLOSE_NOTE_MODAL":
            return false;
            break;
        default:
            return state;
            break;
    }
}
export default selectNoteModalReducer;