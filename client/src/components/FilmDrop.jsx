import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Client from '../api/Client';
import ReactDOM from 'react-dom';
import Listing from '../pages/listing/Listing';


export default class FilmDrop extends Component{

	constructor(props){
			super(props);
		
			this.state = {
				filmActive: this.props.filmActive
			}
			
	}
	
	dropDown(){
		
		const { filmActive } = this.state;
		if(this.props.filmActive === false){
			return(
			<ul className="dropDown"
				style={filmActive ? 	{ 'visibility': 'visible', 'opacity': 1 } : 
									{ 'visibility': 'hidden', 'opacity': 0 } }>
				<li className="dropLink">
					<Link to = {{ pathname: "/Films" }}><span>Now Showing</span></Link>
				</li>
												
				<li className="dropLink">
					<Link to = {{ pathname: "/Films"}}><span>Coming Soon</span></Link>
				</li>
						
				<li className="dropLink">
					<Link to = {{ pathname: "/Classifications" }}><span>Classifications</span></Link>
				</li>
				
				<li className="dropLink">
					<Link to = {{ pathname: "/Formats" }}><span>Formats</span></Link>
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