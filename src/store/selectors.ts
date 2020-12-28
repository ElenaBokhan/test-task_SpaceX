import { AppStateType } from './index';

export const getSelectedLaunches = (state: AppStateType) => {
    return state.LaunchesReducer.selectedLaunches
}
export const getSelectedField = (state: AppStateType) => {
    return state.LaunchesReducer.selectedField
}
export const getInitStatus = (state: AppStateType) => {
    return state.InitialReducer.initialization
}
export const getDataAllLaunchPads = (state: AppStateType) => {
    return state.LaunchPadsReducer.dataAllLaunchPads
}
export const getDataAllRockets = (state: AppStateType) => {
    return state.RocketsReducer.dataAllRockets
}