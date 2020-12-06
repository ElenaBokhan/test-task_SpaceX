import { createStore, applyMiddleware, combineReducers } from "redux";
import ReduxThunk from "redux-thunk";
import { InitialReducer } from "./InitialReducer";
import { LaunchesReducer } from "./LaunchesReducer";
import { LaunchPadsReducer } from "./LaunchPadsReducer";
import { RocketsReducer } from "./RocketsReducer";


const rootReducer = combineReducers({
   LaunchesReducer,
   InitialReducer,
   LaunchPadsReducer,
   RocketsReducer
})

type rootReducerType = typeof rootReducer
export type AppStateType = ReturnType<rootReducerType>

export function initStore() {
    const initialStore = {};
    return createStore(rootReducer, initialStore, applyMiddleware(ReduxThunk))
}