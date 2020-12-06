import { LaunchPadType } from './../type/type';
import { AppStateType } from './index';
import { ThunkAction } from 'redux-thunk';
import { API } from "../api/api";

const SET_ALL_LAUNCHPADS = "SET-ALL-LAUNCHPADS";

const initialState = {
    dataAllLaunchPads: [] as Array<LaunchPadType>,		
}
type initialStateType = typeof initialState;

export const LaunchPadsReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type){
        case "SET-ALL-LAUNCHPADS":
            return { ...state,
                dataAllLaunchPads: [...action.data],
            }
        default:
             return state;
    }        
}
type ActionType = setAllLaunchPadsActionType
type setAllLaunchPadsActionType = {
    type: typeof SET_ALL_LAUNCHPADS
    data: Array<LaunchPadType>
}
export const setAllLaunchPadsAC = (data: Array<LaunchPadType>): setAllLaunchPadsActionType => ({type: SET_ALL_LAUNCHPADS, data})

export const getAllLaunchPadsThunk = ():ThunkAction<void, AppStateType, unknown, ActionType> => async dispatch => {
    const response = await API.getAllLaunchPads();
    try {        
        dispatch(setAllLaunchPadsAC(response))
    } 
    catch(e) {
        console.log(e)
    }    
}