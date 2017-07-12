import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Client from '../api/Client';

		
export default class LocationPin extends Component {
	constructor() {
		super();
		this.state = {
			isActive: false,
			selectedLocation: 'Select Location',
			options: []
		}
	}
	
	componentDidMount() {
		Client.fetchLocations(locations => {
			this.setState({options: locations});
		});
	}
	
	getOptions() {
		return this.state.options.map((option, index) => {
			return(
					<option key={index} value={option}>{option}</option>
			);
		});
	}
	
    toggleTooltip() {
        this.setState({isActive: !this.state.isActive});
    }
	
	logChange(e) {
		console.log("Selected: " + JSON.stringify(e.target.value));
	}
	
	updateSelection(e) {
		if(e.target.value !== 'Select Location'){
			this.setState({selectedLocation : e.target.value});
		}
	}
	
	render() {
		const { isActive, selectedLocation } = this.state;
		return(
			<div id='location-container'>
				<img id="location-pin" className='function-pin' src='/images/LocPin.png' alt='location selector pin' onClick={this.toggleTooltip.bind(this)} />
				<div className="ToolTip">
					<div id="aa" style={isActive ? { 'visibility': 'visible', 'opacity': 1 } : { 'visibility': 'hidden', 'opacity': 0 } }>
						<h3>Selected Location:</h3>
						<p>{selectedLocation}</p>
						<h3>Select Location:</h3>
						<select onChange={this.updateSelection.bind(this)}>
							<option value="Select Location">Select Location</option>
							{this.getOptions()}
						</select>
					<span id="bb"></span>
					<span id="cc"></span>
					</div>
				</div>
			</div>
		);
	}
}