import React, {useEffect, useState} from 'react'
import QRCode from 'qrcode.react'
import { useLocation, useNavigate } from "react-router-dom"
import {useSelector , useDispatch } from "react-redux"
import { setUserInfo, selectUserInfo } from '../store/userInfoSlice';
import axios from "axios"
const generatePayload = require('promptpay-qr');


export default function PaymentPage() {

  const [ phoneNumbers, setPhoneNumber ] = useState("0993848633");
  const [ bookingDetail, setBookingDetail ] = useState("");
  const [ qrCode ,setqrCode ] = useState("sample");
  const location = useLocation()
  const navigate = useNavigate()
  const userInfo = useSelector(selectUserInfo)
  const Dates = new Date(startDate)
  const futureDate = new Date(Dates.setDate(Dates.getDate() + 5))

  const {
			electricity, bookingPrice, phoneSignal, rentalEquipment,
			suitBestFor, toilet, wifi, campImage, campName, id,camp,
			name, phoneNumber, age, birthDate, email, address,startDate
  } = location.state

  function handleQR() {
    setqrCode(generatePayload(phoneNumbers, { bookingPrice }));
  }

  const handleBooking = async () => {
    console.log(electricity, bookingPrice, phoneSignal, rentalEquipment,
			suitBestFor, toilet, wifi, campImage, campName, id,camp,
			name, phoneNumber, age, birthDate, email, address,startDate)
    const res = await axios.post("https://rich-ruby-pelican-sari.cyclic.app/camp/booking", {
      "userId": userInfo.userInfo.data.id,
      "campId": id,
      "campAmount": camp,
      "startDate": startDate,
      "endDate": futureDate,
      "phoneNumber": phoneNumber,
      "name": name,
      "age": age,
      "birthDate": birthDate,
      "email": email,
      "address": address
    })
    setBookingDetail(res.data)
  }

  const handlePaymentSuccess = () =>{
    navigate("/paymentSuccess",{
      state:{
			electricity, bookingPrice, phoneSignal, rentalEquipment,
			suitBestFor, toilet, wifi, campImage, campName, id, bookingDetail,userInfo
      }
    }) 
  }


  useEffect(() => {
    handleQR()
    handleBooking()
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
            <p style={{fontWeight:"bold"}}>โปรดแสกนจ่าย</p>
            <p style={{fontWeight:"normal"}}>โดยใช้แอพพลิเคชั่นธนาคาร ได้ทุกธนาคาร</p>
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
