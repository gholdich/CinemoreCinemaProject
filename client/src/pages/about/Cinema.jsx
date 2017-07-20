import React, {Component} from 'react';
import AboutQA from './AboutQA';
import AboutLocation from './AboutLocation';
import Client from '../../api/Client';
import OpeningTimes from './OpeningTimes';

export default class Cinema extends Component {
	
	constructor(){
		super();
		
		var selectedCinemaId = 0;
		if(localStorage.selectedCinemaId) {
			selectedCinemaId = JSON.parse(localStorage.selectedCinemaId);
		}
		
		this.state = {
			loading: true,
			cinemaId: selectedCinemaId,
			abouts: [],
			venue: '',
			openingTimes: [],
			picture: []
		}
	}
	
	componentDidMount() {
		Client.fetchCinemas(cinema => {
			var venue = cinema.filter(cinema => cinema.cinemaId == this.state.cinemaId);
				this.setState({
					loading: false,
					abouts: venue.map(cinema => cinema.about),
					venue: venue.map(cinema => cinema.location),
					openingTimes : 	venue.map(cinema => cinema.openingTimes.monday)
				});
		});
	}
		
	displayAbout() {
			return(
				<AboutLocation id={this.state.cinemaId} 
				venue={this.state.venue} about={this.state.abouts}
				openingTimes={this.displayOpeningTimes()}/>
			);
	}
	
	displayOpeningTimes() {
			return(
				<OpeningTimes id={this.state.cinemaId} 
				time={this.state.openingTimes}/>
			);
	}
	
	displayLoading() {
		return(
			<div id="loading-icon"><img src="/images/loading.gif" alt="Loading..." /></div>
		);
	}
	
	render(){
		const { loading, about } = this.state;
		return(
			<div id = "gridOfEquals">
					<AboutQA />0
					<div>
						{ loading ? this.displayLoading() : this.displayAbout() }
					</div>
					<h1>Facilities</h1>
					<h1>Local Area</h1>
			</div>
		);
	}
}