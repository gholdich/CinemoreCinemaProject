import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Client from '../api/Client';
import ReactDOM from 'react-dom';


export default class LocationPin extends Component {
	constructor() {
		super();

		var selectedLocation = 'Select Location';
		if(localStorage.selectedLocation) {
			selectedLocation = JSON.parse(localStorage.selectedLocation);
		}

		this.state = {
			isActive: false,
			selectedLocation: selectedLocation,
			options: []
		}
	}

	componentDidMount() {
		Client.fetchLocations(locations => {
			this.setState({options: locations});
		});
		document.addEventListener('click', this.handleClickOutside.bind(this), true);
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleClickOutside.bind(this), true);
	}

	handleClickOutside(event) {
		const domNode = ReactDOM.findDOMNode(this);

		if ((!domNode || !domNode.contains(event.target))) {
			this.setState({
				isActive : false
			});
		}
	}

	getOptions() {
		return this.state.options.map((option, index) => {
			return(
					<option key={index} value={option.name}>{option.name}</option>
			);
		});
	}

    toggleTooltip() {
        this.setState({isActive: !this.state.isActive});
    }

	logChange(e) {
		//console.log("Selected: " + JSON.stringify(e.target[e.target.value].text));
	}

	updateSelection(e) {
		const options = this.state.options;
		if(e.target.value !== 'Select Location') {
		const value = e.target.value;
		this.setState({selectedLocation : value});
		localStorage.selectedLocation = JSON.stringify(value);

		for (let i = 0; i<options.length; i++){
			//console.log(options[i].name);
			if(e.target.value===this.state.options[i].name){
				//console.log(this.state.options[i].id);
				localStorage.selectedCinemaId = JSON.stringify(this.state.options[i].id);
			}
		}
		this.props.onChange(value);
		}
	}

	render() {
		const { isActive, selectedLocation } = this.state;
		return(
			<div id='location-container'>
				<img 	id="location-pin"
						className='function-pin'
						src='/images/LocPin.png'
						alt='location selector pin'
						onClick={this.toggleTooltip.bind(this)}
						/*onClickOutside={this.toggleTooltip.bind(this)}*/
				/>
				<div className="ToolTip">
					<div id="aa" style={isActive ? { 'visibility': 'visible', 'opacity': 1 } : { 'visibility': 'hidden', 'opacity': 0 } }>
						<div>Change Location</div>
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
