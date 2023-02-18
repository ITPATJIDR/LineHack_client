import React from 'react'
import { useLocation, useNavigate } from "react-router-dom"

export default function CampLoctionPage() {

	const location = useLocation()
	const navigate = useNavigate()
	console.log(location.state.item)

	return (
		<div>CampLoctionPage</div>
	)
}
