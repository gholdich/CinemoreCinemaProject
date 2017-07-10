import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component{
	
	
	render(){
		return(
			<div>
				<ul className="nav navbar-nav">
					<li className="link">
						<Link to={{ pathname: "/" }}>Home</Link>
					</li>
					<li className="link">
						<Link to={{ pathname: "/Films" }}>Films</Link>
					</li>
				</ul>
			</div>
		);
	}
}