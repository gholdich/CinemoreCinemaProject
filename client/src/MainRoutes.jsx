import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from "./pages/home/Home";

export default class MainRoutes extends Component {
	render() {
		return (
		  <main>
			<Switch>
			  <Route exact path='/' component={Home}/>
			</Switch>
		  </main>
		);
	}
}