import React , { Component } from 'react';

export default class AboutLocation extends Component {
	
	render(){
		const { about, venue, openingTimes, pictureFileName } = this.props;
		return(
			<div className="film" >
				<div className="film-poster" >
					<img className="poster" src={"/images/venuePictures/"+pictureFileName} alt={"Picture of "+venue}  />
				</div>
				<div className="film-info">
					<div className = "title">{ venue }</div>
					<div className="short description">{ about }<div className="OpeningTimesDiv">{ openingTimes }</div></div>	
				</div>
				
			</div>
		)
	}
}