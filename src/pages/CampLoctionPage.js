import React from 'react'
import { useLocation, useNavigate } from "react-router-dom"

export default function CampLoctionPage() {

	const location = useLocation()
	const navigate = useNavigate()
	console.log(location.state)

	const handlePayment = async () =>{
		navigate("/payment")
	}

	return (
		<div style={{backgroundColor:"#1CBF9B"}}>
			<div onClick={() => handlePayment()}>
				Paynow	
			</div>
		</div>
	)
}
