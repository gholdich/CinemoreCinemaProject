import React, {Component} from 'react';
import Forum from './Forum.jsx';

export default class Faq extends Component {
	render(){
		return(
			<div className= 'faqpage'>
				<h1 className='faq_title'>FAQs</h1>				
				<h5 className = 'faq_title'>Got any questions? They may have already been answered, but any new ones, post a question and someone will get back in touch or have a discussion about the issue.</h5>

				<Forum/>
			</div>
		);
	}
}