import React, {Component} from 'react';

export default class Contact extends Component {

	submitForm() {


	}

	render(){
		return(
			<div>
				<form className = "contactForm" >
					<table className="contactFormTable">
						<tr className="formRow">
							<td className="rowElement">Title:</td>
							<td className="rowElement"><select>
										<option>Select</option>
										<option>Dr</option>
										<option>Miss</option>
										<option>Mr</option>
										<option>Mrs</option>
										<option>Ms</option>
									</select></td>
						</tr>
						<tr className="formRow">
							<td className="rowElement">First name:</td>
							<td className="rowElement"><input type="text" placeholder="Enter first name" id="firstName"/></td>
						</tr>
						<tr className="formRow">
							<td className="rowElement">Surname:</td>
							<td className="rowElement"><input type="text" placeholder="Enter surname" id="surname"/></td>
						</tr>
						<tr className="formRow">
							<td className="rowElement">Date of birth:</td>
							<td className="rowElement"><input type="date" id="dob"/></td>
						</tr>
						<tr className="formRow">
							<td className="rowElement">E-Mail:</td>
							<td className="rowElement"><input type="text" placeholder="Enter email" id="email"/></td>
						</tr>
						<tr className="formRow">
							<td className="rowElement">Reason for contacting:</td>
							<td className="rowElement"><select>
										<option>Select</option>
										<option>Complaint</option>
										<option>Report good experience</option>
										<option>Suggestions</option>
										<option>Other reason</option>
									</select></td>
						</tr>
						<tr className="formRow">
							<td className="rowElement">Message:</td>
							<td className="rowElement"><textarea placeholder="Enter message here" id="message"></textarea></td>
						</tr>
					</table>
					<button type="submit" className="formSubmitBtn" id="submit" onClick={this.submitForm.bind(this)}>Submit</button>
				</form>
			</div>
		);
	}
}
