import React, { Component } from 'react';

import Brand from './Brand';
import Nav from './Nav';

export default class Header extends Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(e){
		this.props.onChange(e);
	}
	
	render() {
		return(
			<div id="header-container">
				<Brand />
				<Nav location={this.props.location} onChange={this.handleChange} />
			</div>
		);
	}
}