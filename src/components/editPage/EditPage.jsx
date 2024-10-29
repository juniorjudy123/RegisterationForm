import React from "react"
import "./editPageStyles.css"

const EditPage = () => {
	return (
		<div className="outer-container">
			<div className="heading">
				<h2>Welcome student</h2>
				<h4 className="caution-msg">
					<b className="note-msg">Note :</b> Please review the information
					carefully.Any change after final submission will not be entertained
				</h4>
			</div>
			<form>
				<div className="input-data">
					<label>Name:</label>
					<input type="text" name="name" />
				</div>
				<div className="input-data">
					<label>Email:</label>
					<input type="email" name="email" />
				</div>
				<div className="input-data">
					<label>Phone:</label>
					<input type="tel" name="phone" />
				</div>
				<div className="input-data">
					<label>Gender:</label>
					<input type="text" name="gender" />
				</div>
				<div className="input-data">
					<label>Campus:</label>
					<input type="text" name="campus" />
				</div>
				<div className="button-container">
					<button type="button" onClick={() => alert("Details verified!")}>
						Verify
					</button>
					<button type="button">Edit</button>
				</div>
			</form>
		</div>
	)
}

export default EditPage
