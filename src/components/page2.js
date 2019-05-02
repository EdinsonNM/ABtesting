import React, {useEffect} from 'react'
import { Link } from "react-router-dom";

export default function Page2() {
	var params = new URLSearchParams(document.location.search);
	console.log(params.get('id'))
	useEffect(() => {
		window.ga('set', 'page', document.location.pathname + document.location.search);	
	}, [])
	return (
		<div>
			<h1>PAGE 2</h1>
			<Link to='/page3'>next A...</Link><br/>
		</div>
	)
}
