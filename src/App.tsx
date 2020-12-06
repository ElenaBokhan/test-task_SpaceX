import './App.css';
import React from "react";
import { connect } from 'react-redux';
import { initThunkCreator } from './store/InitialReducer';
import Launches from './components/Launches';
import SelectFields from './components/SelectFields';
import preloader from './preloader/35.svg'
import { AppStateType } from './store';


class App extends React.Component<mapStatePropsType & mapDispatchPropsType>{
	componentDidMount(){   
		this.props.initThunkCreator()		
	}	
	render(){
		return 	<div className = "container">
					<h1>Launches</h1>
					{!this.props.initStatus ? <img src= { preloader } 
												   className = "preloader"
												   alt = "preloader"/>
											: <><SelectFields />
												<Launches />
											  </>}			
				</div>		
	}
}
type mapStatePropsType = {
    initStatus: boolean    
}
type mapDispatchPropsType = {
    initThunkCreator: () => void   
}
const mapStateToProps = (state: AppStateType): mapStatePropsType => ({
    initStatus: state.InitialReducer.initialization	
})
export default connect<mapStatePropsType, mapDispatchPropsType, {}, AppStateType>(mapStateToProps, { initThunkCreator })(App)