import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,browserHistory} from 'react-router';

ReactDOM.render(

	<Router history={browserHistory}>
	<Router path="/home" component={} />
	<Router path="/listings" component={} />
	<Router path="/" component={} />
	</Router>,document.querySelector('#app')

);