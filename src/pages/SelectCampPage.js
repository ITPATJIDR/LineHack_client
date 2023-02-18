import React from 'react'
import { useLocation } from "react-router-dom"
import ReactStars from "react-rating-stars-component";

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
		<img src={campImage} alt={campName} style={{width:"100%",height:300,borderBottomRight:10,borderBottomLeft:10}}/>
	</div>
	<div>
		<div>
			<div>
				<p>{campName}</p>
			</div>
			<div>
				<ReactStars value={campRating}/>
			</div>
		</div>
		<div>
			<div>
				<p>{campLocation}</p>
			</div>
			<div>
				<p>{bookingPrice} / person</p>
			</div>
		</div>
		<div>
			<div>
				<p>{campName}</p>
			</div>
		</div>
	</div>
	<div>
		<div>
			<div>
				<p>Description</p>
			</div>
			<div>
				{campDescription}
			</div>
		</div>
		<div>
			<div>
				<p>ค่าบริการเข้าชมอุทยานฯ</p>
			</div>
			<div>
				{campFeeDescription}
			</div>
		</div>
	</div>
	<div>
		<div>
			<div>
				Book Now
			</div>
		</div>
	</div>
    </div>
  )
}
