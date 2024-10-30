import React, { useState } from "react"
import "./mainformStyles.css"
import ErrorMessage from "../errorMessage/ErrorMessage"
import { URL } from "../constants/utils"
import { Link, useLocation, useNavigate } from "react-router-dom"

const Mainform = () => {
	const location = useLocation()
	const {
		name: initialName,
		email: initialEmail,
		mobile: initialPhone,
		gender: initialGender,
		campus: initalCampus,
	} = location.state || {}
	const [name, setName] = useState(initialName || "")
	const [email, setEmail] = useState(initialEmail || "")
	const [mobile, setMobile] = useState(initialPhone || "")
	const [gender, setGender] = useState(initialGender || "")
	const [campus, setCampus] = useState(initalCampus || "")
	const [checked, setChecked] = useState(false)
	const [emailError, setEmailError] = useState("")
	const [mobileError, setMobileError] = useState("")
	const navigate = useNavigate()
	const [isEditing, setIsEditing] = useState(!!location.state)

	const validateEmail = (email) => {
		const emailPattern =
			/^(?!.*\.{2})(?!.*@.*\.{2})[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
		return emailPattern.test(email)
	}

	const validateMobile = (mobile) => {
		const mobilePattern = /^\d{10}$/
		return mobilePattern.test(mobile)
	}

	const handleGenderChange = (e) => {
		setGender(e.target.value)
	}

	const handleCampusSelect = (e) => {
		setCampus(e.target.value)
	}

	const handleChecked = (e) => {
		setChecked(e.target.checked)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setEmailError("") // Reset error messages
		setMobileError("")

		const emailError = validateEmail(email) ? "" : "Invalid email format"
		const mobileError = validateMobile(mobile)
			? ""
			: "Mobile number must be 10 digits"

		if (emailError) {
			setEmailError(emailError)
			return // Early exit if there's an email error
		}

		if (mobileError) {
			setMobileError(mobileError)
			return // Early exit if there's a mobile error
		}

		console.log({ name, email, mobile, gender, campus, checked })

		const data = {
			name,
			email,
			mobile,
			gender,
			campus,
			formchecked: checked,
		}

		try {
			const response = await fetch(`${URL}`, {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			})

			if (!response.ok) {
				throw new Error("Network response was not ok")
			}

			const result = await response.json() // Assuming your server returns JSON
			console.log(result) // Handle the response as needed
			//navigate to the edit page
			navigate("/edit")
		} catch (error) {
			console.error("Error submitting form:", error)
		}
	}

	return (
		<div className="outer-box">
			<form onSubmit={handleSubmit}>
				<div className="heading-div">
					<h2 className="heading">
						{isEditing ? "Edit Details" : "Registration Form"}
					</h2>
				</div>
				<div className="input-data">
					<input
						type="text"
						className="input-field"
						placeholder="Full Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
				</div>
				<div className="input-data">
					<input
						type="email"
						placeholder="Email"
						className="input-field"
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<ErrorMessage message={emailError} />
				</div>
				<div className="input-data">
					<input
						type="tel"
						placeholder="Mobile Number"
						required
						className="input-field"
						value={mobile}
						onChange={(e) => setMobile(e.target.value)}
					/>
					<ErrorMessage message={mobileError} />
				</div>

				<div className="gender-div">
					<label>
						<b>Gender:</b>
					</label>
					<label>
						<input
							type="radio"
							name="gender"
							value="male"
							checked={gender === "male"}
							onChange={handleGenderChange}
						/>
						Male
					</label>
					<label>
						<input
							type="radio"
							name="gender"
							value="female"
							checked={gender === "female"}
							onChange={handleGenderChange}
						/>
						Female
					</label>
					<label>
						<input
							type="radio"
							name="gender"
							value="other"
							checked={gender === "other"}
							onChange={handleGenderChange}
						/>
						Other
					</label>
				</div>
				<div className="campus-data">
					<label className="campus-label">Select Campus</label>
					<select
						name="city"
						className="campus-select"
						value={campus}
						onChange={handleCampusSelect}
						required
					>
						<option value="" disabled>
							Select
						</option>
						<option value="Ernakulam">Ernakulam</option>
						<option value="Chennai">Chennai</option>
						<option value="Bengaluru">Bengaluru</option>
						<option value="Delhi">Delhi</option>
					</select>
				</div>

				{isEditing ? (
					""
				) : (
					<label className="checkbox-label">
						<input
							type="checkbox"
							name="updates"
							className="checkbox-input"
							checked={checked}
							onChange={handleChecked}
							required
						/>
						I agree to the terms and conditions .
						<Link to="/terms" className="terms-link">
							Terms
						</Link>
					</label>
				)}

				<div className="button-div">
					{isEditing && <button className="submit">Back</button>}
					<button className="submit" disabled={isEditing ? false : !checked}>
						{isEditing ? "Update" : "Submit"}
					</button>
				</div>

				<div className="ellipsis-indicator">...</div>
			</form>
		</div>
	)
}

export default Mainform
