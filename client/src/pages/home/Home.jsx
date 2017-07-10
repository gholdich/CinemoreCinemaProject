
import React, { Component } from 'react';
import Carousel from './Carousel';
import ComingSoon from './ComingSoon';
import News from './News';
import Deals from './Deals';

export default class Home extends Component {
	
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