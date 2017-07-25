import React from 'react';
import Client from '../../api/Client';

export default class Forum extends React.Component{
	
	constructor(){
		super();
		this.state={
			username: '',
			question: '',
			newForum: true,
			forum:[],
			loading: true,
			commentusername: '',
			commenttext: ''
		};
		let comments= '';
		
	}
	componentWillMount(){
		let variable = this;
		setTimeout(function(){
		Client.fetchForum(forums =>{
				variable.setState({
					forum : forums,
					loading: false
				})
		
		});},100);
	}

	
	
	setUsername(e){
		this.setState({username: e.target.value});
	}
	setQuestion(e){
		this.setState({question: e.target.value});
	}
	sendQuestion(e){
		var forumQuestion={
			username: this.state.username,
			question: this.state.question,
		};
		let variable=this;
		Client.addQuestion(forumQuestion);
		setTimeout(function(){
		Client.fetchForum(forums =>{
				variable.setState({
					forum : forums,
					loading: false
				})
		
		})},100);
	}
	setCommentUsername(e){
		this.setState({commentusername: e.target.value});
	}
	setComment(e){
		this.setState({commenttext: e.target.value});
	}
	addComment(e){
		let variable=this;
		Client.addComment((this.state.commentusername+' says: '+this.state.commenttext), e.target.value);
		setTimeout(function(){
		Client.fetchForum(forums =>{
				variable.setState({
					forum : forums,
					loading: false
				})
		
		})},100);
	}
	
	render(){
		const {forum} = this.state;
		let forummap = forum.map((data,index)=>{
							return (
							<div key={index}> 
								<div value={forum[index].username}>{forum[index].username}</div>
								<div value= {forum[index].question}>{forum[index].question}</div>
								<div value={forum[index].comments}>{forum[index].comments}</div>
								<form>
									<input placeholder= "Username" onChange= {this.setCommentUsername.bind(this)}/>
									<input placeholder = "Comment" onChange= {this.setComment.bind(this)}/>
									<button value={forum[index].question} onClick={this.addComment.bind(this)}>Add comment</button>
								</form>
								
							</div>
						)});
					
		
		return(
			<div>
				<form>
					<input placeholder= 'Username' onChange={this.setUsername.bind(this)}/>
					<input placeholder= 'Question' onChange={this.setQuestion.bind(this)}/>
					<button onClick={this.sendQuestion.bind(this)}> Ask question</button>
				</form>
				
				<div >
					{forummap}
				</div> 
			</div>
		);
	}
}
//{console.log(this.state.forum)}