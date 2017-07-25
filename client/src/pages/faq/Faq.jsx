import React, {Component} from 'react';
import Forum from './Forum.jsx';

export default class Faq extends Component {
	render(){
		return(
			<div className= 'faqpage'>
				<h1>This is the FAQ page</h1>
				<Forum/>
			</div>
		);
	}
}