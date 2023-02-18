import React from 'react'
import { useLocation, useNavigate } from "react-router-dom"

export default function CampLoctionPage() {

	const location = useLocation()
	const navigate = useNavigate()
	console.log(location.state)

	return (
		<div style={{backgroundColor:"#1CBF9B"}}>CampLoctionPage</div>
	)
}
