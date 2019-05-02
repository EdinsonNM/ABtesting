import React, {useEffect} from 'react'

export default function Page3() {
	useEffect(() => {
		window.ga('set', 'page', document.location.pathname + document.location.search);
	}, [])
	return (
		<div>
			<h1>PAGE 3</h1>
		</div>
	)
}
