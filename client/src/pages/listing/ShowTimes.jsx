import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ShowTimes extends Component {
	
	propergateBooking() {
		const { time, filmTitle } = this.props;
		this.props.onFilmChange(filmTitle);
		this.props.onTimeChange(time);
	}
	
	render() {
		const { time, filmTitle } = this.props;
		return(
			<span onClick={this.propergateBooking.bind(this)}>
			<Link to={{ pathname: '/booking'}}>
			<div className="showtimeBlock">
				<span id="showtime-time">{ time }</span>
				<span id="showtime-s-type">2D</span>
				<div id="showtime-screen">Screen: 1</div>
			</div>
			</Link>
			</span>
		);
	}
}