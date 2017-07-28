import React, { Component } from 'react';
import Header from './components/Header';
//import Footer from './components/Footer';
import MainRoutes from './MainRoutes';
import Footer from './components/Footer';
import * as AppActions from "./Action/AppActions";
import appStore from "./Stores/AppStore";


export default class App extends Component {
	constructor() {
		super();
		this.state = {
			data: appStore.getBooking(),
			location: appStore.getLocation(),
			otherState: "data"
		}
		//console.log(this.state.data);
		this.onEventName = this.onEventName.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	
	componentDidMount(){
		appStore.loadData();
	}
	
	componentWillMount(){
		//AppStore.on(eventName, this.onEventName);
	}
	
	componentWillUnmount(){
		//AppStore.removeEventListener(eventName, this.onEventName);
	}
	
	onEventName(){
		this.SetState({
			data: appStore.getFunction()
		})
	}
	
	handleUserSearchInput(filterText){
		this.setState({filterText});
		AppActions.filterBySearch(filterText);
	}
	
	handleChange(e){
		this.setState({
			location: e
		});
	}
	
	render(props) {
		return(
			<div>
				<Header location={this.state.location} onChange={this.handleChange}/>
				<MainRoutes location={this.state.location} film={this.state.data.film} time={this.state.data.time} onChange={this.handleChange}/>
				<Footer />
			</div>
		);
	}
}