import { createStore, combineReducers } from "redux";
import studentSelectModalReducer from "./reducers/studentSelectModalReducer";
import selectNoteModalReducer from "./reducers/selectNoteModalReducer";
import studentReducer from "./reducers/studentReducer";

const reducers = combineReducers({
    studentSelectModal: studentSelectModalReducer,
    selectNoteModal: selectNoteModalReducer,
    studentReducer: studentReducer
});
const store = createStore(reducers);

export default store;