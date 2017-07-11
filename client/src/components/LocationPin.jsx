import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const options = [
		{ value: 'one', label: 'One' },
		{ value: 'two', label: 'Two' }
		];
		
export default class LocationPin extends Component {
	constructor() {
		super();
		this.state = {
			isActive: false,
			selectedLocation: 'Not chosen'
		}
	}
	
	getOptions() {
		return options.map((option, index) => {
			return(
					<option key={index} value={option.value}>{option.label}</option>
			);
		});
	}
	
    toggleTooltip() {
        this.setState({isActive: !this.state.isActive});
    }
	
	logChange(e) {
		console.log("Selected: " + JSON.stringify(e.target.value));
	}
	
	render() {
		const { isActive, selectedLocation } = this.state;
		return(
			<div id='location-container'>
				<img id="location-pin" className='function-pin' src='/images/LocPin.png' alt='location selector pin' onClick={this.toggleTooltip.bind(this)} />
				<div className="ToolTip">
					<div id="aa" style={isActive ? { 'visibility': 'visible', 'opacity': 1 } : { 'visibility': 'hidden', 'opacity': 0 } }>
						<h3>Current Location:</h3>
						<p>{selectedLocation}</p>
						<h3>Select Location:</h3>
						<select onChange={this.logChange.bind(this)}>
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