import React , { Component } from 'react';

export default class AboutLocation extends Component {
	
	render(){
		const { about, venue } = this.props;
		return(
			<div className="film" >
				<div className="film-info">
					<div className = "title">{ venue }</div>
					<div className="short description">{ about }</div>
				</div>
			</div>
		)
	}
}