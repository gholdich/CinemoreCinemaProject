import React, { Component } from 'react';
import FilmBlock from './FilmBlock';
import ShowTimes from './ShowTimes';
import Client from '../../api/Client';
import LocationSelect from './LocationSelect';
import * as appActions from "../../Action/AppActions";
import MovieSearch from './MovieSearch';
import appStore from '../../Stores/AppStore';
import Order from './Order';

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
			filterText: "",
			filterValue: "a"
		}

		this.handleSearch = this.handleSearch.bind(this);
		this.handleFilter = this.handleFilter.bind(this);
	}

	//flux listener - james
	componentWillMount(){
		//console.log("Will Mount");
		appStore.on("searchChange", this._onChange);
		appStore.on("venueChange", this._onLocationChange);
	}

	//flux remove listeners - james
	componentWillUnmount(){
		//console.log("Unmount");
		appStore.removeListener("searchChange", this._onChange);
		appStore.removeListener("venueChange", this._onLocationChange);
	}

	//handle flux call for a filtered film list - james
	_onChange(){
		this.setState({showings: appStore.getFilteredFilms()});

	}

	//handle flux call for a filtered film list by location - james
	_onLocationChange(){
		var arr = appStore.getFilmsByLocation();
		//console.log(arr);

		this.setState({filteredShowings: arr});
		//this.setState({showings : appStore.getSortedFilms()});

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
	
	handleFilmChange(e){
		this.props.onFilmChange(e);
	}
	
	handleTimeChange(e){
		this.props.onTimeChange(e);
	}

	displayFilms() {
		//console.log("Message ");
		//console.log(this.state.filterText);
		//console.log("filtered ");
		//console.log(this.state.showings);
		
		console.log(this.state.filteredShowings);
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
	//this.setState({showings : appStore.getSortedFilms()});
		/*return this.state.showings.map((film, idx) => {
				return(
					<FilmBlock key={idx} id={film.filmId} showtimeBlock={this.displayShowTimes(film.filmId, film.title)}
					title={film.title} genres={film.genres} posterFileName={film.poster} description={film.description}
					shortDes={film.shortDes} release={film.releaseDate} director={film.director} cast={film.cast} videoId={film.videoId} classification={film.classification} />
				);
			});*/
	}

	displayShowTimes(filmId, title) {
		return this.state.showtimes.filter(showtime => showtime.filmId === filmId).map((showtime, idx) => {
			return(
				<ShowTimes key={idx} filmTitle={title} time={showtime.time} onFilmChange={this.handleFilmChange.bind(this)} onTimeChange={this.handleTimeChange.bind(this)} onClick={this.updateLocalStorage_Book.bind(this)} />
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
	
	handleFilter(filterValue){
		this.setState({filterValue: filterValue});
		appActions.sortFilms(filterValue, this.props.location);
	}


	render(){ // removed <LocationSelect />
		const { loading, showtimes } = this.state;
		return(
			<div>
				<MovieSearch filterText={this.state.filterText} onSearch={this.handleSearch} />
				<div className="page" id="filmShowings" >

					<div id="gridOfEquals" >
						{ loading ? this.displayLoading() : this.displayFilms() }
					</div>
				</div>
			</div>
		);
	}
}
//<Order onFilter={this.handleFilter} filterValue={this.state.filterValue} />