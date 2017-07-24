import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
	render() {
		return(
			<footer >
				<div>
					<ul className="nav footer">
						<li className="link">
							<Link to={{ pathname: "/" }}><span>Home</span></Link>
						</li>

						<li className="link" >
							<Link to={{ pathname: "/Films" }}
							><span>Films</span></Link>
						</li>

						<li className="link">
							<Link to={{ pathname: "/Cinema" }}
							><span>Cinemas</span></Link>
						</li>

						<li className="link">
							<Link to={{ pathname: "/Faq" }}><span>FAQ</span></Link>
						</li>

						<li className="link">
							<Link to={{ pathname: "/Contact" }}><span>Contact Us</span></Link>
						</li>


				<li className="link">
					<Link to = {{ pathname: "/Films" }}><span>Now Showing</span></Link>
				</li>

				<li className="link">
					<Link to = {{ pathname: "/Films"}}><span>Coming Soon</span></Link>
				</li>

				<li className="link">
					<Link to = {{ pathname: "/Classifications" }}><span>Classifications</span></Link>
				</li>

				<li className="link">
					<Link to = {{ pathname: "/Formats" }}><span>Formats</span></Link>
				</li>


				<li className="link">
					<Link to = {{ pathname: "/Cinema" }} >
					<span>About</span></Link>
				</li>

				<li className="link">
					<Link to = {{ pathname: "/Cinema" }}><span>Facilities</span></Link>
				</li>

				<li className="link">
					<Link to = {{ pathname: "/Cinema" }}><span>Local Area</span></Link>
				</li>
			</ul>
				</div>
				<div className="spacer"></div>
			</footer>
		);
	}
}
