import React, { useState} from 'react'
import Header from "../components/Header"
import Body from "../components/Body"
import { useLocation, useNavigate } from "react-router-dom"
import { Plus, Minus, Vector_down } from '../assets'
import DatePicker from 'react-date-picker';

export default function CampLoctionPage() {

	const location = useLocation()
	const navigate = useNavigate()
	const [camp , setCamp] = useState(0)
	const [name,setName] = useState("")
	const [phoneNumber,setPhoneNumber] = useState("")
	const [age,setAge] = useState("")
	const [birthDate,setBirthDate] = useState(new Date())
	const [startDate,setStartDate] = useState(new Date())
	const [email,setEmail] = useState("")
	const [address,setAddress] = useState("")
	const [insurance, setInsurance] = useState(false)

	const { electricity, bookingPrice, phoneSignal, rentalEquipment,
		 suitBestFor, toilet, wifi, campImage, campName, id
	} = location.state

	const handlePayment = async () =>{
		navigate("/payment",{
			state:{
				electricity, bookingPrice, phoneSignal, rentalEquipment,
				suitBestFor, toilet, wifi, campImage, campName, id, camp,
				name, phoneNumber, age, birthDate, email, address, startDate
			}
		})
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

	const DetailInput = {
		height: 40,
		borderRadius: 10,
		width: "100%",
		padding: 10
	}

	const Detailbox = {
		marginBottom : 10
	}


	return (
		<div style={{backgroundColor:"#1CBF9B"}}>
			<Header alignItems={""} pageService={"Location"} pageMain={"Camp"}/>
			<Body alignItems={""} justifyContent={""} display={""}>
				<div style={{padding:20}}>
					<div style={{width:350,height:400,marginLeft:5,overflow:"auto"}}>
						<div style={{marginTop:10,fontSize:20,fontWeight:"bold"}}>
							<p>ข้อมูลส่วนตัว</p>
						</div>
						<div style={{marginTop:10}}>
							<div style={Detailbox}>
								<p>ชื่อ-นามสกุล</p>
								<input type="text" style={DetailInput} value={name} onChange={(e) => setName(e.target.value)} placeholder="ชื่อนามสกุล"/>
							</div>
							<div style={Detailbox}>
								<p>เบอร์โทรศัพท์</p>
								<input type="text" style={DetailInput} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="เบอร์โทรศัพท์"/>
							</div>
							<div style={Detailbox}>
								<p>Email</p>
								<input type="text"style={DetailInput} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
							</div>
							<div style={Detailbox}>
								<p>ที่อยุ่</p>
								<input type="text"style={DetailInput} value={address} onChange={(e) => setAddress(e.target.value)} placeholder="ที่อยุ่"/>
							</div>
							<div style={Detailbox}>
								<p>อายุ</p>
								<input type="text"style={DetailInput} value={age} onChange={(e) => setAge(e.target.value)} placeholder="อายุ"/>
							</div>
							<div style={Detailbox}>
								<p>วันเกิด</p>
								<DatePicker onChange={setBirthDate} value={birthDate} />
							</div>
							<div style={Detailbox}>
								<p>วันไป</p>
								<DatePicker onChange={setStartDate} value={startDate} />
							</div>
						
						</div>
						<div style={{marginTop:10}}>
							<p>จำนวนเต้นท์</p>
						</div>
						<div style={{width:350,justifyContent:"space-around",display: 'flex',marginTop:40}}>
							<div onClick={() => handleMinusCamp()}>
								<img src={Minus} alt="Minus" style={{width:20,height:20}}/>
							</div>
							<div>{camp}</div>
							<div onClick={() => handleAddCamp()}>
								<img src={Plus} alt="Plus" style={{width:20,height:20}}/>
							</div>
						</div>
						<div style={{marginTop:30,display:"flex",justifyContent:"center"}}>
							จอง {camp} เต้นท์ ราคารวม {bookingPrice * camp}	บาท
						</div>
						<div style={{display:"flex",justifyContent:"center",marginTop:20}}>
							<div style={{
								display: "flex", justifyContent:"flex-start", background: "#0cb43a", width: 250,
								height: 40, borderRadius: 10, alignItems: "center",padding:10
							}}>
								<input type="checkbox" style={{width:20,height:20}} value={insurance} onChange={setInsurance} />
								<p style={{marginLeft:10,color:"white"}}>รับประกันการเดินทาง</p>	
							</div>
						</div>

						<div style={{display:"flex",justifyContent:"center",marginTop:20}}>
							<div style={{
								display: "flex", justifyContent: "flex-start", background: "#0cb43a", width: 250,
								height: 40, borderRadius: 10, alignItems: "center",padding:10
							}}>
								<input type="checkbox" style={{width:20,height:20}} value={insurance} onChange={setInsurance} />
								<p style={{marginLeft:10,color:"white"}}>ยอมรับเงื่อนไขเเละนโยบายความเป็นส่วนตัว</p>	
								<img src={Vector_down} alt="Down" style={{width:10,height:10}}/>
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

