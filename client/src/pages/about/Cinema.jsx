import React, {Component} from 'react';
import AboutQA from './AboutQA';
import AboutLocation from './AboutLocation';
import Client from '../../api/Client';


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
			venue: ''
		}
	}
	
	componentDidMount() {
		Client.fetchCinemas(cinema => {
			var venue = cinema.filter(cinema => cinema.cinemaId == this.state.cinemaId);
				this.setState({
					loading: false,
					abouts: venue.map(cinema => cinema.about),
					venue: venue.map(cinema => cinema.location)
				});
		});
	}
		
	displayAbout() {
			return(
				<AboutLocation id={this.state.cinemaId} 
				venue={this.state.venue} about={this.state.abouts} />
			);
	}
	
	// displayLocationAbout(cinemaId, cinema) {
		// return this.state.cinemas.filter(about => about.cinemaId === cinemaId).map((about, idx) => {
			// return(
				// <AboutLocation key={idx} id={cinema.cinemaId} 
				// venue={cinema.location} about={cinema.about} />
			// );
		// });
	// }
	
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