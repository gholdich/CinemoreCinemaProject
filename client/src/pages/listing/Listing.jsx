import React, { Component } from 'react';
import FilmBlock from './FilmBlock';
import ShowTimes from './ShowTimes';
import Client from '../../api/Client';
import LocationSelect from './LocationSelect';
import * as appActions from "../../Action/AppActions";
import MovieSearch from './MovieSearch';
import appStore from '../../Stores/AppStore';

export default class Listing extends Component {
	constructor() {
		super();
		this._onChange = this._onChange.bind(this);
		this._onLocationChange = this._onLocationChange.bind(this);
		var selectedCinemaId = 0;

		if(localStorage.selectedCinemaId) {
			selectedCinemaId = JSON.parse(localStorage.selectedCinemaId);
		}

		this.state = {
			loading: true,
			cinemaId: selectedCinemaId,
			showings: [],
			filteredShowings: [],
			showtimes: [],
			filterText: ""
		}

		this.handleSearch = this.handleSearch.bind(this);
	}

	componentWillMount(){
		//console.log("Will Mount");
		appStore.on("searchChange", this._onChange);
		appStore.on("locationChange", this._onLocationChange);
	}

	componentWillUnmount(){
		//console.log("Unmount");
		appStore.removeListener("searchChange", this._onChange);
		appStore.removeListener("locationChange", this._onLocationChange);
	}

	_onChange(){
		this.setState({showings: appStore.getFilteredFilms()});
	}

	_onLocationChange(){
		var arr = appStore.getFilmsByLocation();
		//console.log(arr);

		this.setState({filteredShowings: arr});
		//console.log(this.state.showings);
		//console.log("here");
		//console.log(this.state.showings);
	}

	componentDidMount() {
		//console.log("Mounting");
		 Client.fetchShowings(films => {
			Client.fetchShowTimes(this.state.cinemaId, showtime => {
				this.setState({
					loading: false,
					showings: films,
					showtimes: showtime
				});
			});
		}); 

		appActions.filterByLocation(this.props.location);

	}

	//Here are the localStorage variables: selectedLocation; selectedCinemaId; filmTitle; filmTime;
	updateLocalStorage_Book(filmTime, filmTitle) {
			localStorage.filmTitle = JSON.stringify(filmTitle);
			localStorage.filmTime = JSON.stringify(filmTime);
			console.log(filmTitle + ": "+filmTime);
	}

	displayFilms() {
		//console.log("Message ");
		//console.log(this.state.filterText);
		//console.log("filtered ");
		//console.log(this.state.showings);
		if(this.state.filterText != ""){
			return this.state.showings.map((film, idx) => {
				return(
					<FilmBlock key={idx} id={film.filmId} showtimeBlock={this.displayShowTimes(film.filmId, film.title)}
					title={film.title} genres={film.genres} posterFileName={film.poster} description={film.description}
					shortDes={film.shortDes} release={film.releaseDate} director={film.director} cast={film.cast} videoId={film.videoId} classification={film.classification} />
				);
			});
		}else if(this.state.filteredShowings != ""){
			return this.state.filteredShowings.map((film, idx) => {
				return(
					<FilmBlock key={idx} id={film.filmId} showtimeBlock={this.displayShowTimes(film.filmId, film.title)}
					title={film.title} genres={film.genres} posterFileName={film.poster} description={film.description}
					shortDes={film.shortDes} release={film.releaseDate} director={film.director} cast={film.cast} videoId={film.videoId} classification={film.classification}/>
				);
			});

			}else{
				return this.state.showings.map((film, idx) => {
					return(
						<FilmBlock key={idx} id={film.filmId}
						title={film.title} genres={film.genres} posterFileName={film.poster} description={film.description}
						shortDes={film.shortDes} release={film.releaseDate} director={film.director} cast={film.cast} videoId={film.videoId} classification={film.classification}/>
					);
				});
			}
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

	handleSearch(filterText){
		this.setState({filterText: filterText});
		appActions.filterBySearch(filterText.toUpperCase());
	}


	render(){ // removed <LocationSelect />
		const { loading, showtimes } = this.state;
		return(
			<div>
				<MovieSearch filterText={this.state.filterText} onSearch={this.handleSearch.bind(this)} />

				<div className="page" id="filmShowings" >

					<div id="gridOfEquals" >
						{ loading ? this.displayLoading() : this.displayFilms() }
					</div>
				</div>
			</div>
		);
	}
}
