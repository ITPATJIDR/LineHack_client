import React, { useEffect, useState} from 'react'
import Header from "../components/Header"
import Body from "../components/Body"
import { useLocation, useNavigate } from "react-router-dom"
import { Plus, Minus, Vector_down } from '../assets'
import DatePicker from 'react-date-picker';
import axios from 'axios'
import {useSelector , useDispatch } from "react-redux"
import { setUserInfo, selectUserInfo } from '../store/userInfoSlice';
import ModalMain from '../components/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CampLoctionPage() {

	const location = useLocation()
	const navigate = useNavigate()
	const [camp , setCamp] = useState(0)
	const [name,setName] = useState("")
	const [phoneNumber,setPhoneNumber] = useState("")
	const [age,setAge] = useState("")
	const [birthDate,setBirthDate] = useState(new Date())
	const [startDate,setStartDate] = useState(new Date())
	const [endDate,setEndDate] = useState(new Date())
	const [email,setEmail] = useState("")
	const [address,setAddress] = useState("")
	const [insurance, setInsurance] = useState(false)
	const [PDPA, setPDPA] = useState(false)
	const [result ,setResult] = useState(0)
	const [booking, setBooking] = useState([]);
	const userInfo = useSelector(selectUserInfo)
	const [modalIsOpen, setIsOpen] = useState(false);
	const [alreadyBooking, setAlreadyBooking] = useState(false);


	const { electricity, bookingPrice, phoneSignal, rentalEquipment,
		 suitBestFor, toilet, wifi, campImage, campName, id
	} = location.state

	const handlePayment = async () =>{
		if (PDPA && camp > 0){
			if (booking.data.Booking !== null) {
				if (Object.keys(booking.data.Booking).length > 0) {
					setAlreadyBooking(true)
				} else {
					navigate("/payment", {
						state: {
							electricity, result, phoneSignal, rentalEquipment,
							suitBestFor, toilet, wifi, campImage, campName, id, camp,
							name, phoneNumber, age, birthDate, email, address, startDate,endDate
						}
					})
				}
			}else{
				navigate("/payment", {
					state: {
						electricity, result, phoneSignal, rentalEquipment,
						suitBestFor, toilet, wifi, campImage, campName, id, camp,
						name, phoneNumber, age, birthDate, email, address, startDate
					}
				})
			}
		}else{
			setIsOpen(true)
		}
	}

	const handleAddCamp = () => {
		if (camp !== 3){
			setCamp(camp + 1)
			setResult(Number(result) + Number(bookingPrice))
		}
	}

	const handleMinusCamp = () => {
		if (camp !== 0){
			setCamp(camp - 1)
			setResult(Number(result) - Number(bookingPrice))
		}
	}

	const handlePrice = () =>{
		console.log(insurance)
		if (insurance){
			setResult(Number(result) - 200)
		} 
		if (!insurance){
			setResult(Number(result) + 200)
		}
	}

	const handleBack = () =>{
		navigate(-1)
	}

	const handlePDPA = () => {
		window.location.replace("https://drive.google.com/file/d/1n45TAcvUUng-hHs8yaHejs1h5Ruv5XhX/view?usp=sharing")
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

	const inputText = {
		fontWeight:"bold"
	}

	const checkBooking = async () => {
		const res = await axios.post("https://rich-ruby-pelican-sari.cyclic.app/camp/checkBooking", {
			userId: userInfo.userInfo.data.userId
		})
		setBooking(res.data)
	}

	useEffect(() => {
		checkBooking()
	},[])

	return (
		<div style={{backgroundColor:"#244a71"}}>
			<Header alignItems={""} pageService={"Location"} pageMain={"Camp"}/>
			<Body alignItems={""} justifyContent={""} display={""}>
				<div style={{padding:20}}>
					<div style={{width:350,height:400,marginLeft:5,overflow:"auto"}}>
						<div style={{marginTop:10,fontSize:20,fontWeight:"bold"}}>
							<p>???????????????????????????????????????</p>
						</div>
						<div style={{marginTop:10}}>
							<div style={Detailbox}>
								<p style={inputText}>????????????-?????????????????????</p>
								<input type="text" style={DetailInput} value={name} onChange={(e) => setName(e.target.value)} placeholder="?????????????????????????????????"/>
							</div>
							<div style={Detailbox}>
								<p style={inputText}>???????????????????????????????????????</p>
								<input type="text" style={DetailInput} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="???????????????????????????????????????"/>
							</div>
							<div style={Detailbox}>
								<p style={inputText}>Email</p>
								<input type="text"style={DetailInput} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
							</div>
							<div style={Detailbox}>
								<p style={inputText}>?????????????????????</p>
								<input type="text"style={DetailInput} value={address} onChange={(e) => setAddress(e.target.value)} placeholder="?????????????????????"/>
							</div>
							<div style={Detailbox}>
								<p style={inputText}>????????????</p>
								<input type="text"style={DetailInput} value={age} onChange={(e) => setAge(e.target.value)} placeholder="????????????"/>
							</div>
							<div style={Detailbox}>
								<p style={inputText}>?????????????????????</p>
								<DatePicker onChange={setBirthDate} value={birthDate} />
							</div>
							<div style={Detailbox}>
								<p style={inputText}>???????????????</p>
								<DatePicker onChange={setStartDate} value={startDate} />
							</div>
							<div style={Detailbox}>
								<p style={inputText}>?????????????????????</p>
								<DatePicker onChange={setEndDate} value={endDate} />
							</div>
						</div>
						<div style={{marginTop:10}}>
							<p>?????????????????????????????????</p>
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
						<div style={{display:"flex",justifyContent:"center",marginTop:20}}>
							<div style={{
								display: "flex", justifyContent:"flex-start", background: "#0cb43a", width: 250,
								height: 40, borderRadius: 10, padding:10
							}}>
								<input type="checkbox" style={{width:20,height:20}} value={insurance} onChange={() => {setInsurance(!insurance)}} onClick={() => handlePrice()}/>
								<p style={{marginLeft:10,color:"white"}}>?????????????????????????????????????????????????????????</p>	
							</div>
						</div>

						<div style={{display:"flex",justifyContent:"center",marginTop:20}}>
							<div  style={{
								display: "flex", justifyContent: "flex-start", background: "#0cb43a", width: 300,
								height: 60, borderRadius: 10, padding: 10, 
							}}>
								<input type="checkbox" style={{ width: 20, height: 20 }} value={PDPA} onClick={() => setPDPA(!PDPA)}/>
								<div onClick={() => handlePDPA()} style={{display:"flex",alignItems:"center"}}>
									<p style={{ marginLeft: 10, color: "white" }}>?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>
									<img src={Vector_down} alt="Down" style={{ width: 10, height: 10, marginLeft: 10 }} />
								</div>
							</div>
						</div>

						<div style={{marginTop:30,display:"flex",justifyContent:"center"}}>
							<div style={{height:100,width:400,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:30,background:"#B2B2B2",color:"white",flexDirection:"column"}}>
								<p>????????? {camp} ??????????????????</p> 
								<p>????????????????????? {result} ????????? </p>
							</div>
						</div>
					</div>

					{modalIsOpen ?
						<ModalMain show={modalIsOpen} onHide={() => setIsOpen(!modalIsOpen)} title={"????????????????????????"} body={"PLS CLICK PDPA OR ADD TENT"}/>
					 :null}

					{alreadyBooking ?
						<ModalMain show={alreadyBooking} onHide={() => setAlreadyBooking(!alreadyBooking)} title={"????????????????????????"} body={"?????????????????????????????????????????????????????????????????????"}/>
					 :null}

					<div style={{
						position: 'absolute',
						display: 'flex',
						bottom: '0',
						justifyContent: "space-between",
						backgroundColor: "#000000",
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
								backgroundColor: "#DFDFDF",
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
								width: 250,
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

