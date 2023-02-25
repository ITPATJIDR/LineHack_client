import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserInfo } from '../store/userInfoSlice'
import Header from "../components/Header"
import Body from "../components/Body"
import Footer from '../components/Footer'
import WaitingLogin from './waitingLogin'
import { Store_gray, Store_white, Food_gray, Food_white, Beverage_white, Beverage_gray ,Vector_down } from '../assets'
import axios, { all } from 'axios'
import liff from '@line/liff';
import { isAllOf } from '@reduxjs/toolkit'

const categorys = [
	{
		icon_grey: Store_gray,
		icon_white: Store_white,
		categoryName : "Store"
	},
	{
		icon_grey: Food_gray,
		icon_white: Food_white,
		categoryName : "Food"
	},
	{
		icon_grey: Beverage_gray,
		icon_white: Beverage_white,
		categoryName : "Beverage"
	},
]

export default function ServicePage() {

	const [allService, setAllService] = useState({})
	const [seeMore, setSeemore] = useState(false)
	const [page, setPage] = useState("")
	const [category, setCategory] = useState("")
	const [idToken, setIdToken] = useState("");

	const userInfo = useSelector((state) => state.userInfo)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleSeeMore = (page) =>{
		setSeemore(true)
		setPage(page)
	}
	
	const getAllCamp = async (data) =>{
		const res = await axios.post("https://rich-ruby-pelican-sari.cyclic.app/service/getServiceById", {
			userId: data.userId
		})
		setAllService(res.data)
	} 

	const checkNewUser = async (profile) => {
		const payload = {
			userId: profile.userId,
			userImage: profile.pictureUrl,
			userName: profile.displayName
		}

		await axios.post("https://rich-ruby-pelican-sari.cyclic.app/user/register", payload, {
			withCredentials: true,
			headers: {
				"Access-Control-Allow-Origin": "https://rich-ruby-pelican-sari.cyclic.app",
			}
		}).then((res) => {
			dispatch(setUserInfo({
				data: res.data,
			}))
			getAllCamp(res.data)
		})
	}

	const initLine = () => {
		liff.init({ liffId: '1657835103-oXvwMRa8', withLoginOnExternalBrowser: true }, () => {
			if (liff.isLoggedIn()) {
				runApp();
			} else {
				liff.login();
			}
		}, err => console.error(err));
	}

	const runApp = () => {
		const idToken = liff.getIDToken();
		setIdToken(idToken);
		liff.getProfile().then(profile => {
			checkNewUser(profile)
			setUserInfo(profile)
		}).catch(err => console.error(err));
	}


	const handleClick = async (item) =>{
		navigate("/selectService",{
			state: {
				item: item
			}
		})
	}

	useEffect(() =>{
		initLine()
	},[])

	useEffect(() =>{
		console.log("data213",allService?.data?.Booking[0].Camp.service.length)
	},[allService])


	return (
		<div style={{backgroundColor:"#1CC09E",width:390,height:750}}>
			{Object.keys(userInfo.userInfo).length > 0
			? <>
			<Header alignItems={"left"} seeMore={seeMore} page={page} pageService={"Service"} pageMain={"Monkey"}/>
			<Body alignItems={""} justifyContent={""} seeMore={seeMore} page={page} pageService={"Service"} display={"flex"} >
				<div style={{ width: '100%', padding: 20,overflow:"hidden" }}>
					<div>
						<div>
							<p style={{ fontSize: 20, fontWeight: 'bold' }}>Categories</p>
						</div>
						<div style={{ display: "flex", marginTop: 15 }}>
							{categorys.map((item, index) => {
								return (
									<div onClick={() => setCategory(item.categoryName)} key={index} style={{ width: "100%" }}>
										<div style={{ display: "flex", borderWidth: 1, width: 110, borderRadius: 10, borderColor: "#C4C4C4", marginRight: 10, alignItems: 'center', 
										backgroundColor: category === item.categoryName ? "#1CBF9B" : "" }}>
											<img src={category === item.categoryName ? item.icon_white : item.icon_grey} alt={item.name} style={{ width: 60, height: 60 }} />
											<p style={{ fontSize: 14, lineBreak: "anywhere", fontWeight: "bold", color: category === item.categoryName ? "white" : "#838383" }}>{item.categoryName}</p>
										</div>
									</div>
								)
							})}
						</div>
						<div style={{ display: "flex", width: "100%", justifyContent: "space-between", marginTop: 10 }}>
							<div style={{ borderWidth: 1, borderRadius: 10, width: 280, height: 30, padding: 10, marginRight: 5, fontWeight: "bold", display: "flex", justifyContent: "space-between", alignItems: "center", color: "#C4C4C4" }}>
								<p>Province</p>
								<img src={Vector_down} style={{ width: 10, height: 10 }} alt="vector_down" />
							</div>
							<div style={{ borderWidth: 1, borderRadius: 10, width: 280, height: 30, padding: 10, marginRight: 5, fontWeight: "bold", display: "flex", justifyContent: "space-between", alignItems: "center", color: "#C4C4C4" }}>
								<p>District</p>
								<img src={Vector_down} style={{ width: 10, height: 10 }} alt="vector_down" />
							</div>
						</div>
						<div style={{ backgroundColor: "#f7f7f7", height: 100, width: "100%", padding: 20 }}>
							<div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
								<div>
									<p style={{ fontWeight: "bold", fontSize: 16 }}>Nearby Attractions & Food</p>
								</div>
								{page === "Service"
								?
								<div onClick={() => handleSeeMore("")}>
									<p style={{ fontWeight: "bold", fontSize: 16, color: "#FDAF17" }}>see less</p>
								</div>
								:	
								<div onClick={() => handleSeeMore("Service")}>
									<p style={{ fontWeight: "bold", fontSize: 16, color: "#FDAF17" }}>see more</p>
								</div>
								}
							</div>

							<div style={{marginTop:20,overflow:"scroll"}}>
								<div className="flex " style={{
									width:seeMore === true && page === "Service" ? null : 1100,
									height:seeMore === true && page === "Service" ? 390 : null,
									overflow: 'auto',
									flexWrap:seeMore === true && page === "Service" ? "wrap" : null,
									justifyContent: seeMore === true && page === "Service" ? "space-evenly" : null,
									}}>
									{allService?.data?.Booking[0]?.Camp.service.length > 0
										? allService?.data?.Booking[0].Camp.service.map((item, index) => {
											console.log(item)
											return (
												<div>HI</div>
											// 	// <div key={index} style={{ width: seeMore === true && page === "Service" ? 130 : 400 ,
											// 	// height: 220, borderWidth: 1, borderRadius: 10,marginRight: seeMore === true && page === "Service" ? 0 : 20,
											// 	// marginBottom: seeMore === true && page === "Service" ? 10 :0,
											// 	// overflow:"hidden",textOverflow:"ellipsis" }} 
											// 	// onClick={() => handleClick(item)}
											// 	// >
											// 	// 	<img src={item.serviceImage} alt={item.serviceName} style={{width:"100%",height:130,borderTopRightRadius:10,borderTopLeftRadius:10}}/>
											// 	// 	<div style={{padding:10}}>
											// 	// 		<p style={{fontWeight:'bold'}}>{item.serviceName}</p>
											// 	// 		<p style={{lineBreak:"anywhere"}}>{item.serviceDescription}</p>
											// 	// 	</div>
											// 	// </div>
											)
										})
										: <div>
											<p>Please Booking First</p>
										</div>
										}
								</div>
							</div>
						</div>
					</div>
				</div>
			</Body>
			<Footer/>
			</>
			: <WaitingLogin/>		
		}
		</div>
	)
}
