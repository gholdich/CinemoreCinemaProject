import React , { Component } from 'react';
import Client from '../api/Client';
import LocationPin from './LocationPin';

export default class LocationLabel extends Component {
	constructor(props) {
		super(props);
		let selectedLocation = 'Select Location';
		
		if(localStorage.selectedLocation) {
			selectedLocation = JSON.parse(localStorage.selectedLocation);
		}
		
		this.state = {
		location: selectedLocation
		}
	}
	
	render() {
		return(
			<div className = "location-label">
				Current Location : <span className = "selection" >
										{this.props.location}
									</span>
			</div>
		);
	}
}