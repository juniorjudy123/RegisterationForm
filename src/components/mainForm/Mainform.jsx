import React, { useEffect, useState } from "react"
import "./mainformStyles.css"

const Mainform = () => {
	return (
		<div className="outer-box">
			<form typeof="submit">
				<div className="heading-div">
					<h1 className="heading">Registeration Form</h1>
				</div>
				<div className="input-data">
					<input type="name" placeholder="FullName" required></input>
				</div>
				<div className="input-data">
					<input type="email" placeholder="Email" required></input>
				</div>
				<div className="input-data">
					<input type="tel" placeholder="+91" required></input>
				</div>

				<div className="gender-div">
					<label>
						<b>Gender:</b>
					</label>
					<label>
						<input type="radio" name="gender" value="male" />
						Male
					</label>
					<label>
						<input type="radio" name="gender" value="female" />
						Female
					</label>
					<label>
						<input type="radio" name="gender" value="other" />
						Other
					</label>
				</div>
				<div className="campus-data">
					<label className="campus-label">Select Campus</label>
					<select name="city" className="campus-select">
						<option value="">Ernakulam</option>
						<option value="">Chennai</option>
						<option value="">Banglore</option>
						<option value="">Delhi</option>
					</select>
				</div>

				<label className="checkbox-label">
					<input
						type="checkbox"
						name="updates"
						className="checkbox-input"
						required
					/>
					I agree to the terms and conditions
				</label>

				<div className="button-div">
					<button className="submit">submit</button>
				</div>
				<div className="ellipsis-indicator">...</div>
			</form>
		</div>
	)
}

export default Mainform
