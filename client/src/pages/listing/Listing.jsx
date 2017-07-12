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
	
	displayFilms() {
		return this.state.showings.map((film, idx) => {
			return(
				<FilmBlock key={idx} id={film.filmId} showtimeBlock={this.displayShowTimes(film.filmId)} 
				title={film.title} genres={film.genres} posterFileName={film.poster} description={film.description} 
				shortDes={film.shortDes} release={film.releaseDate} director={film.director} cast={film.cast} />
			);
		});
	}

	displayShowTimes(filmId) {
		return this.state.showtimes.filter(showtime => showtime.filmId === filmId).map((showtime, idx) => {
			return(
				<ShowTimes key={idx} filmId={filmId} time={showtime.time} />
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