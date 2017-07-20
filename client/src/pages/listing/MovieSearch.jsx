import React from 'react';


export default class MovieSearch extends React.Component{
	constructor(props){
		super(props);
		this.searchChange = this.searchChange.bind(this);
	}
	
	searchChange(){
		this.props.onSearch(this.filterTextInput.value);
	}
	
    render(){
        return(
            <div>
					<form>
						<input 
							type='text'
							placeholder='Search Bar'
							value={this.props.filterText}
							ref={(input) => this.filterTextInput = input}
							onChange = {this.searchChange}
						/>
						
					</form>
			</div>
        );
    }
}