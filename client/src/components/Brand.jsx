import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Brand extends Component {
	render() {
		return(
			<div className="logo-container">
				<Link to ="/">
					<img id="logo" src="/images/logo.png" alt="Logo" />
				</Link>
			</div>
		);
	}
}