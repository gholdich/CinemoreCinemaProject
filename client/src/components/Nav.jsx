import React, { Component } from 'react';
import Navbar from './Navbar';
import LocationPin from './LocationPin';
import AccountPin from './AccountPin';
import LocationLabel from './LocationLabel';

export default class Nav extends Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(e){
		this.props.onChange(e);
	}
	
	render() {
		return(
			<div id="navbar-container">
				<LocationLabel location={this.props.location} onChange={this.handleChange} />
				<Navbar />
				<LocationPin location={this.props.location} onChange={this.handleChange} />
				<AccountPin />
			</div>
		);
	}
}
