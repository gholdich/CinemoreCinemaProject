import React, { Component } from 'react';
import NukaCarousel from 'nuka-carousel';
//import { NukaDecorate } from 'nuka-carousel-autoscroll';

//const NukaDecorated = NukaDecorate(NukaCarousel);

export default class Slideshow extends Component {

	mixins: [NukaCarousel.ControllerMixin]
	render() {
  	return (

	   	<NukaCarousel wrapAround = {true} autoplay = {true} autoplayInterval = {2500}>
	      <img className="carouselPoster" src={"/images/carousel/wonderwoman.jpg"}/>
	      <img className="carouselPoster" src={"/images/carousel/War-For-The-Planet-Of-The-Apes.png"}/>
	      <img className="carouselPoster" src={"/images/carousel/Spider-Man-Homecoming.jpg"}/>
	      <img className="carouselPoster" src={"/images/carousel/Alien-Covenant.png"}/>
	      <img className="carouselPoster" src={"/images/carousel/The-Mummy.jpg"}/>
	    	<img className="carouselPoster" src={"/images/carousel/Finding-Dory.jpg"}/>
	  	</NukaCarousel>

  	);
	}
}
/*
slidesToScroll: React.PropTypes.oneOfType([
  React.PropTypes.number,
  React.PropTypes.oneOf(['auto'])
])
*/
