import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BookNow extends Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(e){
		//this.props.onChange("something");
	}
	
	render() {
		return(
			<div id="bookNow">
				<div className="left quickBook">
					<div className="left quickBook one">
						<p>
							onClick={this.handleChange} 
							defaultValue={location} 
						</p>
					</div>
				</div>
				<div className="center quickBook">
					<Link to={{ pathname: '/booking'}}>
						<span>Book Now!</span>
					</Link> 
				</div>
				<div className="right quickBook">
				
				</div>
			</div>
		);
	}
}