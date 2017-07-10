import React from 'react';

export default class Nav extends React.Component{
	
	
	render(){
		return(
			<div>
				<ul className="nav navbar-nav">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/Films">Films</Link>
					</li>
				</ul>
			</div>
		);
	}
}