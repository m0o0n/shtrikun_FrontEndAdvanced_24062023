import { applyMiddleware, combineReducers, createStore } from 'redux'
import { contactReducer } from './contactReducer'
import thunk from 'redux-thunk'
const reducers = combineReducers({
    contacts: contactReducer
})
export const store = createStore(
    reducers,
    applyMiddleware(thunk)
)