import React, {useState, useEffect} from 'react'
import liff from '@line/liff';
import WaitingLogin from './waitingLogin';
import CampPage from './campPage';
import {useSelector , useDispatch } from "react-redux"
import { setUserInfo } from '../store/userInfoSlice';

export default function Main() {

  const [pictureUrl, setPictureUrl] = useState("");
  const [idToken, setIdToken] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [userId, setUserId] = useState("");

  const userInfo = useSelector((state) => state.userInfo.value)
  const dispatch = useDispatch()

  // const logout = () => {
  //   liff.logout();
  //   window.location.reload();
  // }

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
      setUserInfo(profile)
    }).catch(err => console.error(err));
  }

  useEffect(() =>{
    initLine()
  },[])

  return (
    <div style={{backgroundColor:"#1CC09E",width:390,height:800}}>
      {true
      ?<CampPage/>
      :<WaitingLogin/> 
      }
    </div>
  )
}