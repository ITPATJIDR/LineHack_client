import React from 'react'
import ReactLoading from 'react-loading';
import Header from '../components/Header'
import Body from "../components/Body"

export default function waitingLogin() {
  return (
    <div >
	<Header alignItems={"center"}/>
	<Body>
		<div style={{ marginBottom: 300, width: 300, display: 'flex', alignItems: "center", flexDirection: 'column' }}>
			<div style={{ marginBottom: 30 }}>
				<p style={{ fontSize: 30, fontWeight: "bold" }}>Line Web Login</p>
			</div>
			<div className="flex" style={{ flexDirection: 'column', alignItems: 'center' }}>
				<ReactLoading type={"spin"} color={"#fffff"} height={'20%'} width={'20%'} />
				<p style={{ marginTop: 30, fontSize: 16, fontWeight: "bold" }}>Waiting Line Login automatically</p>
			</div>
		</div>
	</Body>
    </div>
  )
}
