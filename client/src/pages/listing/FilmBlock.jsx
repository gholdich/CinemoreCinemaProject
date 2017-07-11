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
		const { id, title, posterFileName, shortDes } = this.props;
		return(
			<div className="film" >
				<div className="film-poster" >
					<img className="poster" src={"/images/posters/"+posterFileName} alt={"Poster of "+title} />
				</div>
				<div className="film-info">
					<div className="title">{title}</div>
					<div className="genres">{this.showGenres()}</div>
					
					<div className="short description">{ shortDes }</div>
				</div>
			</div>
		);
	}
}