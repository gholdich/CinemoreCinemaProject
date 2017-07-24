import React, {Component} from 'react';
import AboutQA from './AboutQA';
import AboutLocation from './AboutLocation';
import Client from '../../api/Client';
import OpeningTimes from './OpeningTimes';
import * as appActions from "../../Action/AppActions";
import appStore from '../../Stores/AppStore';

export default class Cinema extends Component {
	
	constructor(){
		super();
		// this._onChange = this._onChange.bind(this);
		// this._onLocationChange = this._onLocationChange.bind(this);
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
			picture: ''
		}
	}
	
	// componentWillMount(){
		// console.log("Will Mount");
		// appStore.on("locationChange", this._onLocationChange);
	// }
	
	// componentWillUnmount(){
		// console.log("Unmount");
		// appStore.removeListener("locationChange", this._onLocationChange);
	// }
	
	componentDidMount() {
		Client.fetchCinemas(cinema => {
			var venue = cinema.filter(cinema => cinema.cinemaId == this.state.cinemaId);
			venue.map(cinema => {
				this.setState({
					loading: false,
					abouts: cinema.about,
					venue: cinema.location,
					openingTimes: [
						cinema.openingTimes[0].monday,
						cinema.openingTimes[0].tuesday,
						cinema.openingTimes[0].wednesday,
						cinema.openingTimes[0].thursday,
						cinema.openingTimes[0].friday,
						cinema.openingTimes[0].saturday,
						cinema.openingTimes[0].sunday
					],
					picture: cinema.picture
				});	
			})
			console.log(this.state.openingTimes);
		})
	}
		
	displayAbout() {
			return(
				<AboutLocation id={this.state.cinemaId} 
				venue={this.state.venue} pictureFileName={this.state.picture} 
				about={this.state.abouts}
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