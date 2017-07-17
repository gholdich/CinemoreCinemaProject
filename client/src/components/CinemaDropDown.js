import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Client from '../api/Client';
import ReactDOM from 'react-dom';

export default class CinemaDropDown extends Component{
	
	constructor(){
		super();
	
		this.state = {
			isActive: false
		}
	}
	
	toggleDropDown() {
        this.setState({isActive: !this.state.isActive});
    }
	
	render(){
		const { isActive } = this.state;
		
		return(
			<div className="drop-link" style={isActive ? 	{ 'visibility': 'visible', 'opacity': 1 } : 
																		{ 'visibility': 'hidden', 'opacity': 0 } }>
							<div className="drop-button">
								<Link to = {{ pathname: "/About" }}><span>About</span></Link>
							</div>
													
							<div className="drop-button">
								<Link to = {{ pathname: "/Facilities" }}><span>Facilities</span></Link>
							</div>
							
							<div className="drop-button">
								<Link to = {{ pathname: "/LocalBusiness" }}><span>Local Area</span></Link>
							</div>
							
						</div>
		);
	}
}