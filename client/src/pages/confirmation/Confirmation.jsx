import React, {Component} from 'react';


export default class Confirmation extends Component {
	constructor(){
		super();
		
		var selectedLocation = 'Location';
		var selectedFilm='Films';
		var selectedTime='Time';
		
		if(localStorage.selectedLocation) {
			selectedLocation = JSON.parse(localStorage.selectedLocation);
		}
		if(localStorage.filmTime) {
			selectedFilm = JSON.parse(localStorage.filmTime);
		}
		if(localStorage.filmTitle) {
			selectedTime = JSON.parse(localStorage.filmTitle);
		}
		
		this.state={
			location: selectedLocation,
			film: selectedFilm,
			time:selectedTime,
			
		};
	}
	
	/*componentWillMount(){
		this.setState({
			location: this.props.location,
			film: this.props.film,
			time: this.props.time,
		})
	}*/
	
	
	render(){
		return(
			<div id="conf">
				<h2 className="message">Payment Confirmed</h2>
				<h3 className="message">Enjoy viewing</h3>
				<p className="message">{this.props.film} at:</p>
				<p className="message">{this.props.location} QA Cinema at</p>
				<p className="message">{this.props.time}</p>
			</div>
		);
	}
}