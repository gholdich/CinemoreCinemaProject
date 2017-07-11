import React, { Component } from 'react';
import FilmBlock from './FilmBlock';
import Client from '../../api/Client';


export default class Listing extends Component {
	constructor() {
		super();
		this.state = {
			loading: true,
			showings: []
		}
	}
	
	componentDidMount() {
		Client.fetchShowings(films => {
			this.setState({
				loading: false,
				showings: films
			});
		});
	}
	
	displayFilms() {
		return this.state.showings.map((film, idx) => {
			return(
				<FilmBlock key={idx} id={film.filmId} title={film.title} genres={film.genres} posterFileName={film.poster} description={film.description} shortDes={film.shortDes} />
			);
		});
	}
	
	displayLoading() {
		return(
			<div id="loading-icon"><img src="/images/loading.gif" alt="Loading..." /></div>
		);
	}
	
	
	render(){
		const { loading } = this.state;
		return(
		<div className="page" id="filmShowings" >
			<div id="gridOfEquals" >
				{ loading ? this.displayLoading() : this.displayFilms() }
			</div>
		</div>
		);
		
	}
}