import React from 'react'
import { useLocation, useNavigate } from "react-router-dom"
import ReactStars from "react-rating-stars-component";
import { Map, Spot } from '../assets';

export default function SelectCampPage() {
	const location = useLocation()
	const navigate = useNavigate()

	const {campImage ,campName ,campDescription,bookingPrice,campFacility,
	campFeeDescription, campLocation, campMode,
	campPromotion, campPromotionRating, campRating,electricity,phoneSignal,
	rentalEquipment,suitBestFor,toilet,wifi,id 
	} = location.state.item

	const handleBack = () => {
		navigate("/")
	}

	const handleBookNow = () => {
		navigate("/campLocation",{
			state:{
				electricity,
				bookingPrice,
				phoneSignal,
				rentalEquipment,
				suitBestFor,
				toilet,
				wifi,
				campImage,
				campName,
				id
			}
		})
	}

	const facilityText = {
		paddingLeft: 20
	}

  return (
	  <div>

		  <div>
			  <img src={campImage} alt={campName} style={{ width: "100%", height: 300, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }} />
		  </div>
		  <div style={{padding:10}}>
			  <div>
				  <div style={{ display: "flex", justifyContent: "space-between", width: 390, alignItems: "center" }}>
					  <div style={{ fontSize: 20, fontWeight: "bold" }}>
						  <p>{campName}</p>
					  </div>
					  <div style={{marginRight:10 }}>
						  <ReactStars value={campRating} />
					  </div>
				  </div>
				  <div style={{display: 'flex',justifyContent: "space-between"}}>
					  <div style={{display:"flex",alignItems: "center"}}>
						  <img src={Spot} alt="spot" style={{ width: 15, height: 15 }} />
						  <p style={{marginLeft: 10}}>{campLocation}</p>
					  </div>
					  <div>
						  <p>{bookingPrice} / person</p>
					  </div>
				  </div>
				  <div>
					  <div style={{display:"flex",alignItems: "center"}}>
						  <img src={Map} alt="Map" style={{ width: 15, height: 15 }} />
						  <p style={{marginLeft: 10}}>{campName}</p>
					  </div>
				  </div>
			  </div>
			  <div style={{marginTop:10,overflow:"auto",height:250}}>
				  <div style={{marginTop:10}}>
					  <div style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>
						  สิ่งอำนวนความสะดวก
					  </div>
					  <div style={{display:"flex",flexWrap:"wrap" }}>
						  <div style={{ display: 'flex', justifyContent: "flex-start", width: 150, margin: 15, marginTop: 10 }}>
							  <input type="checkbox" checked={rentalEquipment} />
							  <p style={facilityText}>อุปกรณ์ให้เช่า</p>
						  </div>
						  <div style={{ display: 'flex', justifyContent: "flex-start", width: 150, margin: 15, marginTop: 10 }}>
							  <input type="checkbox" checked={wifi} />
							  <p style={facilityText}>Wifi</p>
						  </div>
						  <div style={{ display: 'flex', justifyContent: "flex-start", width: 150, margin: 15, marginTop: 10 }}>
							  <input type="checkbox" checked={phoneSignal} />
							  <p style={facilityText}>สัญญาญโทรศัพท์</p>
						  </div>
						  <div style={{ display: 'flex', justifyContent: "flex-start", width: 150, margin: 15, marginTop: 10 }}>
							  <input type="checkbox" checked={electricity} />
							  <p style={facilityText}>ไฟฟ้า</p>
						  </div>
						  <div style={{ display: 'flex', justifyContent: "flex-start", width: 150, margin: 15, marginTop: 10 }}>
							  <input type="checkbox" checked={toilet} />
							  <p style={facilityText}>ห้องน้ำ</p>
						  </div>
						  <div style={{ display: 'flex', justifyContent: "flex-start", width: 150, margin: 15, marginTop: 10 }}>
							  <p style={{ fontWeight: "bold",marginRight:5 }}>เหมาะสำหรับ</p>
							  <p>{suitBestFor}</p>
						  </div>
					  </div>
				  </div>
				  <div>
					  <div>
						  <p style={{fontWeight:"bold"}}>Description</p>
					  </div>
					  <div style={{width:375,overflow:"hidden",lineBreak:'anywher' }}>
						  {campDescription}
					  </div>
				  </div>
			  </div>
			  <div style={{
				  position: 'absolute',
				  display: 'flex',
				  bottom: '0',
				  justifyContent: "space-between",
				  backgroundColor: "#F7F7F7",
				  width: 393,
				  height: 70,
				  left: 0,
				  bottom: 0,
				  alignItems: "center",
				  padding: 20
			  }}>
				  <div>
					  <div onClick={() => handleBack()} style={{
						  width: 100,
						  height: 50,
						  backgroundColor: "#FDAF17",
						  justifyContent: 'center',
						  display: "flex",
						  alignItems: "center",
						  borderRadius: 10,
						  fontWeight: "bold"
					  }}>
						  Back
					  </div>
				  </div>
				  <div>
					  <div style={{
						width:100,
						height:50,
						backgroundColor:"#FDAF17",
						justifyContent: 'center',
						display:"flex",
						alignItems:"center",
						borderRadius:10,
						fontWeight:"bold" }}
						onClick={() => handleBookNow()}
					>
						  Book Now
					  </div>
				  </div>
			  </div>
		  </div>
	  </div>
  )
}
