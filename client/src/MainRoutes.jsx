import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from "./pages/home/Home";
import Listing from './pages/listing/Listing';
import Locations from './pages/locations/locations';
import Contact from './pages/contact/Contact';
import Faq from './pages/faq/Faq';
import Booking from './pages/booking/Booking';
import About from './pages/about/About';
import Facilities from './pages/facilities/Facilities';
import LocalBusiness from'./pages/localBusinesses/LocalBusiness';
import BookNow from './components/BookNow';
import Confirmation from './pages/confirmation/Confirmation';

export default class MainRoutes extends Component {
	render() {
		return (
		<div id="content">
		  <main>
			<Switch>
			  <Route exact path='/' component={Home}/>
			  <Route path="/booking" component={Booking}/>
			  <Route path="/films" component={Listing}/>
			  <Route path="/locations" component={Locations}/>
			  <Route path="/faq" component={Faq}/>
			  <Route path="/contact" component={Contact}/>
			  <Route path="/confirmation" component={Confirmation}/>
			  <Route path="/about" component={About}/>
			  <Route path="/facilities" component={Facilities}/>
			  <Route path="/LocalBusiness" component={LocalBusiness}/>
			</Switch>
		  </main>
		  <article>
			<Switch>
			  <Route exact path='/' component={BookNow}/>
			  <Route path="/films" component={BookNow}/>
			  <Route path="/locations" component={BookNow}/>
			  <Route path="/faq" component={BookNow}/>
			  <Route path="/contact" component={BookNow}/>
			</Switch>
		  </article>
		</div>
		);
	}
}