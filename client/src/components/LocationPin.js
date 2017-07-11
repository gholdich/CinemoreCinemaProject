import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LocationPin extends Component{
	render(){
		return (
			<div id = 'location-container'>
				<img id = "location-pin" className = 'function-pin' src = '/images/LocPin.png' alt = 'location selector pin' />
			</div>
		);
	}
}