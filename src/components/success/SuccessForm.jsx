import React from "react"
import "./successFormStyles.css"
import { Link } from "react-router-dom"
function Successform() {
	return (
		<div id="card" className="animated fadeIn">
			<div id="upper-side">
				<i class="fa fa-check icon-check"></i>

				<h3 id="status">Success</h3>
			</div>
			<div id="lower-side">
				<p id="message1">
					<b>You are registered !!!</b>
				</p>
				<p id="message">
					Thank you for registering.Please verify your email address. Email has
					been sent to your Registered email"
				</p>
				<Link to="/" id="contBtn">
					Exit
				</Link>
			</div>
		</div>
	)
}

export default Successform
