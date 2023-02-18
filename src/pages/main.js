import React, {useState, useEffect} from 'react'
import liff from '@line/liff';
import WaitingLogin from './waitingLogin';
import CampPage from './campPage';
import {useSelector , useDispatch } from "react-redux"
import { setUserInfo, checkNewUser } from '../store/userInfoSlice';
import axios from 'axios';

export default function Main() {

  const [idToken, setIdToken] = useState("");

  const userInfo = useSelector((state) => state.userInfo)
  const dispatch = useDispatch()

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