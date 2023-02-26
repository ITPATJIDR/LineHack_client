import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Footer() {

	const navigate = useNavigate()
	const handleRedirect = (path,Name) =>{
		navigate(path)
	}

  return (
    <div style={{width:"100%",height:60,position:"absolute",bottom:0,padding:5,display:"flex",justifyContent:"center",borderTopWidth:1,bottom:10,background:"#000000"}}> 
		  <div onClick={() => handleRedirect("/", "Camp")} style={{
			  width: "30%", marginRight: 10, height: 40, display: "flex", justifyContent: "center", alignContent: "center", marginTop: 5, display: "flex", alignItems: "center",
			  backgroundColor: "#FDAF17", borderRadius: 5, color: "black"
		  }}>
			  Camp
		  </div>
	<div onClick={() => handleRedirect("/bananaPoint","Point")} style={{ width: "30%",marginRight:10, height: 40, display: "flex", justifyContent: "center", alignContent: "center",marginTop:5,display:"flex",alignItems:"center",backgroundColor:"#FDAF17",borderRadius:5,color:"black"}}>
		Point
	</div>
		  <div onClick={() =>  handleRedirect("/booking","Booking")} style={{ width: "30%", marginRight: 10, height: 40, display: "flex", justifyContent: "center", alignContent: "center", marginTop: 5, display: "flex", alignItems: "center", backgroundColor: "#FDAF17" , borderRadius: 5, color: "black" }}>
		Booking	
	</div>
	<div onClick={() => handleRedirect("/service","Service")} style={{ width: "30%", height: 40, display: "flex", justifyContent: "center", alignContent: "center",marginTop:5,display:"flex",alignItems:"center",backgroundColor:"#FDAF17",borderRadius:5,color:"black"}}>
		Service
	</div>
    </div>
  )
}
