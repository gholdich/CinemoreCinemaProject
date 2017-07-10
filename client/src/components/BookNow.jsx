import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BookNow extends Component {
	render() {
		return(
			<div id="bookNow">
				<Link to={{ pathname: '/booking'}}>
					<div>Book Now!</div>
				</Link> 
			</div>
		);
	}
}