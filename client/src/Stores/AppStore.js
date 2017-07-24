import {EventEmitter} from "events";
import dispatcher from "../Dispatcher/dispatcher";
//import cinemas from "../db/cinemas.json";
//import showings from "../db/showings.json";
import Client from "../api/Client";

class AppStore extends EventEmitter {
	constructor(){
		super();
		this.cinemas = [];
		this.filteredCinemas = [];
		this.films = [];
		this.filteredListing = [];
		this.locatedFilms = [];
		this.locations = [];
		//this.showings = Client.fetchShowings();
		this.data = {
			location: "London",
			film: "test film",
			time: "test time"
		}
		this.location = "Choose a Location";
	}

	getLocation(){
		return this.location;
	}

	loadData(){
		Client.fetchShowings(films => {
			this.films = films;
		});
		Client.fetchCinemas(cinemas => {
			this.cinemas = cinemas;
			//console.log("loadData");
			//console.log(this.cinemas);
		});
		Client.fetchLocations(locations => {
			this.locations = locations;
			//console.log(this.locations);
		});
	}

	getBooking(){
		return this.data;
	}

	getCinemas(){
		//this.loadData();
		//console.log("getCinemas");
		//console.log(this.locations);
		return this.locations;
	}

	cinemaByLocation(location){
		this.filteredCinemas = [];
		this.cinemas.forEach((cinema) => {
			//cinema.filter(cinema => cinema.cinemaId == this.state.cinemaId);
			if(cinema.location == location){
				console.log("match found");
				this.filteredCinemas.push(cinema);
			}
		});
		this.emit("venueChange");
	}

	getLocatedCinemas(){
		return this.filteredCinemas;
	}

	getFilms(){
		return this.films;
	}

	getCinemaFromIndex(index){
		return this.cinemas[index].location;
	}

	getShowings(){
		return this.showings;
	}

	getShowingFromIndex(index){
		return this.showings[index];
	}

	getFilms(){
		return this.films;
	}

	getFilmFromIndex(index){
		return this.films[index];
	}

	filmsByLocation(location){
		this.locatedFilms = [];

		this.cinemas.forEach((cinema) => {
			if(location == cinema.location){
				for(var i = 0; i < cinema.showings.length;i++){
					this.films.forEach((film) => {
						if(film.filmId == cinema.showings[i].filmId){
							if(!this.locatedFilms.includes(film)){
								this.locatedFilms.push(film);
							}
						}
					})
				}
			}
		});
		this.emit('locationChange');
	}

	getFilmsByLocation(){
		return this.locatedFilms;

	}



	/* getFilteredShowing(cinema_id, film_id){
		var filteredShowings = [];
		for(let i = 0; i < this.cinemas.length;i++){
			for(let j = 0; j < this.cinemas[i].showings.length; j++){
				if(this.cinemas[i].showings[j].filmId == film_id){
					if(this.cinemas[i].cinemaId == cinema_id){
						filteredShowings.push(this.showings[i]);
					}
				}
			}
	    }
		return filteredShowings;
	} */

	getFilteredFilms(){
		//console.log("get filtered in appstore");
		//console.log(this.filteredListing);
		return this.filteredListing;
	}

	filmSearch(searchParameters) {
		this.filteredListing = [];
		if(this.locatedFilms == ""){
			this.start = this.films;
		}else{
			this.start = this.locatedFilms;
		}
		//console.log(this.films);
		//console.log(searchParameters);
		//console.log(this.films);
		this.start.forEach((film) => {
			if(film.title.toUpperCase().indexOf(searchParameters) !== -1){
				//console.log(film.title);
				this.filteredListing.push(film);
			}else if(film.cast.toUpperCase().indexOf(searchParameters) !== -1){
				//console.log(film.title);
				this.filteredListing.push(film);
			}else{
				for(let i = 0; i < film.genres.length; i++){
					if(film.genres[i].toUpperCase().indexOf(searchParameters) !== -1){
						//console.log(film.title);
						this.filteredListing.push(film);
					}
				}
			}
		});
		//console.log("store filtered listing")
		//console.log(this.filteredListing);
		this.emit('searchChange');
	}

	handleActions(action){
		switch(action.type){
			case "VIEW_ACTION":
				console.log(this.data);
				break;
			case "FILTER_SEARCH":
				this.filmSearch(action.searchParameters);
				break;
			case "LOCATION_FILTER_SEARCH":
				this.filmsByLocation(action.location);
			case "ABOUT_LOCATION":
				this.cinemaByLocation(action.location);
			default:
				break;
		}
	}

	/* handleActions(action) {
		switch(action.type) {
			case "FILTER_SEARCH":
				this.filmSearch(action.searchParameters);
				break;
			default:
				break;
		}
	}  */
}
	const appStore = new AppStore;
	dispatcher.register(appStore.handleActions.bind(appStore));
	export default appStore;
