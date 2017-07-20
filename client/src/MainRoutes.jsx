import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from "./pages/home/Home";
import Listing from './pages/listing/Listing';
import Locations from './pages/locations/locations';
import Contact from './pages/contact/Contact';
import Faq from './pages/faq/Faq';
import Booking from './pages/booking/Booking';
import BookNow from './components/BookNow';
import Confirmation from './pages/confirmation/Confirmation';

export default class MainRoutes extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(e){
		console.log(e);
		this.props.onChange(e);
	}
	
	render(props) {
		const location = this.props.location;
		const time = this.props.film;
		const film = this.props.time;
		return (
		<div id="content">
		  <main>
			<Switch>
			  <Route exact path='/' component={() => <Home onChange={this.handleChange} location={location} film={film} time={time}/>} />
			  <Route path="/booking" component={() => <Booking location={location} film={film} time={time}/>}/>
			  <Route path="/films" component={() => <Listing location={location} film={film} time={time}/>}/>
			  <Route path="/locations" component={() => <Locations location={location} film={film} time={time}/>}/>
			  <Route path="/faq" component={Faq}/>
			  <Route path="/contact" component={Contact}/>
			  <Route path="/confirmation" component={() => <Confirmation location={location} film={film} time={time}/>}/>
			<Route path="/cinema" component={Cinema}/>
			  <Route path="/classifications" component={Classifications}/>
			  <Route path="/formats" component={Formats}/>
			</Switch>
		  </main>
		  <article>
			<Switch>
			  <Route exact path='/' component={() => <BookNow onChange={this.handleChange} location={location} film={film} time={time}/>}/>
			  <Route path="/films" component={() => <BookNow onChange={this.handleChange} location={location} film={film} time={time}/>}/>
			  <Route path="/locations" component={() => <BookNow onChange={this.handleChange} location={location} film={film} time={time}/>}/>
			  <Route path="/faq" component={() => <BookNow onChange={this.handleChange} location={location} film={film} time={time}/>}/>
			  <Route path="/contact" component={() => <BookNow onChange={this.handleChange} location={location} film={film} time={time}/>}/>
				<Route path="/cinema" component={() => <BookNow onChange={this.handleChange} location={location} film={film} time={time}/>}/>
			</Switch>
		  </article>
		</div>
		);
	}
}