import React from 'react';


export default class MovieSearch extends React.Component{
	constructor(props){
		super(props);
		this.filter = this.filter.bind(this);
		
	}
	
	filter(e){
		console.log(e.target.value);
		this.props.onFilter(e.target.value);
	}
	
	
    render(){
        return(
            <div>
				<form action="">
					<input type="radio" name="sort" value="date" onChange={this.filter} /> Release Date<br/>
					<input type="radio" name="sort" value="age" onChange={this.filter} /> Age Rating<br/>
				</form>
			</div>
        );
    }
}