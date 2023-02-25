import React, {useState, useEffect} from 'react'
import Header from "../components/Header"
import Body from "../components/Body"
import Footer from '../components/Footer'
import axios from 'axios'
import {useSelector , useDispatch } from "react-redux"
import { setUserInfo } from '../store/userInfoSlice';
import liff from '@line/liff';
import WaitingLogin from './waitingLogin';

export default function BookingPage() {

	const [idToken, setIdToken] = useState("");
	const [booking, setBooking] = useState([]);

	const userInfo = useSelector((state) => state.userInfo)
	const dispatch = useDispatch()

	const checkBooking = async (data) => {
		const res = await axios.post("https://rich-ruby-pelican-sari.cyclic.app/camp/checkBooking2", {
			userId: data.userId
		})
		setBooking(res.data)
	}

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
			checkBooking(res.data)
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
		setIdToken(idToken);
		liff.getProfile().then(profile => {
			checkNewUser(profile)
			setUserInfo(profile)
		}).catch(err => console.error(err));
	}

	useEffect(() => {
		initLine()
	}, [])

	useEffect(() => {
		console.log(booking)
	}, [booking])


	return (
		<>
			{Object.keys(userInfo.userInfo).length > 0
				? <div style={{ backgroundColor: "#1CC09E", width: 390, height: 750 }}>
					<Header alignItems={"left"} pageService={"Booking"} pageMain={"Monkey"} />
					<Body alignItems={""} justifyContent={""} display={"flex"} pageService={"Camp"} >
						<div>
							<div style={{padding:20}}>
								<p>Booking</p>
							</div>	
							{booking.data 
							? <div style={{padding:20,width:380}}>
								<div style={{borderRadius:10,overflow:"hidden",borderWidth:"thin" }}>
									<div>
										<div style={{ width:350,height: 100 }}>
											<img src={booking.data?.Booking.Camp.campImage} alt="เเคมป์จ้า"  />
										</div>
										<div style={{padding:20}}>
											<p>{booking.data?.Booking.Camp.campName}</p>
											<p>วันที่ไป: {booking.data?.Booking.startDate}</p>
											<p>วันที่ออก: {booking.data?.Booking.endDate}</p>
											<p>ชื่อผู้จอง: {booking.data?.Booking.name}</p> 
										</div>
									</div>
								</div>	
							</div>
							: null }
						</div>
					</Body>
					<Footer />
				</div>
				: <WaitingLogin />
			}
		</>
	)
}
