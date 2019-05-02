import React, {useEffect} from 'react'
import { Link } from "react-router-dom";

export default function Page1B() {
	useEffect(() => {
		window.ga('set', 'page', document.location.pathname + document.location.search);	
	}, [])
	return (
		<div>
		<h1>PAGE 1 B</h1>
		<Link to='/page2'>next...</Link>
		</div>
	)
}
