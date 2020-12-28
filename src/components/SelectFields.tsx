import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRocketLaunchesThunk, getPadLaunchesThunk } from '../store/LaunchesReducer';
import { getDataAllLaunchPads, getDataAllRockets } from "../store/selectors";


export const SelectFields: React.FC = () => {
    
    const dataAllLaunchPads = useSelector(getDataAllLaunchPads);
    const dataAllRockets = useSelector(getDataAllRockets);
    const dispatch = useDispatch();
    const getPadLaunches = (name: string) => {
        dispatch(getPadLaunchesThunk(name))
    }
    const getRocketLaunches = (name: string) => {
        dispatch(getRocketLaunchesThunk(name))
    }
    return  <section className = "select-bar">
                <div className = "select-bar-item">
                    <p>Launch Pads</p> 
                    <select defaultValue="" 
                            onChange = { (e) => getPadLaunches(e.target.value) }>
                        <option value = "" disabled hidden>Select pad</option>
                        {dataAllLaunchPads.map((el, index) => {
                            return  <option value = { el.site_id } 
                                            key = { index }>{ el.site_name_long }
                                    </option>})}
                    </select>        
                </div>
                <div className = "select-bar-item">
                    <p>Rockets</p>
                    <select defaultValue="" 
                            onChange = { (e) => getRocketLaunches(e.target.value) } 
                            placeholder = "select rocket">
                        <option  value = "" disabled hidden>Select rocket</option>
                        {dataAllRockets.map((el, index) => {
                            return  <option value = {el.rocket_name} 
                                            key = { index } >{ el.rocket_name }
                                    </option>})}
                    </select>          
                </div>       
            </section>
}