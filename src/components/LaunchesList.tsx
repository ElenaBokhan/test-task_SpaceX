import { connect } from "react-redux";
import React from "react";
import { AppStateType } from "../store";
import { launchType } from "../type/type";

let LaunchesList: React.FC<mapStatePropsType> = ({selectedLaunches}) => {

    return  <>
            {selectedLaunches.map((el, index) => { 
                return <div className = "launches-item" key = { index }>
                            <img src = { el.links.mission_patch_small }                        
                                 height = "120px" 
                                 alt = "patch"/>
                            <h4>{ el.mission_name }</h4>
                            <time>{ el.launch_date_local.replace(/T.*/,"").split('-').reverse().join('.') }</time>
                            <p className = "details">{ el.details }</p>
                        </div>})}
            </>               
                        
}
type mapStatePropsType = {
    selectedLaunches: Array<launchType>
}
const mapStateToProps = (state: AppStateType): mapStatePropsType => ({
	selectedLaunches: state.LaunchesReducer.selectedLaunches,	
})

export default LaunchesList = connect<mapStatePropsType, {}, {}, AppStateType>(mapStateToProps, {})(LaunchesList)