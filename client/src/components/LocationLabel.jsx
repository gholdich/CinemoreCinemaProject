import React , { Component } from 'react';
import Client from '../api/Client';
import LocationPin from './LocationPin';

export default class LocationLabel extends Component {
	constructor(props) {
		super(props);
		
		let selectedLocation = 'None Selected';
		
		if(localStorage.selectedLocation) {
			selectedLocation = JSON.parse(localStorage.selectedLocation);
		}
		
		this.state = {
		location: selectedLocation
		}
	}
	
	render() {
		//const { selectedLocation } = this.state;
		return(
			<div className = "location-label">Current Location : <span className = "selection">{this.state.location}</span></div>
		);
	}
}