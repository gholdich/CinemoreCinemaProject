import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Client from '../api/Client';
import ReactDOM from 'react-dom';
import Cinema from '../pages/about/Cinema';

export default class CinemaDrop extends Component{

	constructor(props){
			super(props);
		
			this.state = {
				cinemaActive: this.props.cinemaActive
			}
			
	}
	
	dropDown(){
		const { cinemaActive } = this.state;
		if(this.props.cinemaActive === false){
			return(
			<ul	className="dropDown"
				style={cinemaActive ? 	{ 'visibility': 'visible', 'opacity': 1 } : 
									{ 'visibility': 'hidden', 'opacity': 0 } }>
				<li className="dropLink"> 
					<Link to = {{ pathname: "/Cinema" }} > 
					<span>About</span></Link>
				</li>
												
				<li className="dropLink">
					<Link to = {{ pathname: "/Cinema" }}><span>Facilities</span></Link>
				</li>
						
				<li className="dropLink">
					<Link to = {{ pathname: "/Cinema" }}><span>Local Area</span></Link>
				</li>		
			</ul>
			)
		}else{
			return null;
		}
	}
	
	render(){
		return this.dropDown();
	}
}