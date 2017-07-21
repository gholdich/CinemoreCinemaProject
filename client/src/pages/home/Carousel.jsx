import React, { Component } from 'react';
import NukaCarousel from 'nuka-carousel';

export default class Carousel extends Component {

	//mixins: [NukaCarousel.ControllerMixin]
	render() {
  	return (

	   	<NukaCarousel className="carousel" wrapAround = {true} autoplay = {true} autoplayInterval = {2500}>
	      <img className="carouselPoster" src={"/images/carousel/wonderwoman.jpg"}/>
	      <img className="carouselPoster" src={"/images/carousel/War-For-The-Planet-Of-The-Apes.png"}/>
	      <img className="carouselPoster" src={"/images/carousel/Spider-Man-Homecoming.jpg"}/>
	      <img className="carouselPoster" src={"/images/carousel/Alien-Covenant.png"}/>
	      <img className="carouselPoster" src={"/images/carousel/The-Mummy.jpg"}/>
		<img className="carouselPoster" src={"/images/carousel/AvengersAgeOfUltron.jpg"}/>
	  	</NukaCarousel>

  	);
	}
}
