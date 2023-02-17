import React from 'react'

export default function Header({alignItems,seeMore,page,pageService,pageMain}) {
	console.log(seeMore, page, pageService)
	return (
		<div style={{ fontWeight: "bold", color: 'white', display: "flex", 
		flexDirection: seeMore === true && page === pageService ? "row" : "column", justifyContent: 'center', width: '100%', alignItems: alignItems, 
		height: seeMore === true && page === pageService ? 50 : 200
		, fontSize: seeMore === true && page === pageService ? 23 : 50
		, padding: 10 }}>
			<div>
				<p>{pageMain}</p>
			</div>
			<div>
				<p>{pageService}</p>
			</div>
		</div>
	)
}
