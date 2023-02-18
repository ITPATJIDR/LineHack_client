import React from 'react'
import { useLocation } from "react-router-dom"

export default function SelectCampPage() {
	const location = useLocation()

	console.log(location.state)
  return (
    <div>
	<div>
		image
	</div>
	<div>
		body	
	</div>
	<div>
		footer	
	</div>
    </div>
  )
}
