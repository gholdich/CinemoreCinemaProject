import React, { Component } from 'react';

export default class ShowTimes extends Component {
	render() {
		const { time } = this.props;
		return(
			<a>
			<div className="showtimeBlock">
			<span id="showtime-time">{ time }</span>
			<span id="showtime-s-type">2D</span>
			<div id="showtime-screen">Screen: 1</div>
			</div>
			</a>
		);
	}
}