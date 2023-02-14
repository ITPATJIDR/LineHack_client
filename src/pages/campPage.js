import React, {useEffect, useState} from 'react'
import Header from "../components/Header"
import Body from "../components/Body"
import { Mountain_gray, Mountain_white, Beach_grey, Beach_white, Forest_grey, Forest_white, Vector_down } from '../assets'
import axios from 'axios'
import HorizontalScroll from "react-horizontal-scrolling"

const category = [
	{
		icon_grey: Mountain_gray,
		icon_white: Mountain_white,
		categoryName : "Moun-tain"
	},
	{
		icon_grey: Beach_grey,
		icon_white: Beach_white,
		categoryName : "Beach"
	},
	{
		icon_grey: Forest_grey,
		icon_white: Forest_white,
		categoryName : "Forest"
	},
]

export default function CampPage() {

	const [allCamp, setAllCamp] = useState([])
	
	const getAllCamp = async () =>{
		const data = await axios.get("https://line-hack-server.vercel.app/camp/getAllCamp")
			.then(res => {
				setAllCamp(res.data.data)
			})
	} 

	useEffect(() =>{
		getAllCamp()
		console.log(process.env.SERVER_URL)
	},[])

	return (
		<div>
			<Header alignItems={"left"} />
			<Body alignItems={""} justifyContent={""}>
				<div style={{ width: '100%', padding: 20,overflow:"hidden" }}>
					<div>
						<div>
							<p style={{ fontSize: 20, fontWeight: 'bold' }}>Categories</p>
						</div>
						<div style={{ display: "flex", marginTop: 15 }}>
							{category.map((item, index) => {
								return (
									<div style={{ width: "100%" }}>
										<div style={{ display: "flex", borderWidth: 1, width: 110, borderRadius: 10, borderColor: "#C4C4C4", marginRight: 10, alignItems: 'center', }}>
											<img src={item.icon_grey} alt={item.name} style={{ width: 60, height: 60 }} />
											<p style={{ fontSize: 14, lineBreak: "anywhere", fontWeight: "bold", color: "#838383" }}>{item.categoryName}</p>
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
									<p style={{ fontWeight: "bold", fontSize: 16 }}>Recommendation</p>
								</div>
								<div>
									<p style={{ fontWeight: "bold", fontSize: 16, color: "#FDAF17" }}>see more</p>
								</div>
							</div>

							<div style={{marginTop:20,overflow:"scroll"}}>
								<div className="flex space-x-4 scrollbar-hide p-3 -ml-3 " style={{width:800}}>
									{allCamp.length > 0
										? allCamp.map((item, index) => {
											console.log(item)
											return (
												<div key={index} style={{ width: 300, height: 250, borderWidth: 1, borderRadius: 10, marginRight: 20, }}>
													<img src={item.campImage} alt={item.campName} style={{width:"100%",height:170,borderTopRightRadius:10,borderTopLeftRadius:10}}/>
													<div style={{padding:10}}>
														<p style={{fontWeight:'bold'}}>{item.campName}</p>
														<p style={{lineBreak:"anywhere"}}>{item.campDescription}</p>
													</div>
												</div>

											)
										})
								:null}
								</div>
							</div>
						</div>
					</div>
				</div>
			</Body>
		</div>
	)
}
