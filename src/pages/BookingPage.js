import React from 'react'
import Header from "../components/Header"
import Body from "../components/Body"
import Footer from '../components/Footer'

export default function BookingPage() {
  return (
    <div style={{ backgroundColor: "#1CC09E", width: 390, height: 750 }}>
	<Header alignItems={"left"} pageService={"Camp"} pageMain={"Monkey"} />
	<Body alignItems={""} justifyContent={""} display={"flex"} pageService={"Camp"} >

	</Body>
	<Footer />
    </div>
  )
}
