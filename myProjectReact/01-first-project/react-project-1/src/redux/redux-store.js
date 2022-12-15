import {combineReducers, legacy_createStore as createStore} from "redux";
import contentReducer from "./content-reducer";
import DialogReducer from "./dialog-reducer";
import NavReducer from "./nav-reducer";

let reducers = combineReducers({
    contentPage: contentReducer,
    dialogsPage: DialogReducer,
    nav: NavReducer,
})

let store = createStore(reducers);

export default store