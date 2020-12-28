import { useSelector } from "react-redux";
import { LaunchesList } from "./LaunchesList";
import React from "react";
import { getSelectedField, getSelectedLaunches } from "../store/selectors";

export const Launches: React.FC = () => {
    const selectedLaunches = useSelector(getSelectedLaunches);
    const selectedField = useSelector(getSelectedField);
    return <>
            { selectedLaunches.length === 0 && selectedField === "pad"
            ? <p className = "noResult">There were no successful launches from this site</p>
            : selectedLaunches.length === 0 && selectedField === "rocket"
            ? <p className = "noResult">There were no successful launches with this rocket</p>
            : <LaunchesList />}
           </>
}