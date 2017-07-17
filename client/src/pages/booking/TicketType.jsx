import React from 'react';
import TicketNo from './TicketNo';

export default class TicketType extends React.Component{
	constructor(){
		super();
		this.state={
			adult:0,
			adultPrice:0,
			child:0,
			childPrice:0,
			concession:0,
			concessionPrice:0,
			price:0
			
		};
		
	}
	componentDidUpdate(){
		this.setState({adultPrice: this.state.adult*7.5});
		this.setState({childPrice: this.state.child*3});
		this.setState({concessionPrice: this.state.concession*5});
		this.setState({price: this.state.adultPrice+this.state.childPrice+this.state.concessionPrice});
		
	}
	addAdultTickets(e){

		this.setState({adult: this.state.adult+1});
		
	}
	removeAdultTickets(e){
		if(this.state.adult>0)
			{
				this.setState({adult: this.state.adult-1});
			}
	}
	addChildTickets(e){

		this.setState({child: this.state.child+1});
		
	}
	removeChildTickets(e){
		if(this.state.child>0)
			{
				this.setState({child: this.state.child-1});
			}
	}
	addConcessionTickets(e){

		this.setState({concession: this.state.concession+1});
		
	}
	removeConcessionTickets(e){
		if(this.state.concession>0)
			{
				this.setState({concession: this.state.concession-1});
			}
	}
	
	render(){
		return(
			<div>
				<div>
					Adult Ticket Number: {this.state.adult}
					<button onClick={this.addAdultTickets.bind(this)}>Add adult ticket</button>
					<button onClick={this.removeAdultTickets.bind(this)}>Remove adult ticket</button>
					£{this.state.adultPrice}
				</div>
				<div>
					Child Ticket Number: {this.state.child}
					<button onClick={this.addChildTickets.bind(this)}>Add child ticket</button>
					<button onClick={this.removeChildTickets.bind(this)}>Remove child ticket</button>
					£{this.state.childPrice}
				</div>
				<div>
					Concession Ticket Number: {this.state.concession}
					<button onClick={this.addConcessionTickets.bind(this)}>Add concession ticket</button>
					<button onClick={this.removeConcessionTickets.bind(this)}>Remove concession ticket</button>
					£{this.state.concessionPrice}
				</div>
				<div>
					Total price : £{this.state.price}
				</div>
				

			
			</div>);
	}
	
}