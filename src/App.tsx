import './App.css';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { initThunkCreator } from './store/InitialReducer';
import { Launches } from './components/Launches';
import { SelectFields } from './components/SelectFields';
import preloader from './preloader/35.svg';
import { getInitStatus } from './store/selectors';

export const App: React.FC = () => {
	const initStatus = useSelector(getInitStatus)
	const dispatch = useDispatch();
	
	useEffect(()=>{
		dispatch(initThunkCreator())
	}, [dispatch])	
	
	return 	<div className = "container">
				<h1>Launches</h1>
				{!initStatus ? <img src= { preloader } 
												className = "preloader"
												alt = "preloader"/>
										: <><SelectFields />
											<Launches />
											</>}			
			</div>		
	
}