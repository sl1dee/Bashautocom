import { burgerIsOpenSelector } from '@store/selectors/modals.js'
import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { Routes } from 'react-router-dom'

import {useSelector} from "react-redux";
import footer from './Bars/footer2/footer2'
import header from './Bars/header2/header2'
import MakeRecord from './components/modals/sign-up-modal/sign-up-modal.jsx'
import {burgerIsOpenSelector} from "@store/selectors/modals.js";
import Sidebar from "@components/header/sidebar/sidebar.jsx";

export default function App() {

	return (
		<>
			<header />
			<main>
				<Routes>
					{/* <Route path="/"> */}
					{/*	<Route index element={<main-page />} /> */}
					{/* </Route> */}
					{/* <Route path="/stock"> */}
					{/*	<Route index element={<StockPage />} /> */}
					{/* </Route> */}
					{/* <Route path="/article"> */}
					{/*	<Route index element={<ArticlePage />} /> */}
					{/* </Route> */}
					{/* <Route path="/doctors"> */}
					{/*	<Route index element={<DoctorsPage />} /> */}
					{/* </Route> */}
					{/* <Route path="/contacts"> */}
					{/*	<Route index element={<ContactsPage />} /> */}
					{/* </Route> */}
				</Routes>
			</main>
			<footer />
			<MakeRecord />
		</>
	)
}
