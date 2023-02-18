import React from 'react'
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'
import {useSelector , useDispatch } from "react-redux"
import { setUserInfo } from '../store/userInfoSlice';
import { Banana } from "../assets"
import axios from 'axios'

export default function BananaPointPage() {

  const userInfo = useSelector((state) => state.userInfo.value)
  console.log(userInfo)

  return (
    <div style={{ backgroundColor: "#1CC09E", width: 390, height: 750 }}>
      <Header alignItems={"left"} pageService={"Point"} pageMain={"Banana"}/>
      <Body alignItems={""} justifyContent={""} display={""}>
        <div style={{ padding: 20, display: "flex" }}>
          <p style={{ fontSize: 34, fontWeight: "bold", color: "#1CC09E" }}>Your Point</p>
          <div style={{ padding: 10, width: 150, height: 50, borderRadius: 10, backgroundColor: "#1CC09E", marginLeft: 30, display: "flex", alignItems: "center", justifyContent: "space-between", }}>
            <p style={{ fontSize: 28, fontWeight: "bold", color: "white" }}>10000</p>
            <img src={Banana} alt="Banana" style={{ width: 30, height: 30 }} />
          </div>
        </div>
        <div>
          <div style={{paddingTop:10,paddingLeft:20}}>
            <p style={{fontSize:20,fontWeight:"bold"}}>Banana Reward</p>
          </div>
        </div>
      </Body>
      <Footer/>
    </div>
  )
}