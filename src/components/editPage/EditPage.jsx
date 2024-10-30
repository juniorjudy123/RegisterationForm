import React, { useEffect, useState } from "react"
import "./editPageStyles.css"
import { URL } from "../constants/utils"
import { useNavigate } from "react-router-dom"

const EditPage = () => {
	const [error, setError] = useState("")
	const navigate = useNavigate()
	const [studentData, setStudentData] = useState({
		name: "",
		email: "",
		mobile: "",
		gender: "",
		campus: "",
	})

	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchStudentData = async () => {
			try {
				const response = await fetch(URL)
				if (!response) {
					throw new Error("Network response was not ok")
				}
				const data = await response.json()
				console.log(data)
				//As i want the last uploaded data
				setStudentData(data[data.length - 1])
			} catch (error) {
				setError("Error fetching student data")
				console.error("Error fetching student data:", error)
			} finally {
				setLoading(false)
			}
		}
		fetchStudentData()
	}, [])

	const { name, email, mobile, gender, campus } = studentData

	const handleVerify = () => {
		const confirmed = window.confirm(
			"Are you sure you want to proceed and submit?"
		)
		if (confirmed) {
			// Redirect to success page
			navigate("/success") // Replace '/success' with your actual success page route
		} else {
			// User canceled the action, you can add additional logic if needed
			console.log("verification cancelled")
		}
	}

	const handleEdit = () => {
		navigate("/", { state: studentData })
	}

	return (
		<div className="outer-container">
			<div className="heading">
				<h2 className="welcome-message">Welcome {name}</h2>
				<h4 className="caution-msg">
					<b className="note-msg"> Note:</b> Kindly review the information
					carefully.Any change after final submission will not be entertained.
				</h4>
			</div>
			<form>
				<div className="input-data">
					<label>Name:</label>
					<input type="text" name="name" value={name} />
				</div>
				<div className="input-data">
					<label>Email:</label>
					<input type="email" name="email" value={email} />
				</div>
				<div className="input-data">
					<label>Phone:</label>
					<input type="tel" name="phone" value={mobile} />
				</div>
				<div className="input-data">
					<label>Gender:</label>
					<input type="text" name="gender" value={gender} />
				</div>
				<div className="input-data">
					<label>Campus:</label>
					<input type="text" name="campus" value={campus} />
				</div>
				<div className="button-container">
					<button type="button" onClick={handleVerify}>
						Verify
					</button>
					<button type="button" onClick={handleEdit}>
						Edit
					</button>
				</div>
			</form>
		</div>
	)
}

export default EditPage
