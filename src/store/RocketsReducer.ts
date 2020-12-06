import { RocketType } from './../type/type';
import { AppStateType } from './index';
import { ThunkAction } from 'redux-thunk';
import { API } from "../api/api";

const SET_ALL_ROCKETS = "SET-ALL-ROCKETS";

const initialState = {
    dataAllRockets: [] as Array<RocketType>,		
}
type initialStateType = typeof initialState;
export const RocketsReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type){
        case "SET-ALL-ROCKETS":
            return { ...state,
                dataAllRockets: [...action.data],
            }
        default:
             return state;
    }        
}
type ActionType = setAllRocketsActionType

type setAllRocketsActionType = {
    type: typeof SET_ALL_ROCKETS,
    data: Array<RocketType>
}
export const setAllRocketsAC = (data: Array<RocketType>): setAllRocketsActionType => ({type: SET_ALL_ROCKETS, data})

export const getAllRocketsThunk = (): ThunkAction<void, AppStateType, unknown, ActionType> => async dispatch => {
    const response = await API.getAllRocket();
    try {
        dispatch(setAllRocketsAC(response))
    } 
    catch(e) {
        console.log(e)
    }    
}