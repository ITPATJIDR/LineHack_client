import React, {useEffect, useState} from 'react'
import QRCode from 'qrcode.react'
import { useLocation, useNavigate } from "react-router-dom"
import {useSelector , useDispatch } from "react-redux"
import { setUserInfo, selectUserInfo } from '../store/userInfoSlice';
import ReactLoading from 'react-loading';
import axios from "axios"
const generatePayload = require('promptpay-qr');


export default function PaymentPage() {


  const [ phoneNumbers, setPhoneNumber ] = useState("0993848633");
  const [ bookingDetail, setBookingDetail ] = useState("");
  const [ qrCode ,setqrCode ] = useState("sample");
  const location = useLocation()
  const navigate = useNavigate()
  const userInfo = useSelector(selectUserInfo)

  const {
          electricity, result, phoneSignal, rentalEquipment,
          suitBestFor, toilet, wifi, campImage, campName, id, camp,
          name, phoneNumber, age, birthDate, email, address, startDate,endDate
  } = location.state


  function handleQR() {
    setqrCode(generatePayload(phoneNumbers, { result }));
  }

  const handleBooking = async () => {
    const res = await axios.post("https://rich-ruby-pelican-sari.cyclic.app/camp/booking", {
      "userId": userInfo.userInfo.data.id,
      "campId": id,
      "campAmount": camp,
      "startDate": startDate,
      "endDate": endDate, 
      "phoneNumber": phoneNumber,
      "name": name,
      "age": age,
      "birthDate": birthDate,
      "email": email,
      "address": address
    })
    setBookingDetail(res.data)
  }

  const handleUpdateBananaPoint = async () =>{
    const res = await axios.post("https://rich-ruby-pelican-sari.cyclic.app/user/updateBananaPoint",{
      "id" : userInfo.userInfo.data.id,
      "bananaPoint": String(Number(userInfo.userInfo.data.bananaPoint) + 5)
    })

  }

  const handlePaymentSuccess = () =>{
    navigate("/paymentSuccess",{
      state:{
			electricity, result, phoneSignal, rentalEquipment,
			suitBestFor, toilet, wifi, campImage, campName, id, bookingDetail,userInfo
      }
    }) 
  }


  useEffect(() => {
    handleQR()
    handleBooking()
    handleUpdateBananaPoint()
  },[])

  return(
    <div style={{ backgroundColor: "#244a71", width: 390, height: 750}}>
      <div style={{display: "flex", justifyContent:"center",fontSize:50,fontWeight:'bold',color:'#FFFFFF',height:150,alignItems:'center'}}>
        <p>Payment</p>
      </div>
      <div style={{display: "flex", justifyContent:"center",height:300,alignItems:'center',zIndex:1}}>
        <div style={{width:250,height:400,display: "flex",justifyContent:"center",marginTop:50,background:"white",flexDirection:"column",justifyContent:"center",borderRadius:10,alignItems:"center",padding:10}}>
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
        {Object.keys(bookingDetail).length > 0 
        ?
        <div onClick={() => handlePaymentSuccess()} style={{position:"absolute",bottom:100,display: "flex",justifyContent:"center",width:100,height:50,alignItems: "center",borderRadius:10,fontWeight:"bold",background:"white"}}>
          Done
        </div>
        :
        <div style={{position:"absolute",bottom:100,display: "flex",justifyContent:"center",width:100,height:50,alignItems: "center",borderRadius:10,fontWeight:"bold",background:"white"}}>
            <ReactLoading type={"spin"} color={"#fffff"} height={'20%'} width={'20%'} />
        </div>
        }
      </div>
    </div>
   );
}
