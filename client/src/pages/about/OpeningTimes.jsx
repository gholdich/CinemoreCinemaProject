import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class OpeningTimes extends Component {
	
	render() {
		const { time } = this.props;
		return(
			<div className="showtimeBlock">
				<span id="showtime-time">{ time }</span>
			</div>
		);
	}
}