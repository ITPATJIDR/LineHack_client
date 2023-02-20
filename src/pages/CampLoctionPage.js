import React from 'react'
import Header from "../components/Header"
import Body from "../components/Body"
import { useLocation, useNavigate } from "react-router-dom"

export default function CampLoctionPage() {

	const location = useLocation()
	const navigate = useNavigate()
	const {bookingPrice, electricity, phoneSignal, rentalEquipment, 
	suitBestFor,toilet,wifi
	} = location.state

	const handlePayment = async () =>{
		navigate("/payment")
	}

	const facilityText = {
		paddingLeft: 20
	}

	return (
		<div style={{backgroundColor:"#1CBF9B"}}>
			<Header alignItems={""} pageService={"Location"} pageMain={"Camp"}/>
			<Body alignItems={""} justifyContent={""} display={""}>
				<div style={{padding:20}}>
					<div style={{fontWeight:'bold',fontSize:20,marginBottom:10}}>
						สิ่งอำนวนความสะดวก
					</div>
					<div style={{display: 'flex',justifyContent:"flex-start",width:150,margin:15}}>
						<input type="checkbox" checked={rentalEquipment}/>
						<p style={facilityText}>อุปกรณ์ให้เช่า</p>
					</div>
					<div style={{display: 'flex',justifyContent:"flex-start",width:150,margin:15}}>
						<input type="checkbox" checked={wifi}/>
						<p style={facilityText}>Wifi</p>
					</div>
					<div style={{display: 'flex',justifyContent:"flex-start",width:150,margin:15}}>
						<input type="checkbox" checked={phoneSignal}/>
						<p style={facilityText}>สัญญาญโทรศัพท์</p>
					</div>
					<div style={{display: 'flex',justifyContent:"flex-start",width:150,margin:15}}>
						<input type="checkbox" checked={electricity}/>
						<p style={facilityText}>ไฟฟ้า</p>
					</div>
					<div style={{display: 'flex',justifyContent:"flex-start",width:150,margin:15}}>
						<input type="checkbox" checked={toilet}/>
						<p style={facilityText}>ห้องน้ำ</p>
					</div>
					<div style={{display: 'flex',justifyContent:"flex-start",width:150,margin:15}}>
						<p style={facilityText}>เหมาะสำหรับ</p>
						<p>{suitBestFor}</p>
					</div>
				</div>	
			</Body>
		</div>
	)
}

