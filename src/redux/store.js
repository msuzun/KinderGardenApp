import { createStore, combineReducers } from "redux";
import studentSelectModalReducer from "./reducers/studentSelectModalReducer";
import selectNoteModalReducer from "./reducers/selectNoteModalReducer";
import studentReducer from "./reducers/studentReducer";
import selectedStudentReducer from "./reducers/selectedStudentReducer";
import noteReducer from "./reducers/noteReducer";

const reducers = combineReducers({
    studentSelectModal: studentSelectModalReducer,
    selectNoteModal: selectNoteModalReducer,
    studentReducer: studentReducer,
    selectedStudents: selectedStudentReducer,
    selectedNote: noteReducer
});
const store = createStore(reducers);

export default store;