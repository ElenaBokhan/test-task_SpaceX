import { AppStateType } from './index';
import { ThunkAction } from "redux-thunk";
import { getAllLaunchPadsThunk } from "./LaunchPadsReducer";
import { getAllRocketsThunk } from "./RocketsReducer";

const INITIAL_APP = "INITIAL-APP";

const initialState = {
    initialization: false,		
}
type initialStateType = typeof initialState;

export const InitialReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type){
        case "INITIAL-APP":
            return { ...state,
                initialization: true
            }
        default:
             return state;
    }        
}
type ActionType = initialAppActionType
type initialAppActionType = {
	type: typeof INITIAL_APP
}
export const initialAppAC = ():initialAppActionType  => ({type: INITIAL_APP})

export const initThunkCreator = ():ThunkAction<void, AppStateType, unknown, ActionType> => async dispatch => {
	
    let promiseLaunchPads = dispatch(getAllLaunchPadsThunk());
    let promiseRockets = dispatch(getAllRocketsThunk());
    
    Promise.all([promiseLaunchPads, promiseRockets])
           .then(()=> dispatch(initialAppAC()))           
};