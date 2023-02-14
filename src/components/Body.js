import React from 'react'

export default function Body({children,alignItems,justifyContent}) {
  return (
	<div style={{backgroundColor:"#F6F8FA",width: '100%',height:600,display: 'flex',borderTopRightRadius:20,borderTopLeftRadius:20,alignItems:alignItems,justifyContent:justifyContent}}>
		{children}
	</div>
  )
}
