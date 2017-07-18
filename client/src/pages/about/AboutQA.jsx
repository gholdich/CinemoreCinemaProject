import React , { Component } from 'react';


export default class AboutQA extends Component {
	
	render() {
		return(
		<div id = "gridOfEquals">
			<div className="film" >
				<div className="film-poster" >
					<img className="poster" src="..\images\logo.png" />
				</div>
				<div className="film-info">
					<div className = "title">About QA Cinemas</div>
					<div className="short description">QA Cinemas is a brand new and revolutionized cinema system. Founded by 5 budding young entrepreneurs, it looks to bring you a refined cinema experience.</div>
				</div>
			</div>
		</div>
		)
	}
}