import React, { Component } from 'react';
import FilmBlock from './FilmBlock';
import Client from '../../api/Client';


export default class Listing extends Component {
	constructor() {
		super();
		this.state = {
			showings: []
		}
	}
	
	componentWillMount() {
		Client.fetchShowings(films => {
			this.setState({
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
	
	
	render(){
		return(
		<div className="page" id="filmShowings" >
			<div id="gridOfEquals" >
			{this.displayFilms()}

			</div>
			
		</div>
		);
		
	}
}