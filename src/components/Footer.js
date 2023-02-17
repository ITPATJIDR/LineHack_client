import React from 'react'

export default function Footer() {

	const handleRedirect = (path) =>{
		window.location.replace(path)
	}

  return (
    <div style={{width:"100%",height:50,position:"absolute",bottom:0,padding:5,display:"flex",justifyContent:"center",borderTopWidth:1,bottom:10}}> 
	<div onClick={() => handleRedirect("/")} style={{ width: "30%",marginRight:10, height: 40, display: "flex", justifyContent: "center", alignContent: "center",marginTop:5,display:"flex",alignItems:"center",backgroundColor:"#1CC09E",borderRadius:5,color:"white"}}>
		Camp
	</div>
	<div onClick={() => handleRedirect("/bananaPoint")} style={{ width: "30%",marginRight:10, height: 40, display: "flex", justifyContent: "center", alignContent: "center",marginTop:5,display:"flex",alignItems:"center",backgroundColor:"#1CC09E",borderRadius:5,color:"white"}}>
		Point
	</div>
	<div onClick={() => handleRedirect("/service")} style={{ width: "30%", height: 40, display: "flex", justifyContent: "center", alignContent: "center",marginTop:5,display:"flex",alignItems:"center",backgroundColor:"#1CC09E",borderRadius:5,color:"white"}}>
		Service
	</div>
    </div>
  )
}
