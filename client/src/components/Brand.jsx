import React, { Component } from 'react';

export default class Brand extends Component {
	render() {
		return(
			<div className="logo-container">
				<img id="logo" src="/images/logo.png" alt="Logo" />
			</div>
		);
	}
}