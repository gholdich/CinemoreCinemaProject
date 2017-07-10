//exapmle Home.jsx
import React from 'react';
import carousel from './Carousel';
import comingSoon from './ComingSoon';
import news from './News';
import deals from './Deals';

export class home extends React.Component{
	
	render(){
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
		
	}
}