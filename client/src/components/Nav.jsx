import React, { Component } from 'react';
import Navbar from './Navbar';
import LocationPin from './LocationPin';
import AccountPin from './AccountPin';
import LocationLabel from './LocationLabel';

export default class Nav extends Component {
	render() {
		return(
			<div id="navbar-container">
				<LocationLabel />
				<Navbar />
				<LocationPin />
				<AccountPin />
			</div>
		);
	}
}
