import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Trailer extends Component{

	constructor(props){
			super(props);

			this.state = {
				trailerActive: this.props.trailerActive
			}

	}

	overlay(){

		const { trailerActive } = this.state;
    const { videoId } = this.props;
		if(this.props.trailerActive === false){
			return(
			<div className="trailer" style={trailerActive ? 	{ 'visibility': 'visible', 'opacity': 1 } : { 'visibility': 'hidden', 'opacity': 0 } }>
        <div className="overlay"></div>
        <iframe src={this.props.videoId} width="800" height="450" frameBorder="0" allowFullScreen></iframe>
			</div>

			)
		}else{
			return null;

		}
	}

	render(){
		return this.overlay();
	}
}
