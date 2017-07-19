import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from "./pages/home/Home";
import Listing from './pages/listing/Listing';
import Contact from './pages/contact/Contact';
import Faq from './pages/faq/Faq';
import Booking from './pages/booking/Booking';
import Cinema from './pages/about/Cinema';
import BookNow from './components/BookNow';
import Confirmation from './pages/confirmation/Confirmation';
import Classifications from './pages/classifications/Classifications';
import Formats from './pages/formats/Formats';

export default class MainRoutes extends Component {
	render() {
		return (
		<div id="content">
		  <main>
			<Switch>
			  <Route exact path='/' component={Home}/>
			  <Route path="/booking" component={Booking}/>
			  <Route path="/films" component={Listing}/>
			  <Route path="/faq" component={Faq}/>
			  <Route path="/contact" component={Contact}/>
			  <Route path="/confirmation" component={Confirmation}/>
			  <Route path="/cinema" component={Cinema}/>
			  <Route path="/classifications" component={Classifications}/>
			  <Route path="/formats" component={Formats}/>
			  
			</Switch>
		  </main>
		  <article>
			<Switch>
			  <Route exact path='/' component={BookNow}/>
			  <Route path="/films" component={BookNow}/>
			  <Route path="/faq" component={BookNow}/>
			  <Route path="/contact" component={BookNow}/>
			  <Route path="/cinema" component={BookNow}/>
			</Switch>
		  </article>
		</div>
		);
	}
}