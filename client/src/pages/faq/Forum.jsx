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
		
		});
		},100);
	}

	
	
	setUsername(e){
		this.setState({username: e.target.value});
	}
	setQuestion(e){
		this.setState({question: e.target.value});
	}
	sendQuestion(e){
		let forumQuestion={
			username: this.state.username,
			question: this.state.question,
		};
		let variable=this;
		Client.addQuestion(forumQuestion);
		/* setTimeout(function(){
		Client.fetchForum(forums =>{
				variable.setState({
					forum : forums,
					loading: false
				})
		
		})},1000); */
	}
	/* setCommentUsername(e){
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
		
		})},1000);
	} */
	
	render(){
		const {forum} = this.state;
		let forummap = forum.map((data,index)=>{
							return (
							<div key={index}> 
								<div>
								<div className= 'forum_element forum_question' value= {forum[index].question}>{forum[index].question}</div>
								<div className= 'forum_comment' value={forum[index].comments}>{forum[index].comments}</div>
								</div>
								
								
							</div>
						)});
					
		
		return(
			<div>
				
				
				<div >
					{forummap}
				</div> 
			</div>
		);
	}
}
/* <form className= 'forum_form'>
									<input placeholder= "Username" onChange= {this.setCommentUsername.bind(this)}/>
									<input placeholder = "Comment" onChange= {this.setComment.bind(this)}/>
									<button className='faq_form_button' value={forum[index].question} onClick={this.addComment.bind(this)}>Add comment</button>
								</form> */
//{console.log(this.state.forum)}
/*<form>
					<input placeholder= 'Username' onChange={this.setUsername.bind(this)}/>
					<input placeholder= 'Question' onChange={this.setQuestion.bind(this)}/>
					<button className= 'faq_form_button' onClick={this.sendQuestion.bind(this)}> Ask question</button>
				</form> */
				/* <div className= 'forum_element' value={forum[index].username}>{forum[index].username}</div> */