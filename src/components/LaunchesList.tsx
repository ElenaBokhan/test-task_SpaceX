import { useSelector } from "react-redux";
import React from "react";
import { getSelectedLaunches } from "../store/selectors";

export const LaunchesList: React.FC = () => {
    const selectedLaunches = useSelector(getSelectedLaunches);

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