import React , { Component } from 'react';

export class FilmBlock extends Component {
	render() {
		return(
			<div className="mainDiv" >
				<div id="posterDiv" ><img id="poster" src="this.props.source" /></div>//work in progress
				<span id="film description/info" >this.props.filmInfo</span>//work in progress
			</div>
		);
	}
}