import React from 'react';

export default class TicketNo extends React.Component{
	constructor(){
		super();
		this.state={
			ticketNo: 1
		};
		
	
	}
	addTickets(e){

		this.setState({ticketNo: this.state.ticketNo+1});
		
	}
	render(){
		return(
			<div>
				<div>
					Number of tickets: {this.state.ticketNo}
				</div>
				<button onClick={this.addTickets.bind(this)}>Add ticket</button>
			</div>
		);
		
	}
} 