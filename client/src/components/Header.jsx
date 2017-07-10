//example header.jsx file
import React from 'react';
import Nav from './Nav';

export default class Header extends React.Component{
	
	
	render(){
		return(
			<div>
				<img src='../../public/images/logo.jpg' />
				<Nav />
			</div>
		);
	}
}