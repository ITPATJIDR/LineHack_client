import React from 'react'

export default function Header({alignItems}) {
  return (
	<div style={{fontWeight:"bold",color: 'white',display:"flex",flexDirection:"column",justifyContent: 'center',width: '100%',alignItems: alignItems,height:200,fontSize:50,padding:10}}>
		<div>
			<p>Monkey</p>
		</div>
		<div>
			<p>Camp</p>
		</div>
	</div>
  )
}
