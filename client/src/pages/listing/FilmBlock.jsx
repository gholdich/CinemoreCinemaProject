import React , { Component } from 'react';



export default class FilmBlock extends Component {
	
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
		const { id, title, posterFileName, shortDes, release, director, cast, showtimeBlock } = this.props;
		return(
			<div className="film" >
				<div className="film-poster" >
					<img className="poster" src={"/images/posters/"+posterFileName} alt={"Poster of "+title} />
				</div>
				<div className="film-info">
					<div className="title">{ title }</div>
					<div className="genres">{ this.showGenres() }</div>
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