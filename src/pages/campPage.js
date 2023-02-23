import React, {useEffect, useState} from 'react'
import Header from "../components/Header"
import Body from "../components/Body"
import Footer from '../components/Footer'
import { Mountain_gray, Mountain_white, Beach_grey, Beach_white, Forest_grey, Forest_white, Vector_down } from '../assets'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const categorys = [
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
	const [seeMore, setSeemore] = useState(false)
	const [page, setPage] = useState("")
	const [category, setCategory] = useState("")

	const navigate = useNavigate()

	const handleSeeMore = (page) =>{
		setSeemore(true)
		setPage(page)
	}
	
	const getAllCamp = async () =>{
		const data = await axios.get("https://rich-ruby-pelican-sari.cyclic.app//camp/getAllCamp")
			.then(res => {
				setAllCamp(res.data.data)
			})
	} 
	
	const handleClick = async (item) =>{
		navigate("/selectCamp",{
			state: {
				item: item
			}
		})
	}

	const checkFetchCamp = async () =>{
		if (allCamp.length === 0){
			getAllCamp()
		}
	}

	useEffect(() =>{
		checkFetchCamp()
	},[])

	return (
		<div>
			<Header alignItems={"left"} seeMore={seeMore} page={page} pageService={"Camp"} pageMain={"Monkey"}/>
			<Body alignItems={""} justifyContent={""} seeMore={seeMore} page={page} display={"flex"} pageService={"Camp"} >
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
									<p style={{ fontWeight: "bold", fontSize: 16 }}>Recommendation</p>
								</div>
								<div onClick={() => handleSeeMore("Camp")}>
									<p style={{ fontWeight: "bold", fontSize: 16, color: "#FDAF17" }}>see more</p>
								</div>
							</div>

							<div style={{marginTop:20,overflow:"scroll"}}>
								<div className="flex " style={{
									width:seeMore === true && page === "Camp" ? null : 1100,
									height:seeMore === true && page === "Camp" ? 390 : null,
									overflow: 'auto',
									flexWrap:seeMore === true && page === "Camp" ? "wrap" : null,
									justifyContent: seeMore === true && page === "Camp" ? "center" : null,
									}}>
									{allCamp.length > 0
										? allCamp.map((item, index) => {
											console.log(item)
											return (
												<div key={index} style={{ width: seeMore === true && page === "Camp" ? 130 : 400
												, height: 220, borderWidth: 1, borderRadius: 10, marginRight: 20,
												marginBottom: seeMore === true && page === "Camp" ? 10 :0,
												overflow:"hidden",textOverflow:"ellipsis"}} 
												onClick={() => handleClick(item)}
												>
													<img src={item.campImage} alt={item.campName} style={{width:"100%",height:130,borderTopRightRadius:10,borderTopLeftRadius:10}}/>
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
			<Footer/>
		</div>
	)
}
