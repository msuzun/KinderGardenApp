import { createStore, combineReducers } from "redux";
import studentSelectModalReducer from "./reducers/studentSelectModalReducer";
import selectNoteModalReducer from "./reducers/selectNoteModalReducer";

const reducers = combineReducers({
    studentSelectModal: studentSelectModalReducer,
    selectNoteModal: selectNoteModalReducer
});
const store = createStore(reducers);

export default store;