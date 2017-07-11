import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BookNow extends Component {
	render() {
		return(
			<div id="bookNow">
				<div className="left quickBook">
				
				</div>
				<div className="center quickBook">
					<Link to={{ pathname: '/booking'}}>
						<span>Book Now!</span>
					</Link> 
				</div>
				<div className="right quickBook">
				
				</div>
			</div>
		);
	}
}