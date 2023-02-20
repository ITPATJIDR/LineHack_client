import React from 'react'
import Header from "../components/Header"
import Body from "../components/Body"
import { useLocation, useNavigate } from "react-router-dom"

export default function CampLoctionPage() {

	const location = useLocation()
	const navigate = useNavigate()
	console.log(location.state)

	const handlePayment = async () =>{
		navigate("/payment")
	}

	return (
		<div style={{backgroundColor:"#1CBF9B"}}>
			<Header alignItems={""} pageService={"Location"} pageMain={"Camp"}/>
			<Body alignItems={""} justifyContent={""} display={""}>
				<div>
					<div>
						สิ่งอำนวนความสะดวก
					</div>
					<div>
						<input type="checkbox"/>
						<p>อุปกรณ์ให้เช่า</p>
					</div>
					<div>
						<input type="checkbox"/>
						<p>Wifi</p>
					</div>
					<div>
						<input type="checkbox"/>
						<p>สัญญาญโทรศัพท์</p>
					</div>
					<div>
						<input type="checkbox"/>
						<p>ไฟฟ้า</p>
					</div>
					<div>
						<input type="checkbox"/>
						<p>เหมาะสำหรับ</p>
					</div>
					<div>
						<input type="checkbox"/>
						<p>ห้องน้ำ</p>
					</div>
					<div>
						<input type="checkbox"/>
						<p>อุปกรณ์ให้เช่า</p>
					</div>
				</div>	
			</Body>
		</div>
	)
}
