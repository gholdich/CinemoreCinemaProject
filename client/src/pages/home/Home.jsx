//exapmle Home.jsx
import React, { Component } from 'react';
//import carousel from './Carousel';
//import comingSoon from './ComingSoon';
//import news from './News';
//import deals from './Deals';

export default class home extends Component {
	
	render(){
		return(
		<div className="mainDiv" id="homeDiv" >
			<div id="carousel" >
				//load carousel component
			</div>
			<div id="comingSoon" >
				//load comingSoon component
			</div>
			<div id="newsAndDeals" >
				//load news component
				//load deals component
			</div>
		</div>
		);
	}
}