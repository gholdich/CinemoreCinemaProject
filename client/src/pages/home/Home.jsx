//exapmle Home.jsx
import React, { Component } from 'react';
import carousel from './Carousel';
import comingSoon from './ComingSoon';
import news from './News';
import deals from './Deals';

export class home extends Component {
	
	render(){
		return(
		<div className="mainDiv" id="homeDiv" >
			<div id="carousel" >
				//load carousel component
			</div>
			<div id="comingSoon" >
				//load comingSoon component
			</div>
			<span id="newsAndDeals" >
				<div id="leftDiv" >
					//load news component
				</div>
				<div id="right div" >
					//load deals component
				</div>
			</span>
		</div>
		);
	}
}