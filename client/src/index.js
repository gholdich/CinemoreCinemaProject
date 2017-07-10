import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from "./App";
import Home from "./pages/home/Home";

ReactDOM.render(
	<Router>
	    <Route path="/" component={App}>
		</Route>
	</Router>,document.querySelector('#app')
);