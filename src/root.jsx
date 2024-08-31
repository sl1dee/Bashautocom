import React from "react";

import '@assets/styles/style.scss'

import Footer from "@components/footer/footer.jsx";
import Header from "@components/header/header.jsx";
import AppRoutes from './appRoutes.jsx'
import Navbar from "@components/navbar/navbar.jsx";

const Root = () => {
	return (
		<>
			<Header/>
				<AppRoutes />
			<Footer/>
			<Navbar/>
		</>
	)
}

export default Root
