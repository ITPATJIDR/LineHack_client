import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'
import WaitingLogin from './waitingLogin'
import {useSelector , useDispatch } from "react-redux"
import { selectUserInfo, setUserInfo } from '../store/userInfoSlice'
import { Banana } from "../assets"
import axios from 'axios'
import liff from '@line/liff';

export default function BananaPointPage() {

  const userInfo = useSelector(selectUserInfo)
  const dispatch = useDispatch()

  const [allShop, setAllShop] = useState([])

  const checkNewUser = async (profile) => {
    const payload = {
      userId: profile.userId,
      userImage: profile.pictureUrl,
      userName: profile.displayName
    }

    await axios.post("https://rich-ruby-pelican-sari.cyclic.app/user/register", payload, {
      withCredentials: true,
      headers: {
        "Access-Control-Allow-Origin": "https://rich-ruby-pelican-sari.cyclic.app",
      }
    }).then((res) => {
      dispatch(setUserInfo({
        data: res.data,
      }))
    })
  }

	const initLine = () => {
		liff.init({ liffId: '1657835103-oXvwMRa8', withLoginOnExternalBrowser: true }, () => {
			if (liff.isLoggedIn()) {
				runApp();
			} else {
				liff.login();
			}
		}, err => console.error(err));
	}

  const runApp = () => {
    const idToken = liff.getIDToken();
    liff.getProfile().then(profile => {
      checkNewUser(profile)
      setUserInfo(profile)
    }).catch(err => console.error(err));
  }

	const checkUserInfo = () => {
    console.log(Object.keys(userInfo.userInfo).length)
		if (Object.keys(userInfo.userInfo).length === 0) {
			initLine()
		}
	}

  const fetchAllShop = async () =>{
    const res = await axios.get("https://rich-ruby-pelican-sari.cyclic.app/shop/getAllShop") 
    setAllShop(res.data)
  }

  useEffect(() => {
    checkUserInfo()
    fetchAllShop()
  },[])
  
  console.log(allShop)

  return (
    <div style={{ backgroundColor: "#1CC09E", width: 390, height: 750 }}>
      {Object.keys(userInfo.userInfo).length > 0 
      ? 
      <>
      <Header alignItems={"left"} pageService={"Point"} pageMain={"Banana"} />
      <Body alignItems={""} justifyContent={""} display={""}>
        <div style={{ padding: 20, display: "flex" }}>
          <p style={{ fontSize: 34, fontWeight: "bold", color: "#1CC09E" }}>Your Point</p>
          <div style={{ padding: 10, width: 150, height: 50, borderRadius: 10, backgroundColor: "#1CC09E", marginLeft: 30, display: "flex", alignItems: "center", justifyContent: "space-between", }}>
            <p style={{ fontSize: 28, fontWeight: "bold", color: "white" }}>{userInfo.userInfo.data?.bananaPoint}</p>
            <img src={Banana} alt="Banana" style={{ width: 30, height: 30 }} />
          </div>
        </div>
        <div>
          <div style={{ paddingTop: 10, paddingLeft: 20 }}>
            <p style={{ fontSize: 20, fontWeight: "bold" }}>Banana Reward</p>
          </div>
          <div style={{padding:20,display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",overflow: "auto",height:300,marginTop:10}}>
									{allShop.data?.length > 0
										? allShop.data?.map((item, index) => {
											return (
												<div key={index} style={{ width: 130 , height: 220, borderWidth: 1, borderRadius: 10, marginBottom: 10,
												overflow:"hidden",textOverflow:"ellipsis" }} 
												onClick={() => console.log(item)}
												>
													<img src={item.itemImage} alt={item.itemName} style={{width:"100%",height:130,borderTopRightRadius:10,borderTopLeftRadius:10}}/>
													<div style={{padding:10}}>
														<p style={{fontWeight:'bold'}}>{item.itemName}</p>
														<p style={{lineBreak:"anywhere"}}>{item.itemDescription}</p>
													</div>
												</div>
											)
										})
										: <div>
											<p>Please Booking First</p>
										</div>
										}
          </div>
        </div>
      </Body>
      <Footer />
      </>
      : <WaitingLogin/>
      }
    </div>
  )
}