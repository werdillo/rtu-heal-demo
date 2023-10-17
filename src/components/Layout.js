
import React  from 'react';
import { Outlet } from "react-router-dom";
import '../App.css';
import '../assets/scss/_layout.scss';
// import Navbar from "./Navbar"
// import Footer from "./Footer"

export default function Layout() {
	return (
		<div id="container">
			<header id="header-content"> 
				<div className='navbar'></div>
			</header> 
			<main id="main-content">
				<Outlet />
			</main>
			<footer className='footer'>
				{/* <Footer />	 */}
			</footer>
		</div>
	)
}