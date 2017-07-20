import React , { Component } from 'react';

export default class AboutLocation extends Component {
	
	render(){
		const { about, venue, openingTimes } = this.props;
		return(
			<div className="film" >
				<div className="film-poster" >
					<img className="poster" src="..\images\logo.png" />
				</div>
				<div className="film-info">
					<div className = "title">{ venue }</div>
					<div className="short description">{ about }</div>
					<div className="showtime">{ openingTimes }</div>
				</div>
			</div>
		)
	}
}