import React, {useEffect, useState} from 'react'
import QRCode from 'qrcode.react'
import { useLocation, useNavigate } from "react-router-dom"
import {useSelector , useDispatch } from "react-redux"
import { setUserInfo, selectUserInfo } from '../store/userInfoSlice';
const generatePayload = require('promptpay-qr');

export default function PaymentPage() {

  const [ phoneNumber, setPhoneNumber ] = useState("0993848633");
  const [ qrCode ,setqrCode ] = useState("sample");

  const location = useLocation()
  const navigate = useNavigate()
  const userInfo = useSelector(selectUserInfo)
  const DateNow = new Date()
  const futureDate = new Date(DateNow.setDate(DateNow.getDate() + 5)) 

  console.log("userInfo", userInfo)
  console.log("Date", futureDate)

  const {
			electricity, bookingPrice, phoneSignal, rentalEquipment,
			suitBestFor, toilet, wifi, campImage, campName, id,camp
  } = location.state

  function handleQR() {
    setqrCode(generatePayload(phoneNumber, { bookingPrice }));
  }

  const handlePaymentSuccess = () =>{
    navigate("/paymentSuccess",{
      state:{
			electricity, bookingPrice, phoneSignal, rentalEquipment,
			suitBestFor, toilet, wifi, campImage, campName, id
      }
    }) 
  }

  useEffect(() => {
    handleQR()
  },[])

  return(
    <div style={{ backgroundColor: "#1CC09E", width: 390, height: 750}}>
      <div style={{display: "flex", justifyContent:"center",fontSize:50,fontWeight:'bold',color:'#FFFFFF',height:150,alignItems:'center'}}>
        <p>Payment</p>
      </div>
      <div style={{display: "flex", justifyContent:"center",height:300,alignItems:'center',zIndex:1}}>
        <div style={{width:250,height:300,display: "flex",justifyContent:"center",marginTop:50,background:"white",flexDirection:"column",justifyContent:"center",borderRadius:10,alignItems:"center",padding:10}}>
          <QRCode value={qrCode} />
          <div style={{margin:20,fontSize:20,fontWeight:"bold",color:"#1CC09E"}}>
            <p>Accept Payment</p>
          </div>
          <div style={{width:210,height:100,background:"#1CC09E",borderRadius:10,padding:10,color:"white"}}>
            <p>Accept Payment</p>
          </div>
        </div>
      </div>
      <div style={{display: "flex",justifyContent: "center"}}>
        <div onClick={() => handlePaymentSuccess()} style={{position:"absolute",bottom:190,display: "flex",justifyContent:"center",width:100,height:50,alignItems: "center",borderRadius:10,fontWeight:"bold",background:"white"}}>
          Done
        </div>
      </div>
    </div>
   );
}
