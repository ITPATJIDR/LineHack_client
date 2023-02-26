import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Footer() {

	const navigate = useNavigate()
	const [checkOpen, setCheckOpen ] = useState("")
	const handleRedirect = (path) =>{
		navigate(path)
	}

  return (
    <div style={{width:"100%",height:60,position:"absolute",bottom:0,padding:5,display:"flex",justifyContent:"center",borderTopWidth:1,bottom:10,background:"#000000"}}> 
		  <div onClick={() => (handleRedirect("/"), setCheckOpen("Camp")) } style={{ width: "30%", marginRight: 10, height: 40, display: "flex", justifyContent: "center", alignContent: "center", marginTop: 5, display: "flex", alignItems: "center", 
		  backgroundColor: checkOpen === "Camp" ? "#FDAF17" : "#DFDFDF", 
		  borderRadius: 5, color: "white" }}>
		Camp
	</div>
	<div onClick={() => (handleRedirect("/bananaPoint"),setCheckOpen("Point"))} style={{ width: "30%",marginRight:10, height: 40, display: "flex", justifyContent: "center", alignContent: "center",marginTop:5,display:"flex",alignItems:"center",backgroundColor:checkOpen === "Point" ? "#FDAF17" : "#DFDFDF",borderRadius:5,color:"white"}}>
		Point
	</div>
		  <div onClick={() => ( handleRedirect("/booking"), setCheckOpen("Booking") )} style={{ width: "30%", marginRight: 10, height: 40, display: "flex", justifyContent: "center", alignContent: "center", marginTop: 5, display: "flex", alignItems: "center", backgroundColor: checkOpen === "Booking" ? "#FDAF17" : "#DFDFDF" , borderRadius: 5, color: "white" }}>
		Booking	
	</div>
	<div onClick={() => (handleRedirect("/service"),setCheckOpen("Service"))} style={{ width: "30%", height: 40, display: "flex", justifyContent: "center", alignContent: "center",marginTop:5,display:"flex",alignItems:"center",backgroundColor:checkOpen === "Service" ? "#FDAF17" : "#DFDFDF",borderRadius:5,color:"white"}}>
		Service
	</div>
    </div>
  )
}
