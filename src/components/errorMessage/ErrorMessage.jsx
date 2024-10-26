import React from "react"
import PropTypes from "prop-types"
import "./errorMessageStyles.css"
import warningImage from "../../assets/warning.png"

const ErrorMessage = ({ message }) => {
	if (!message) return null // Don't render anything if there's no message
	return (
		<div className="error-message">
			<img src={warningImage} alt="warning-img" className="warn-img"></img>

			{message}
		</div>
	)
}

ErrorMessage.propTypes = {
	message: PropTypes.string,
}

export default ErrorMessage
