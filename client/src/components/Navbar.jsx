import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component{
	
	render(){
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
						<Link to={{ pathname: "/Locations" }}><span>Locations</span></Link>
					</li>
					<li className="link">
						<Link to={{ pathname: "/Faq" }}><span>FAQ</span></Link>
					</li>
					<li className="link">
						<Link to={{ pathname: "/Contact" }}><span>Contact Us</span></Link>
					</li>
				</ul>
			</div>
		);
	}
}