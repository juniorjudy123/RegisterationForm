import React, { useEffect, useState } from "react"
import "./mainformStyles.css"

const Mainform = () => {
	const [name, SetName] = useState("")
	const [email, SetEmail] = useState("")
	const [mobile, SetMobile] = useState("")
	const [gender, setGender] = useState("")
	const [campus, setCampus] = useState("")
	const [checked, setChecked] = useState(false)

	useEffect(() => {
		console.log(name)
	}, [name])
	useEffect(() => {
		console.log(email)
	}, [email])
	useEffect(() => {
		console.log(mobile)
	}, [mobile])
	useEffect(() => {
		console.log(gender)
	}, [gender])
	useEffect(() => {
		console.log(campus)
	}, [campus])

	const handleGenderChange = (e) => {
		setGender(e.target.value)
	}

	const handleCampusSelect = (e) => {
		setCampus(e.target.value)
		console.log(campus)
	}

	const handleChecked = (prev) => {
		setChecked((prev) => !prev)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log({ name, email, mobile, gender, campus, checked })
	}

	return (
		<div className="outer-box">
			<form onSubmit={handleSubmit}>
				<div className="heading-div">
					<h1 className="heading">Registeration Form</h1>
				</div>
				<div className="input-data">
					<input
						type="name"
						placeholder="FullName"
						value={name}
						onChange={(e) => {
							SetName(e.target.value)
						}}
						required
					></input>
				</div>
				<div className="input-data">
					<input
						type="email"
						placeholder="Email"
						required
						value={email}
						onChange={(e) => {
							SetEmail(e.target.value)
						}}
					></input>
				</div>
				<div className="input-data">
					<input
						type="tel"
						placeholder="+91"
						required
						value={mobile}
						onChange={(e) => {
							SetMobile(e.target.value)
						}}
					></input>
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
						<option value=""></option>
						<option value="Ernakulam">Ernakulam</option>
						<option value="Chennai">Chennai</option>
						<option value="Bengaluru">Bengaluru</option>
						<option value="Delhi">Delhi</option>
					</select>
				</div>

				<label className="checkbox-label">
					<input
						type="checkbox"
						name="updates"
						className="checkbox-input"
						value={checked}
						onChange={handleChecked}
						required
					/>
					I agree to the terms and conditions
				</label>

				<div className="button-div">
					<button className="submit" disabled={!checked}>
						submit
					</button>
				</div>
				<div className="ellipsis-indicator">...</div>
			</form>
		</div>
	)
}

export default Mainform
