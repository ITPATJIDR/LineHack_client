import React, {useEffect, useState} from 'react'
import QRCode from 'qrcode.react'
const generatePayload = require('promptpay-qr');

export default function PaymentPage() {
  const [ phoneNumber, setPhoneNumber ] = useState("0993848633");
  const [ amount, setAmount ] = useState(1.00);         
  const [ qrCode ,setqrCode ] = useState("sample");

  function handlePhoneNumber(e) {
    setPhoneNumber(e.target.value);
  }

  function handleAmount(e) {
    setAmount(parseFloat(e.target.value));
  }

  function handleQR() {
    setqrCode(generatePayload(phoneNumber, { amount }));
  }

  useEffect(() => {
    handleQR()
  },[])

  return(
    <div style={{ backgroundColor: "#1CC09E", width: 390, height: 750 }}>
      <div style={{display: "flex", justifyContent:"center",fontSize:50,fontWeight:'bold',color:'#FFFFFF',height:150,alignItems:'center'}}>
        <p>Payment</p>
      </div>
      <div style={{display: "flex", justifyContent:"center",height:300,alignItems:'center'}}>
        <QRCode value={qrCode} />
      </div>
      <div>
        <div>
          Done
        </div>
      </div>
    </div>
   );
}
