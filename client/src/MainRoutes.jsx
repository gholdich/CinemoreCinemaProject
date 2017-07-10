import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from "./pages/home/Home";
import Listing from './pages/listing/Listing';
import Booking from './pages/booking/Booking';
import BookNow from './components/BookNow';

export default class MainRoutes extends Component {
	render() {
		return (
		<div id="content">
		  <main>
			<Switch>
			  <Route exact path='/' component={Home}/>
			  <Route path="/booking" component={Booking}/>
			  <Route path="/films" component={Listing}/>
			</Switch>
		  </main>
		  <article>
			<Switch>
				<Route exact path='/' component={BookNow}/>
				<Route path="/films" component={BookNow}/>
			</Switch>
		  </article>
		</div>
		);
	}
}