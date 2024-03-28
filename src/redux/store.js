import { applyMiddleware, createStore } from "redux";
import ReduxThunk from 'redux-thunk'
import reducerData from "./reducer/reducer";

const store = createStore(reducerData,{},applyMiddleware(ReduxThunk))

export default store;