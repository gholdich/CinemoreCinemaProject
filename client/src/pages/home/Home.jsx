import React, { Component } from 'react';
import Client from '../../api/Client';
import Carousel from './Carousel';
import ComingSoon from './ComingSoon';
import News from './News';
import Deals from './Deals';

export default class Home extends Component {
	constructor(prop){
		super();
		this.state = ({
			loading: true,
			showings: ''
		})
		
	}
	
	componentDidMount(){
		Client.fetchShowings(films => {
			this.setState({
				loading: false,
				showings: films
			});
		});
	}
	
	films(){
		console.log(this.state.showings);
		return this.state.showings.map((film, idx) => {
			console.log(film.poster);
				return(
				<a href="/films">
					<img className="resize" key={idx} id={film.filmId} src={"/images/posters/"+film.poster} alt={"Poster of "+film.title} />
				</a>
				);
			});
	}
	
	displayLoading(){
		return(
			<div id="loading-icon"><img src="/images/loading.gif" alt="Loading..." /></div>
		);
	}
	
	render() {
		const { loading } = this.state;
		return(
		<div className="mainDiv" id="homeDiv" >
			<div id="carousel" >
				<Carousel/>
			</div>
			<br/>
			<div id="gridOfEquals">
			{ loading ? this.displayLoading() : this.films() }
			</div>
			<div id="comingSoon" >
				
			</div>
			<span id="newsAndDeals" >
				<div id="leftDiv" >
					
				</div>
				<div id="right div" >
					
				</div>
			</span>
		</div>
		);
	}
}
