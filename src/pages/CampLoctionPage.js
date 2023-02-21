import React, { useState} from 'react'
import Header from "../components/Header"
import Body from "../components/Body"
import { useLocation, useNavigate } from "react-router-dom"
import { Plus, Minus } from '../assets'

export default function CampLoctionPage() {

	const location = useLocation()
	const navigate = useNavigate()
	const [camp , setCamp] = useState(0)
	const {bookingPrice, electricity, phoneSignal, rentalEquipment, 
	suitBestFor,toilet,wifi
	} = location.state

	const handlePayment = async () =>{
		navigate("/payment")
	}

	const handleAddCamp = () => {
		if (camp !== 3){
			setCamp(camp + 1)
		}
	}

	const handleMinusCamp = () => {
		if (camp !== 0){
			setCamp(camp - 1)
		}
	}


	const handleBack = () =>{
		navigate(-1)
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
					<div style={{display: 'flex',justifyContent:"flex-start",width:160,margin:15}}>
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
					<div style={{display: 'flex',justifyContent:"space-around",width:170,marginBottom:15}}>
						<p style={{fontWeight:"bold"}}>เหมาะสำหรับ</p>
						<p>{suitBestFor}</p>
					</div>

					<div style={{width:350,height:150,marginLeft:5}}>
						<div style={{marginTop:10}}>
							<p>จำนวนเต้นท์</p>
						</div>
						<div style={{width:350,justifyContent:"space-around",display: 'flex',marginTop:40}}>
							<div onClick={() => handleAddCamp()}>
								<img src={Plus} alt="Plus" style={{width:20,height:20}}/>
							</div>
							<div>{camp}</div>
							<div onClick={() => handleMinusCamp()}>
								<img src={Minus} alt="Minus" style={{width:20,height:20}}/>
							</div>
						</div>
						<div style={{marginTop:30,display:"flex",justifyContent:"center"}}>
							จอง {camp} เต้นท์ ราคารวม {bookingPrice * camp}	บาท
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
							<div style={{
								width: 100,
								height: 50,
								backgroundColor: "#FDAF17",
								justifyContent: 'center',
								display: "flex",
								alignItems: "center",
								borderRadius: 10,
								fontWeight: "bold"
							}}
							onClick={() => handleBack()}
							>
								Back
							</div>
						</div>
						<div>
							<div style={{
								width: 100,
								height: 50,
								backgroundColor: "#FDAF17",
								justifyContent: 'center',
								display: "flex",
								alignItems: "center",
								borderRadius: 10,
								fontWeight: "bold" }}
								onClick={() => handlePayment()}
							>
								Pay Now
							</div>
						</div>
					</div>
				</div>	
			</Body>
		</div>
	)
}

