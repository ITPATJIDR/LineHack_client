import React from 'react'
import { useLocation } from "react-router-dom"

export default function SelectCampPage() {
	const location = useLocation()
	const {campImage ,campName ,campDescription,bookingPrice,campFacility,
	campFacilityDescription, campFeeDescription, campLocation, campMode,
	campPromotion, campPromotionRating, campRating
	} = location.state.item

	console.log(location.state.item)
  return (
    <div>
	<div>
		<img src={campImage} alt={campName} style={{width:"100%",height:300,borderBottomRadius:10}}/>
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
