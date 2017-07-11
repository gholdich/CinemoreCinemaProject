import React from 'react';


export default class Booking extends React.Component{
	constructor(){
		super();
		this.state={
			location:'',
			film:'',
			date:''
		};
	}
	setLocation(e){
		
		this.setState({location: e.target.value});
		
	}
	setFilm(e){
		
		this.setState({film: e.target.value});
		
	}
	setDate(e){
		
		this.setState({date: e.target.value});
		
	}
	
	render(){
		return(
			<div>
				<form>
					<ul>
						<li>
							<input  placeholder="Location" onChange={this.setLocation.bind(this)}/>
						</li>
						<li>
							<input  placeholder="Film" onChange={this.setFilm.bind(this)}/>
						</li>
						<li>
							<input placeholder="Date and time" onChange={this.setDate.bind(this)}/>
						</li>
						<div>
							{this.state.location}
						</div>
						<div>
							{this.state.film}
						</div>
						<div>
							{this.state.date}
						</div>
					</ul>
				</form>

				<form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" target="_top">
					<input type="hidden" name="cmd" value="_s-xclick" />
					<input type="hidden" name="hosted_button_id" value="Y4FKYA8HS5RL2" />
					<input type="image" src="/images/pay.png" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!" />
					<img alt="" border="0" src="https://www.sandbox.paypal.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
				</form>

			</div>
		);
	}
	
}