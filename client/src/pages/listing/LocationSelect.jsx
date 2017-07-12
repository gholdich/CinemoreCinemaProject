import React , { Component } from 'react';
import Client from '../../api/Client';
import LocationPin from '../../components/LocationPin';

export default class LocationSelect extends Component {
	constructor(props) {
		super(props);
		this.state = {
		selectedLocation: this.props.selectedLocation,
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
	
	logChange(e) {
		console.log("Selected: " + JSON.stringify(e.target.value));
	}
	
	updateSelection(e) {
		if(e.target.value !== 'Select Location'){
			this.setState({selectedLocation : e.target.value});
		}
	}
	
	render() {
		const { selectedLocation } = this.state;
		return(
			<div className = "location-tool">
				<div className = "title">Select Location <span>
						<select onChange={this.updateSelection.bind(this)}>
						<option value="Select Location">Select Location</option>
						{this.getOptions()}
						</select>
					</span>
				</div>
					
				
				<div className = "title">Location <span className = "selection">{selectedLocation}</span></div>
			</div>
		);
	}
}