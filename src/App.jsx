import React from 'react'
import { Routes } from 'react-router-dom'

import footer from './Bars/footer/footer'
import header from './Bars/header/header'
import MakeRecord from './components/modals/sign-up-modal/sign-up-modal.jsx'

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
