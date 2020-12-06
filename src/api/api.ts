import { LaunchPadType, RocketType } from './../type/type';
import { launchType } from '../type/type';
import axios from "axios";

let instance = axios.create({
  baseURL: "https://api.spacexdata.com/v3",
});
type responseLaunches = Array<launchType>;
type responseLaunchPads = Array<LaunchPadType>
type responseRocket = Array<RocketType>

export const API = {
    getRocketLaunches(param: string){
      return instance.get<responseLaunches>(`/launches?rocket_name=${param}`).then(res => res.data)
    },
    getPadLaunches(param:string){
      return instance.get<responseLaunches>(`/launches?site_id=${param}`).then(res => res.data)
    },
    getAllLaunchPads(){
      return instance.get<responseLaunchPads>("launchpads").then(res => res.data)
    },
    getAllRocket(){
      return instance.get<responseRocket>("rockets").then(res => res.data)
    } 
}