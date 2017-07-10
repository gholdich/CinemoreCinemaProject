import React, { Component } from 'react';

import Brand from './Brand';
import Nav from './Nav';

export default class Header extends Component {
	render() {
		return(
			<div>
				<Brand />
				<Nav />
			</div>
		);
	}
}