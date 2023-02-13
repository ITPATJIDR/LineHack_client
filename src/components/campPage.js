import React, {useState, useEffect} from 'react'
import liff from '@line/liff';
import WaitingLogin from './waitingLogin';

export default function CampPage() {

  const [pictureUrl, setPictureUrl] = useState("");
  const [idToken, setIdToken] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [userId, setUserId] = useState("");

  const logout = () => {
    liff.logout();
    window.location.reload();
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
      setDisplayName(profile.displayName);
      setPictureUrl(profile.pictureUrl);
      setStatusMessage(profile.statusMessage);
      setUserId(profile.userId);
    }).catch(err => console.error(err));
  }

  // useEffect(() =>{
  //   initLine()
  // },[])

  return (
    <div style={{backgroundColor:"#1CC09E",height:"1200px"}}>
      {false 
      ?<div>
        <p>Login successfully</p>
      </div>
      :<WaitingLogin/> 
      }
    </div>
  )
}