import { connect } from "react-redux";
import LaunchesList from "./LaunchesList";
import React from "react";
import { AppStateType } from "../store";
import { launchType } from "../type/type";

let Launches: React.FC<mapStatePropsType> = ({ selectedLaunches, selectedField }) => {

    return <>
            { selectedLaunches.length === 0 && selectedField === "pad"
            ? <p className = "noResult">There were no successful launches from this site</p>
            : selectedLaunches.length === 0 && selectedField === "rocket"
            ? <p className = "noResult">There were no successful launches with this rocket</p>
            : <LaunchesList />}
           </>
}
type mapStatePropsType = {
    selectedLaunches: Array<launchType>,	
    selectedField: string | null,
}
const mapStateToProps = (state: AppStateType): mapStatePropsType  => ({
    selectedLaunches: state.LaunchesReducer.selectedLaunches,	
    selectedField: state.LaunchesReducer.selectedField,
})

export default Launches = connect<mapStatePropsType, {}, {}, AppStateType>(mapStateToProps, {})(Launches)

