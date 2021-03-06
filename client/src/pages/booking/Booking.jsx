import React from 'react';
import Client from '../../api/Client';

export default class Booking extends React.Component{
	
	constructor(){
		super();
		
		var selectedLocation = 'Location',
			selectedFilm='Films',
			selectedTime='Time';
		
		if(localStorage.selectedLocation) {
			selectedLocation = JSON.parse(localStorage.selectedLocation);
			if(localStorage.filmTime) {
				selectedFilm = JSON.parse(localStorage.filmTime);
				if(localStorage.filmTitle) {
					selectedTime = JSON.parse(localStorage.filmTitle);
				}
			}
		}
		
		
		
		this.state={
			location: selectedLocation,
			film: selectedFilm,
			time:selectedTime,
			cinemas: [],
			films :[],
			title: [],
			loading: true,
			times: []
		};
	}
	componentDidMount() {
		Client.fetchShowings(showings => {			
			this.setState({
				loading: false,
				films: showings
			});
		});
		
		Client.fetchCinemas(cinema => {
			this.setState({
				loading: false,
				cinemas: cinema
			});
		});
		
	}
	
	
	getFilms(location){
		const { cinemas } = this.state;
		const { films } = this.state;
		let title=[];
		for (var m = 0; m<cinemas.length; m++){
			if (location===cinemas[m].location){
				for (let i=0; i<cinemas[m].showings.length; i++){
			
					for (let j = 0; j<films.length; j++){
						if (cinemas[m].showings[i].filmId==films[j].filmId && title.indexOf(films[j].title) == -1){
							title.splice(0,0,films[j].title);
						}
					}
				}
			}
		}
		
		return title;
	}

	getTimes(film){
			const { cinemas } = this.state;
			const { films } = this.state;
			let times = [];

				
				
			for (let m=0; m<cinemas.length; m++){
				if (cinemas[m].location==this.state.location){
					for (let j = 0; j<films.length; j++){
					
						if (film==films[j].title){
							for (let k =0; k<cinemas[m].showings.length; k++){
							
								if(cinemas[m].showings[k].filmId==films[j].filmId){
									//console.log( "Times: "+films[j].filmId + cinemas[m].showings[k].filmId);
									times.splice(0,0,cinemas[m].showings[k].time);
								
								}
							}
						}
					}	
				}
			}
			return times;
				
				
			 
			 
		}
	
	setLocation(e){
		this.setState({
			location: e.target.value,
			title: this.getFilms(e.target.value),
			film: 'Please select a film',
			time: 'Please select a time'
			
			});
			//console.log(this.state.location);
			//console.log(this.state.title)
	}
	setFilm(e){
		this.setState({
			film: e.target.value,
			time: "Please select a time",
			times: this.getTimes(e.target.value)});
			}
		
	setTime(e){
		this.setState({time: e.target.value});
		
	}
	
	render(){
		const {cinemas} = this.state;
		const {title} = this.state;
		const {films} = this.state;
		const {times} = this.state;
		return(
			<div>
				<form>
					<select onClick={this.setLocation.bind(this)}>
						<option value={this.state.location}>{this.state.location}</option>
						{cinemas.map((data,index)=>(
							
							<option key={index} value={cinemas[index].location} >{cinemas[index].location}</option>
								))
						
						}
					</select>
					<select onClick={this.setFilm.bind(this)}>
						<option value= {this.state.film} >{this.state.film}</option>
						{title.map((data,index)=>(
							<option key={index} value= {title[index]}>{title[index]}</option>
						))
						
						}
					</select>
					<select onClick={this.setTime.bind(this)}>
						<option value= {this.state.time}>{this.state.time}</option>
						{times.map((data,index)=>(
							<option key={index} value= {times[index]}>{times[index]}</option>
						))
						
						}
					</select>

				</form>
				
				{(this.state.location=="select") ? <p></p> : <p>{this.state.location}</p>}
				{(this.state.film=="Please select a film") ? <p></p> : <p>{this.state.film}</p>}
				{(this.state.time=="Please select a time") ? <p></p> : <p>{this.state.time}</p>}

				<form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" target="_top">
					<input type="hidden" name="cmd" value="_xclick" />
					<input type="hidden" name="business" value="wortho666-facilitator@gmail.com" />
					<input type="hidden" name="lc" value="GB" />
					<input type="hidden" name="item_name" value="Cinema Ticket" />
					<input type="hidden" name="amount" value="7.50" />
					<input type="hidden" name="currency_code" value="GBP" />
					<input type="hidden" name="button_subtype" value="services" />
					<input type="hidden" name="no_note" value="0" />
					<input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest" />
					<input type="image" src="/images/pay.png" name="submit" alt="PayPal – The safer, easier way to pay online!" />
				</form>

			</div>
		);
	}
	
}