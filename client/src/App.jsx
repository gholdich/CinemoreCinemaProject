import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BookNow from './components/BookNow';
import MainRoutes from './MainRoutes';


export default class App extends Component {
	render(){
		return(
			<div>
				<Header />
				<MainRoutes />
				<BookNow />
				<Footer />
			</div>
		
		);
	}
}