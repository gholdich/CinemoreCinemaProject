import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BookNow from './components/BookNow';


export default class App extends React.Component {
	render(){
		return(
			<div>
				<Header />
					{this.props.children}
				<BookNow />
				<Footer />
			</div>
		
		);
	}
}