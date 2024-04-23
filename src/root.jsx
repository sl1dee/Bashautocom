import React from "react";

import '@assets/styles/style.scss'

import Footer from "@components/footer/footer.jsx";
import Header from "@components/header/header.jsx";
import AppRoutes from './appRoutes.jsx'

const Root = () => {
	return (
		<>
			<Header/>
				<AppRoutes />
			<Footer/>
		</>
	)
}

export default Root
