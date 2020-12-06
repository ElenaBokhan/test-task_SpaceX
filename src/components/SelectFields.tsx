import React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../store";
import { getRocketLaunchesThunk, getPadLaunchesThunk } from '../store/LaunchesReducer';
import { LaunchPadType, RocketType } from "../type/type";

let SelectFields: React.FC<mapStatePropsType & mapDispatchPropsType> = ({ getRocketLaunchesThunk, getPadLaunchesThunk, dataAllLaunchPads, dataAllRockets }) => {

    return  <section className = "select-bar">
                <div className = "select-bar-item">
                    <p>Launch Pads</p> 
                    <select defaultValue="" 
                            onChange = { (e) => getPadLaunchesThunk(e.target.value) }>
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
                            onChange = { (e) => getRocketLaunchesThunk(e.target.value) } 
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
type mapStatePropsType = {
    dataAllLaunchPads: Array<LaunchPadType>
	dataAllRockets: Array<RocketType>
}
type mapDispatchPropsType = {
    getRocketLaunchesThunk: (name: string) => void
    getPadLaunchesThunk: (name: string) => void
}
const mapStateToProps = (state: AppStateType): mapStatePropsType => ({
    dataAllLaunchPads: state.LaunchPadsReducer.dataAllLaunchPads,	
	dataAllRockets: state.RocketsReducer.dataAllRockets,
})


export default SelectFields = connect<mapStatePropsType, mapDispatchPropsType, {}, AppStateType>(mapStateToProps, { getRocketLaunchesThunk, getPadLaunchesThunk })(SelectFields)

