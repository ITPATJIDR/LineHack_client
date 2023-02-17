import React from 'react'

export default function Body({children,alignItems,justifyContent,seeMore,page,pageService, display}) {
	return (
		<div style={{ backgroundColor: "#F6F8FA", width: '100%', 
		height: seeMore === true && page === pageService ? 700 : 550 
		, display: display, borderTopRightRadius: 20, borderTopLeftRadius: 20, alignItems: alignItems, justifyContent: justifyContent }}>
			{children}
		</div>
	)
}
