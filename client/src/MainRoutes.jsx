import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from "./pages/home/Home";
import Listing from './pages/listing/Listing';
import Locations from './pages/locations/locations';
import Contact from './pages/contact/Contact';
import Faq from './pages/faq/Faq';
import Booking from './pages/booking/Booking';
import BookNow from './components/BookNow';

export default class MainRoutes extends Component {
	render() {
		return (
		  <main>
			<Switch>
			  <Route exact path='/' component={Home}/>
			  <Route path="/booking" component={Booking}/>
			  <Route path="/films" component={Listing}/>
			  <Route path="/locations" component={Locations}/>
			  <Route path="/faq" component={Faq}/>
			  <Route path="/contact" component={Contact}/>
			</Switch>
		  </main>
		);
	}
}