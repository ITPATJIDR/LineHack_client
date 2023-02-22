import React, {useEffect, useState} from 'react'
import { useLocation, useNavigate } from "react-router-dom"

export default function PaymentPage() {
  const location = useLocation()
  const navigate = useNavigate()

  const {campImage, campName} = location.state
  console.log(location.state)

  const handleDone = () =>{
    navigate("/")
  }

  return(
    <div style={{ backgroundColor: "#1CC09E", width: 390, height: 750}}>
      <div style={{display: "flex", justifyContent:"center",fontSize:50,fontWeight:'bold',color:'#FFFFFF',height:150,alignItems:'center'}}>
        <p>Payment</p>
      </div>
      <div style={{display: "flex", justifyContent:"center",height:300,alignItems:'center',zIndex:1}}>
        <div style={{width:250,height:300,display: "flex",justifyContent:"center",marginTop:50,background:"white",flexDirection:"column",justifyContent:"center",borderRadius:10,alignItems:"center",padding:10}}>
            <div>
              Payment Completed
            </div>
            <div>
              <img src={campImage} alt={campName} style={{width:100,height:100}}/>
            </div>
        </div>
      </div>
      <div onClick={() => handleDone()} style={{display: "flex",justifyContent: "center"}}>
        <div style={{position:"absolute",bottom:190,display: "flex",justifyContent:"center",width:100,height:50,alignItems: "center",borderRadius:10,fontWeight:"bold",background:"white"}}>
          Done
        </div>
      </div>
    </div>
   );
}
