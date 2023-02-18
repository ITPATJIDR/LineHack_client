import React, {useState, useEffect} from 'react'
import liff from '@line/liff';
import WaitingLogin from './waitingLogin';
import CampPage from './campPage';
import {useSelector , useDispatch } from "react-redux"
import { setUserInfo } from '../store/userInfoSlice';
import axios from 'axios';

export default function Main() {

  const userInfo = useSelector((state) => state.userInfo)
  const dispatch = useDispatch()
  console.log("userInfo", userInfo)

  const checkNewUser = async (profile) => {
    const payload = {
      userId: profile.userId,
      userImage: profile.pictureUrl,
      userName: profile.displayName
    }

    await axios.post("https://rich-ruby-pelican-sari.cyclic.app/user/register",payload,{
      withCredentials: true,
      headers: {
        "Access-Control-Allow-Origin": "https://rich-ruby-pelican-sari.cyclic.app",
      }
    }).then((res) =>{
      console.log("res", res)
      dispatch( setUserInfo(res))
    })

  }

  const initLine = () => {
    liff.init({ liffId: '1657835103-oXvwMRa8',withLoginOnExternalBrowser:true }, () => {
      if (liff.isLoggedIn()) {
        runApp();
      } else {
        liff.login();
      }
    }, err => console.error(err));
  }

  const runApp = () => {
    const idToken = liff.getIDToken();
    setIdToken(idToken);
    liff.getProfile().then(profile => {
      checkNewUser(profile)
      setUserInfo(profile)
    }).catch(err => console.error(err));
  }

  useEffect(() =>{
    initLine()
  },[])

  return (
    <div style={{backgroundColor:"#1CC09E",width:390,height:750}}>
      {liff.isLoggedIn
      ?<CampPage/>
      :<WaitingLogin/> 
      }
    </div>
  )
}