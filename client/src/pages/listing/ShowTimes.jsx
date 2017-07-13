import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ShowTimes extends Component {
	render() {
		const { time } = this.props;
		return(
			<span>
			<Link to={{ pathname: '/booking'}}>
			<div className="showtimeBlock" >
				<span id="showtime-time">{ time }</span>
				<span id="showtime-s-type">2D</span>
				<div id="showtime-screen">Screen: 1</div>
			</div>
			</Link>
			</span>
		);
	}
}