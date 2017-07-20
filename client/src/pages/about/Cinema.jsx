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
			openingTimes : {},
			picture: []
		}
	}
	
	componentDidMount() {
		Client.fetchCinemas(cinema => {
			var venue = cinema.filter(cinema => cinema.cinemaId == this.state.cinemaId);
			venue.map(cinema => {
				this.setState({
					loading: false,
					abouts: cinema.about,
					venue: cinema.location,
					openingTimes: [
						cinema.openingTimes.monday,
						cinema.openingTimes.tuesday,
						cinema.openingTimes.wednesday,
						cinema.openingTimes.thursday,
						cinema.openingTimes.friday,
						cinema.openingTimes.saturday,
						cinema.openingTimes.sunday
					]
				});	
			})
			console.log(this.state.openingTimes);
		})
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
				timeMon={this.state.openingTimes[0]}
				timeTue={this.state.openingTimes[1]}
				timeWed={this.state.openingTimes[2]}
				timeThu={this.state.openingTimes[3]}
				timeFri={this.state.openingTimes[4]}
				timeSat={this.state.openingTimes[5]}
				timeSun={this.state.openingTimes[6]}/>
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
					<AboutQA />
					<div>
						{ loading ? this.displayLoading() : this.displayAbout() }
					</div>
					<h1>Facilities</h1>
					<h1>Local Area</h1>
			</div>
		);
	}
}