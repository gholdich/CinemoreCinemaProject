import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class OpeningTimes extends Component {
	
	render() {
		const { timeMon, timeTue, timeThu, timeWed, timeFri, timeSat, timeSun } = this.props;
		return(	
		<div className = "openingTimes-container">
			<div className="openingTime-day">Opening Hours:</div>
			<div className="openingTimeBlock">
				<span className="openingTime-day">Monday:</span><span className = "openingTime-time">{ timeMon }</span>
				<span className="openingTime-day">Tuesday:</span><span className = "openingTime-time">{ timeTue }</span>
				<span className="openingTime-day">Wednesday:</span><span className = "openingTime-time">{ timeWed }</span>
				<span className="openingTime-day">Thursday:</span><span className = "openingTime-time">{ timeThu }</span>
				<span className="openingTime-day">Friday:</span><span className = "openingTime-time">{ timeFri }</span>
				<span className="openingTime-day">Saturday:</span><span className = "openingTime-time">{ timeSat }</span>
				<span className="openingTime-day">Sunday:</span><span className = "openingTime-time">{ timeSun }</span>
			</div>
		</div>
		);
	}
}