import React from 'react'
import { useLocation } from "react-router-dom"
import ReactStars from "react-rating-stars-component";
import { Map, Spot } from '../assets';

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
			  <img src={campImage} alt={campName} style={{ width: "100%", height: 300, borderBottomRight: 10, borderBottomLeft: 10 }} />
		  </div>
		  <div style={{padding:10}}>
			  <div>
				  <div style={{ display: "flex", justifyContent: "space-between", width: 390, alignItems: "center" }}>
					  <div style={{ fontSize: 20, fontWeight: "bold" }}>
						  <p>{campName}</p>
					  </div>
					  <div>
						  <ReactStars value={campRating} />
					  </div>
				  </div>
				  <div style={{display: 'flex',justifyContent: "space-between"}}>
					  <div style={{display:"flex",alignItems: "center"}}>
						  <img src={Spot} alt="spot" style={{ width: 10, height: 10 }} />
						  <p style={{marginLeft: 10}}>{campLocation}</p>
					  </div>
					  <div>
						  <p>{bookingPrice} / person</p>
					  </div>
				  </div>
				  <div>
					  <div style={{display:"flex",alignItems: "center"}}>
						  <img src={Map} alt="Map" style={{ width: 10, height: 10 }} />
						  <p style={{marginLeft: 10}}>{campName}</p>
					  </div>
				  </div>
			  </div>
			  <div style={{marginTop:10}}>
				  <div>
					  <div>
						  <p style={{fontWeight:"bold"}}>Description</p>
					  </div>
					  <div>
						  {campDescription}
					  </div>
				  </div>
				  <div style={{marginTop:10}}>
					  <div>
						  <p style={{fontWeight:"bold"}}>ค่าบริการเข้าชมอุทยานฯ</p>
					  </div>
					  <div>
						  {campFeeDescription}
					  </div>
				  </div>
			  </div>
			  <div style={{
				position: 'absolute',
				display:'flex',
				bottom: '13',
				justifyContent: 'end',
				backgroundColor: "#F7F7F7",
				width:393,
				height:70,
				left:0,
				bottom:13,
				alignItems:"center",
				padding:20
			  }}>
				  <div>
					  <div style={{
						width:100,
						height:50,
						backgroundColor:"#FDAF17",
						justifyContent: 'center',
						display:"flex",
						alignItems:"center",
						borderRadius:10,
						fontWeight:"bold"
					  }}>
						  Book Now
					  </div>
				  </div>
			  </div>
		  </div>
	  </div>
  )
}
