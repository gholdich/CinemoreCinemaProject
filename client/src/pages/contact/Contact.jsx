import React, {Component} from 'react';

var honorific = "";
var reason = "";

export default class Contact extends Component {
	handleSubmit(e) {
		e.preventDefault()
	}

	storeAsJson(e) {
		e.preventDefault();
		document.getElementById("contactForm").reset();
		let submission = {
			"honorific": honorific,
			"firstName": document.getElementById("firstName").value,
			"surname": document.getElementById('surname').value,
			"dob": document.getElementById("dob").value,
			"email": document.getElementById("email").value,
			"contactReason": reason,
			"message": document.getElementById("message").value
		}
		let myJSON = JSON.stringify(submission);
		localStorage.setItem("testJSON", myJSON);
	}

	outputJson() {
		let text = localStorage.getItem("testJSON");
		let submission = JSON.parse(text);
		console.log(submission);
		document.getElementById("comments").innerHTML += submission.honorific + " "
		+ submission.surname + " said:<br>"
		+ submission.message +"<br> <br>";
	}

	getHonorific(e){
		honorific = e.target.value;
	}

	getReason(e){
		reason = e.target.value;
	}

	render(){

		return(
			<div id="formDiv">
				<form className = "contactForm" id="contactForm" onSubmit={this.storeAsJson.bind(this)}>
					<table className="contactFormTable">
						<tr className="formRow">
							<td className="rowElement">Title:</td>
							<td className="rowElement" id="honorific" value="select" onChange={this.getHonorific.bind(this)}><select>
										<option value="Select" >Select</option>
										<option>Dr</option>
										<option>Miss</option>
										<option>Mr</option>
										<option>Mrs</option>
										<option>Ms</option>
									</select></td>
						</tr>
						<tr className="formRow">
							<td className="rowElement">First name:</td>
							<td className="rowElement"><input type="text" placeholder="Enter first name" id="firstName" /></td>
						</tr>
						<tr className="formRow">
							<td className="rowElement">Surname:</td>
							<td className="rowElement"><input type="text" placeholder="Enter surname" id="surname" /></td>
						</tr>
						<tr className="formRow">
							<td className="rowElement">Date of birth:</td>
							<td className="rowElement"><input type="date" id="dob" /></td>
						</tr>
						<tr className="formRow">
							<td className="rowElement">E-Mail:</td>
							<td className="rowElement"><input type="text" placeholder="Enter email" id="email" /></td>
						</tr>
						<tr className="formRow">
							<td className="rowElement" id="contactReason">Reason for contacting:</td>
							<td className="rowElement" value="select" onChange={this.getReason.bind(this)}><select>
										<option>Select</option>
										<option>Complaint</option>
										<option>Report good experience</option>
										<option>Suggestions</option>
										<option>Other reason</option>
									</select></td>
						</tr>
						<tr className="formRow">
							<td className="rowElement">Message:</td>
							<td className="rowElement"><textarea placeholder="Enter message here" id="message" ></textarea></td>
						</tr>
					</table>
					<button type="submit" className="Btn" id="submit" >Submit</button>
				</form>
				<button type="text" className="Btn" onClick={this.outputJson}>View feedback</button>
				<p id="comments" placeholder="Previous feedback:"></p>
			</div>

		);
	}
}
