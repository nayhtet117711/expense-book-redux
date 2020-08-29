import { combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import expenseReducer from "./expenseReducer"
import commonReducer from "./commonReducer"

export default combineReducers({
    expenseReducer,
    commonReducer
})