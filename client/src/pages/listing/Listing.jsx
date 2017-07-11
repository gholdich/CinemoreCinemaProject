import React, { Component } from 'react';
import FilmBlock from './FilmBlock';


export default class Listing extends React.Component{
	render(){
		return(
		<div className="mainDiv" id="listingsDiv" >
			<div id="gridOfEquals" >
				<FilmBlock/>//load multiple instances of film block component with different information

			</div>
			
		</div>
		);
		
	}
}