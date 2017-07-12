import React from 'react';
var cinema=[
			{
				cinemaId: 1,
				location: "Manchester",
				showing: [{
							film:"Wonder Woman",
							time:[
								"10.00",
								"11.00",
								"12:00"]},
							
							{film:"Ghost Busters",
							time:[
								"10.01",
								"11.01",
								"12:01"]},
							
							{film:"Jaws",
							time:[
								"10.02",
								"11.02",
								"12:02"]},
							
							{film:"Star Trek",
							time:[
								"10.03",
								"11.03",
								"12:03"]}
				]
			},
			{
				cinemaId: 2,
				location: "London",
				showing: [{
							film:"American Psycho",
							time:[
								"10.10",
								"11.10",
								"12:10"]},
							
							{film:"Back to the Future",
							time:[
								"10.11",
								"11.11",
								"12:11"]},
							
							{film:"Shawshank Redemption",
							time:[
								"10.12",
								"11.12",
								"12:12"]},
							
							{film:"Green Mile",
							time:[
								"10.13",
								"11.13",
								"12:13"]}
				]
			}
		]
let num =0;
let num1=0;
export default class Booking extends React.Component{
	constructor(){
		super();
		this.state={
			location:'',
			film:'',
			time:''
		};
	}
	
	
	
	getIndex(){
		

		for (let i = 0; i<cinema.length;i++){
			if((cinema[i].location)===this.state.location){
				num=i;
				break;
				
			}	
		}
		console.log("Num :"+num);
		console.log(cinema);
		console.log(this.state.location);
		return num;
	}
	getIndex2(){
		this.getIndex();
		for (let i = 0; i<cinema[num].showing.length;i++){
			if((cinema[num].showing[i].film)===this.state.film){
				num1=i;
				break;
				
			}	
		}
		return num1;
	}
		
	
	setLocation(e){
		
		
		this.getIndex();
		this.setState({location: e.target.value, film:'',time:''});
		this.render();
	}
	setFilm(e){
		
		this.getIndex2();
		this.setState({film: e.target.value});
		this.render();
		
	}
	setTime(e){
		this.getIndex2();
		this.setState({time: e.target.value});
		this.render();
		
	}
	
	render(){
		return(
			<div>
				<form>
					<select onChange={this.setLocation.bind(this)}>
						<option value= "select" selected>Please select a location</option>
						{cinema.map((data,index)=>(
							<option key={index} value={cinema[index].location}>{cinema[index].location}</option>
						))
						
						}
					</select>
					<select onClick={this.setFilm.bind(this)}>
						<option value= "select" selected>Please select a Film</option>
						{cinema[num].showing.map((data,index)=>(
							<option key={index} value= {cinema[num].showing[index].film}>{cinema[num].showing[index].film}</option>
						))
						
						}
					</select>
					<select onClick={this.setTime.bind(this)}>
						<option value= "select" selected>Please select a time</option>
						{cinema[num].showing[num1].time.map((data,index)=>(
							<option key={index} value= {cinema[num].showing[num1].time[index]}>{cinema[num].showing[num1].time[index]}</option>
						))
						
						}
					</select>
					
				</form>
				<div>
				{this.state.location}
					
				</div>
				<div>
				{this.state.film}
				</div>
				<div>
				{this.state.time}
				</div>

				<form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" target="_top">
					<input type="hidden" name="cmd" value="_s-xclick" />
					<input type="hidden" name="hosted_button_id" value="Y4FKYA8HS5RL2" />
					<input type="image" src="/images/pay.png" name="submit" alt="PayPal – The safer, easier way to pay online!" />
					<img src="https://www.sandbox.paypal.com/en_GB/i/scr/pixel.gif" alt="" width="1" height="1" />
				</form>

			</div>
		);
	}
	
}