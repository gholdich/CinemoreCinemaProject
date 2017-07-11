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
				<button>
					Confirm
				</button>
			</div>
		);
	}
	
}