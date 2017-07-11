import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AccountPin extends Component{
	render(){
		return (
			<div id = 'account-container'>
				<img id = "account-pin" className = 'function-pin' src = '/images/AccPin.png' alt = 'account control pin' />
			</div>
		);
	}
}