import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainRoutes from './MainRoutes';


export default class App extends Component {
	constructor() {
		super();
		
		this.state = {
			filmInfo: "",
			
		}
	render(){
		return(
			<div>
				<Header />
				<MainRoutes />
				<Footer />
			</div>
		
		);
	}
}