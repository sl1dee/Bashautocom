import { burgerIsOpenSelector } from '@store/selectors/modals.js'
import React, {useState} from 'react'
import { useSelector } from 'react-redux'
// import { Routes } from 'react-router-dom'

import Sidebar from "@components/header/sidebar/sidebar.jsx";
import Footer from "@components/footer/footer.jsx";
import Header from "@components/header/header.jsx";
import Routes from './routes.jsx'

export default function App() {

	return (
		<>
			<Header/>
				<Routes/>
			<Footer/>
			{/*<MakeRecord />*/}
		</>
	)
}
