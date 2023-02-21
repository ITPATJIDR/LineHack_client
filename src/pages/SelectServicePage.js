import React from 'react'
import { useLocation, useNavigate } from "react-router-dom"
import ReactStars from "react-rating-stars-component";
import { Map, Spot } from '../assets';

export default function SelectServicePage() {
	const location = useLocation()
	const navigate = useNavigate()


	const { serviceImage, serviceDescription, serviceName, serviceLineContact, serviceDistance, serviceContact } = location.state.item

	const handleBack = () => {
		navigate("/")
	}

	const handleBookNow = () => {
	}

  return (
	  <div>
		  <div>
			  <img src={serviceImage} alt={serviceName} style={{ width: "100%", height: 300, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }} />
		  </div>
		  <div style={{ padding: 10 }}>
			  <div>
				  <div style={{ display: "flex", justifyContent: "space-between", width: 390, alignItems: "center" }}>
					  <div style={{ fontSize: 20, fontWeight: "bold" }}>
						  <p>{serviceName}</p>
					  </div>
				  </div>
				  <div style={{ display: 'flex', justifyContent: "space-between" }}>
					  <div style={{ display: "flex", alignItems: "center" }}>
						  <img src={Spot} alt="spot" style={{ width: 15, height: 15 }} />
						  <p style={{ marginLeft: 10 }}>{serviceContact}</p>
					  </div>
				  </div>
				  <div>
					  <div style={{ display: "flex", alignItems: "center" }}>
						  <img src={Map} alt="Map" style={{ width: 15, height: 15 }} />
						  <p style={{ marginLeft: 10 }}>{serviceLineContact}</p>
					  </div>
				  </div>
			  </div>
			  <div style={{ marginTop: 10 }}>
				  <div>
					  <div>
						  <p style={{ fontWeight: "bold" }}>Description</p>
					  </div>
					  <div>
						  {serviceDescription}
					  </div>
				  </div>
				  <div style={{marginTop:10}}>
					  <div>
						  <p style={{fontWeight:"bold"}}>ค่าบริการเข้าชมอุทยานฯ</p>
					  </div>
					  <div>
						  {serviceDistance}
					  </div>
				  </div>
			  </div>
			  <div style={{
				  position: 'absolute',
				  display: 'flex',
				  bottom: '0',
				  justifyContent: "flex-start",
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
			  </div>
		  </div>
	  </div>
	)

}
