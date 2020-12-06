import { launchType } from './../type/type';
import { AppStateType } from './index';
import { ThunkAction } from 'redux-thunk';
import { API } from "../api/api";

const SET_LAUNCHES = "SET-LAUNCHES";
const SET_SELECTED_FIELD = "SET-SELECTED-FIELD";

const initialState = {    
    selectedLaunches: [] as Array<launchType>,
    selectedField: null	as string | null	
}
type initialStateType = typeof initialState;

export const LaunchesReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type){
        case "SET-LAUNCHES":
            return { ...state,
                selectedLaunches: [...action.data],
            }  
        case "SET-SELECTED-FIELD":
            return { ...state,
                selectedField: action.field,
            }       
        default:
            return state;
    }        
}
type ActionType = setLaunchesActionType | setSelectedFieldActionType
type setLaunchesActionType = {
    type: typeof SET_LAUNCHES
    data: Array<launchType>
}
export const setLaunchesAC = (data: Array<launchType>): setLaunchesActionType => ({type: SET_LAUNCHES, data})
type setSelectedFieldActionType = {
    type: typeof SET_SELECTED_FIELD
    field: string
}
export const setSelectedFieldAC = (field: string): setSelectedFieldActionType => ({type: SET_SELECTED_FIELD,field})

export const getRocketLaunchesThunk = (param: string):ThunkAction<void, AppStateType, unknown, ActionType> => async dispatch => {
    const response = await API.getRocketLaunches(param)
    try {
        dispatch(setLaunchesAC(response))
        dispatch(setSelectedFieldAC("rocket"))
    } 
    catch(e) {
        console.log(e)
    }    
}
export const getPadLaunchesThunk = (param: string):ThunkAction<void, AppStateType, unknown, ActionType> => async dispatch => {
    const response = await API.getPadLaunches(param)
    try {
        dispatch(setLaunchesAC(response))
        dispatch(setSelectedFieldAC("pad"))
    } 
    catch(e) {
        console.log(e)
    }    
}
