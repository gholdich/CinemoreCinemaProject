import React, { Component } from 'react';
import NukaCarousel from 'nuka-carousel';

export default class Carousel extends Component {

	//mixins: [NukaCarousel.ControllerMixin]
	render() {
  	return (

	   	<NukaCarousel className="carousel" wrapAround = {true} autoplay = {true} autoplayInterval = {2500}>
	      <img onLoad={() => {window.dispatchEvent(new Event('resize'));}} className="carouselPoster" src={"/images/carousel/wonderwoman.jpg"}/>
	      <img onLoad={() => {window.dispatchEvent(new Event('resize'));}} className="carouselPoster" src={"/images/carousel/War-For-The-Planet-Of-The-Apes.png"}/>
	      <img onLoad={() => {window.dispatchEvent(new Event('resize'));}} className="carouselPoster" src={"/images/carousel/Spider-Man-Homecoming.jpg"}/>
	      <img onLoad={() => {window.dispatchEvent(new Event('resize'));}} className="carouselPoster" src={"/images/carousel/Alien-Covenant.png"}/>
	      <img onLoad={() => {window.dispatchEvent(new Event('resize'));}} className="carouselPoster" src={"/images/carousel/The-Mummy.jpg"}/>
		<img className="carouselPoster" src={"/images/carousel/AvengersAgeOfUltron.jpg"}/>
	  	</NukaCarousel>

  	);
	}
}
