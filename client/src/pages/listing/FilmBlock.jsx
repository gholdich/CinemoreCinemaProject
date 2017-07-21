import React , { Component } from 'react';
import Trailer from './Trailer.jsx';

export default class FilmBlock extends Component {

	constructor(){
			super();

			this.state = {
				trailerActive: true,
			}
	}

	toggleTrailer() {
		this.setState({trailerActive: !this.state.trailerActive});
	}

	showGenres() {
		return this.props.genres.map((genre, idx) => {
			return (
				<span className="genre" key={idx}>
					{ genre }
				</span>
				);
		});
	}

	render() {
		const { trailerActive } = this.state;
		const { id, title, posterFileName, shortDes, release, director, cast, showtimeBlock, videoId, classification } = this.props;
		return(
			<div className="film" >
				<div>
					<div className="film-poster" >
						<img className="poster" src={"/images/posters/"+posterFileName} alt={"Poster of "+title} />
						</div>
					<div className="buttonDiv" >

						{(this.state.trailerActive) ? <button type="text" className="watchTrailer"  onClick={this.toggleTrailer.bind(this)} >Watch Trailer</button> :
						<button type="text" className="watchTrailer"  onClick={this.toggleTrailer.bind(this)} >Hide Trailer</button>}
					</div>
				</div>
				<div className="film-info">
					<div className="title">{ title } <img src={classification} /></div>
					<div className="genres">{ this.showGenres() }</div>
					<div className="trailer">
						<Trailer trailerActive={this.state.trailerActive} videoId={videoId}/>
					</div>
					<div className="short description">{ shortDes }</div>
					<div className="release"><span className="info-title">Release Date:</span> <span className="info-text">{ release }</span></div>
					<div className="director"><span className="info-title">Director:</span> <span className="info-text">{ director }</span></div>
					<div className="actors"><span className="info-title">Cast:</span> <span className="info-text">{ cast }</span></div>
					<div className="showtime">{ showtimeBlock }</div>
				</div>
			</div>
		);
	}
}
