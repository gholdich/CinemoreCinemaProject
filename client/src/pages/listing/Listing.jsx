import React, { Component } from 'react';
import FilmBlock from './FilmBlock';
import ShowTimes from './ShowTimes';
import Client from '../../api/Client';
import LocationSelect from './LocationSelect';

export default class Listing extends Component {
	constructor() {
		super();

		var selectedCinemaId = 0;
		if(localStorage.selectedCinemaId) {
			selectedCinemaId = JSON.parse(localStorage.selectedCinemaId);
		}

		this.state = {
			loading: true,
			cinemaId: selectedCinemaId,
			showings: [],
			showtimes: []
		}
	}
	
	componentDidMount() {
		Client.fetchShowings(films => {
			Client.fetchShowTimes(this.state.cinemaId, showtime => {
				this.setState({
					loading: false,
					showings: films,
					showtimes: showtime
				});
			});
		});

	}
	//Here are the localStorage variables: selectedLocation; selectedCinemaId; filmTitle; filmTime;
	updateLocalStorage_Book(filmTime, filmTitle) {
			localStorage.filmTitle = JSON.stringify(filmTitle);
			localStorage.filmTime = JSON.stringify(filmTime);
			console.log(filmTitle + ": "+filmTime);
	}
	
	displayFilms() {
		return this.state.showings.map((film, idx) => {
			return(
				<FilmBlock key={idx} id={film.filmId} showtimeBlock={this.displayShowTimes(film.filmId, film.title)} 
				title={film.title} genres={film.genres} posterFileName={film.poster} description={film.description} 
				shortDes={film.shortDes} release={film.releaseDate} director={film.director} cast={film.cast} />
			);
		});
	}

	displayShowTimes(filmId, title) {
		return this.state.showtimes.filter(showtime => showtime.filmId === filmId).map((showtime, idx) => {
			return(
				<ShowTimes key={idx} filmTitle={title} time={showtime.time} onClick={this.updateLocalStorage_Book.bind(this)} />
			);
		});
	}
	
	displayLoading() {
		return(
			<div id="loading-icon"><img src="/images/loading.gif" alt="Loading..." /></div>
		);
	}
	
	
	render(){ // removed <LocationSelect />
		const { loading, showtimes } = this.state;
		return(
			<div className="page" id="filmShowings" >
				<div id="gridOfEquals" >
					{ loading ? this.displayLoading() : this.displayFilms() }
				</div>
			</div>
		);
	}
}