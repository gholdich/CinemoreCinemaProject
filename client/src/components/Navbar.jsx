import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Client from '../api/Client';
import ReactDOM from 'react-dom';
import CinemaDrop from './CinemaDrop';
import FilmDrop from './FilmDrop';

export default class Navbar extends Component{
	
	constructor(){
			super();
		
			this.state = {
				cinemaActive: true,
				filmActive: true
			}
	}
	
	toggleCinema() {
		this.setState({cinemaActive: !this.state.cinemaActive});
		if(this.state.filmActive === false){
			this.setState({filmActive: !this.state.filmActive});
		}
	}
		
	toggleFilm() {
		this.setState({filmActive: !this.state.filmActive});
		if(this.state.cinemaActive === false){
			this.setState({cinemaActive: !this.state.cinemaActive});
		}
	}
	
	render(){
		const { cinemaActive } = this.state;
		const { filmActive } = this.state;
		return(
			<div>
				<ul className="nav navbar-nav">
					<li className="link">
						<Link to={{ pathname: "/" }}><span>Home</span></Link>
					</li>
					
					<li className="link" onMouseEnter={this.toggleFilm.bind(this)} onMouseLeave={this.toggleFilm.bind(this)}>
						<Link to={{ pathname: "/Films" }}
						><span>Films</span></Link>
						<FilmDrop filmActive = {this.state.filmActive}/>	
					</li>
					
					<li className="link" onMouseEnter={this.toggleCinema.bind(this)} onMouseLeave={this.toggleCinema.bind(this)}>
						<Link to={{ pathname: "/Cinema" }} 
						><span>Cinemas</span></Link>
						<CinemaDrop cinemaActive = {this.state.cinemaActive}/>
					</li>
					
					<li className="link">
						<Link to={{ pathname: "/Faq" }}><span>FAQ</span></Link>
					</li>
					
					<li className="link">
						<Link to={{ pathname: "/Contact" }}><span>Contact Us</span></Link>
					</li>
					
					
				</ul>
			</div>
		);
	}
}