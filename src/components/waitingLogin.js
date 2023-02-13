import React from 'react'
import ReactLoading from 'react-loading';

export default function waitingLogin() {
  return (
    <div >
	<div style={{fontWeight:"bold",color: 'white',display:"flex",flexDirection:"column",justifyContent: 'center',width: '100%',alignItems: 'center',height:200,fontSize:50}}>
		<div>
			<p>Monkey</p>
		</div>
		<div>
			<p>Camp</p>
		</div>
	</div>
	<div style={{backgroundColor:"#F6F8FA",width: '100%',height:700,display: 'flex',borderTopRightRadius:20,borderTopLeftRadius:20,alignItems: 'center',justifyContent: 'center'}}>
		<div style={{marginBottom:300, width:300,display: 'flex',alignItems:"center",flexDirection: 'column'}}>
			<div style={{marginBottom:30}}>
				<p style={{fontSize:30,fontWeight:"bold" }}>Line Web Login</p>
			</div>
			<div className="flex" style={{flexDirection: 'column',alignItems: 'center'}}>
				<ReactLoading type={"spin"} color={"#fffff"} height={'20%'} width={'20%'} />
				<p style={{marginTop:30,fontSize:16,fontWeight:"bold"}}>Waiting Line Login automatically</p>
			</div>
		</div>
	</div>
    </div>
  )
}
