import React from 'react';

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
			
		};
		
	}

	componentDidUpdate(){
		if (this.state.adultPrice!==this.state.adult*7.5){
			this.setState({adultPrice: this.state.adult*7.5});
		}
		if (this.state.childPrice!==this.state.child*3){
			this.setState({childPrice: this.state.child*3});
		}
		if (this.state.concessionPrice!==this.state.concession*5){
			this.setState({concessionPrice: this.state.concession*5});
		}
		if (this.props.price!==(this.state.adultPrice+this.state.childPrice+this.state.concessionPrice)){
			this.props.onPriceChange(this.state.adultPrice+this.state.childPrice+this.state.concessionPrice);
		}
		
		
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
		//const price = this.props.price;
		
		return(
			<div className= 'ticket_types'>
				<div>
					<span className= 'bookinglabel'>Adult Tickets </span>
					<button className= 'bookinglabel' onClick={this.addAdultTickets.bind(this)}>+</button>
					<button className= 'bookinglabel' onClick={this.removeAdultTickets.bind(this)}>-</button>
					{this.state.adult}
				</div>
				<div>
					<span className= 'bookinglabel'>Child Ticket</span>
					<button className= 'bookinglabel' onClick={this.addChildTickets.bind(this)}>+</button>
					<button className= 'bookinglabel' onClick={this.removeChildTickets.bind(this)}>-</button>
					{this.state.child}
				</div>
				<div>
					<span className= 'bookinglabel'>Concession Ticket</span>
					<button className= 'bookinglabel' onClick={this.addConcessionTickets.bind(this)}>+</button>
					<button className= 'bookinglabel' onClick={this.removeConcessionTickets.bind(this)}>-</button>
					{this.state.concession}
				</div>
					<h3 >
						£{this.state.adultPrice+this.state.childPrice+this.state.concessionPrice}
					</h3>
				

			
			</div>);
	}
	
}