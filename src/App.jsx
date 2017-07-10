import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BookNow from './components/BookNow';


export default class App from React.Component{
	render(){
		return(
			<div>
				<Header/>
				<index>
					{this.properties.children}
				</index>
				<BookNow/>
				<Footer>
			</div>
		
		);
	}
}