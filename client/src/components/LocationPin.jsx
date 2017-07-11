import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ToolTip from 'react-portal-tooltip';
import Select from 'react-select';
// import Dropdown from 'react-simple-dropdown';
// import DropdownContent from 'react-simple-dropdown';
// import DropdownTrigger from 'react-simple-dropdown';

const options = [
		{ value: 'one', label: 'One' },
		{ value: 'two', label: 'Two' }
		];
		
export default class LocationPin extends Component{
	
	
	
	state = {
        isTooltipActive: false
    }
    showTooltip() {
        this.setState({isTooltipActive: true});
    }
    hideTooltip() {
        this.setState({isTooltipActive: false});
    }
	
	render(){
		
		

		function logChange(val) {
			console.log("Selected: " + JSON.stringify(val));
		}
		
		return (
			<div id = 'location-container' >
				<img id = "location-pin" className = 'function-pin' src = '/images/LocPin.png' alt = 'location selector pin' onMouseEnter={this.showTooltip.bind(this)} onMouseOut={this.hideTooltip.bind(this)}/>
				<ToolTip active={this.state.isTooltipActive} position="bottom" arrow="center" parent="#location-pin">
                    <div>
						<h3>Current Location:</h3>
						<p>will appear here</p>
						<h3>Select Location:</h3>
						<Select
							name="form-field-name"
							value="one"
							options={options}
							onChange={logChange}
						/>
                    </div>
                </ToolTip>
			</div>
		);
	}
}