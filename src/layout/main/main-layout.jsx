import useScrollTop from '@hooks/use-scroll-top.js'
import { burgerIsOpenSelector, signUpIsOpenSelector } from '@store/selectors/modals.js'
import React, { Suspense, memo } from 'react'
import { useSelector } from 'react-redux'

import Sidebar from '@components/header/sidebar/sidebar.jsx'
import Navbar from '@components/navbar/navbar.jsx'

import Footer from '../../components/footer/index.js'
import Header from '../../components/header/index.js'

const MainLayout = ({ children }) => {
	// const signUpIsOpen = useSelector(signUpIsOpenSelector)
	const burgerIsOpen = useSelector(burgerIsOpenSelector)

	useScrollTop()
	return (
		<>
			<Header />
			<Suspense>{children}</Suspense>
			<Footer />
			{/* <Cookie /> */}
			{burgerIsOpen && <Sidebar />}
			<Navbar />
			{/* !!!!!!! <Sidebar /> нужно сделать сайдбар всегда вмонитрованным */}
			{/* {signUpIsOpen && <SignUpModal />} */}
		</>
	)
}

export default memo(MainLayout)
