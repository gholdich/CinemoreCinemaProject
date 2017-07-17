import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Client from '../api/Client';
import ReactDOM from 'react-dom';

export default class Navbar extends Component{
	
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
			<div>
				<ul className="nav navbar-nav">
					<li className="link">
						<Link to={{ pathname: "/" }}><span>Home</span></Link>
					</li>
					
					<li className="link">
						<Link to={{ pathname: "/Films" }}><span>Films</span></Link>
					</li>
					
					<li className="link">
						<Link to={{ pathname: "/Locations" }} 
						onMouseEnter={this.toggleDropDown.bind(this)}
						/*onMouseLeave={this.toggleDropDown.bind(this)}*/><span>Cinemas</span></Link>
					</li>
					
					<li className="link">
						<Link to={{ pathname: "/Faq" }}><span>FAQ</span></Link>
					</li>
					
					<li className="link">
						<Link to={{ pathname: "/Contact" }}><span>Contact Us</span></Link>
					</li>
					
					<div id = "cinemaDrop" className="drop-link" style={isActive ? 	{ 'visibility': 'visible', 'opacity': 1 } : 
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
				</ul>
			</div>
		);
	}
}