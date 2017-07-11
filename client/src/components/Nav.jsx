import React, { Component } from 'react';
import Navbar from './Navbar';
import LocationPin from './LocationPin';
import AccountPin from './AccountPin';

export default class Nav extends Component {
	
	render() {
		return(
			<div id="navbar-container">
				<Navbar />
				<LocationPin />
				<AccountPin />
			</div>
		);
	}
}
