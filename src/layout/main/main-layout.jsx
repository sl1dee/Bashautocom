import useScrollTop from '@hooks/use-scroll-top.js'
import { burgerIsOpenSelector, signUpIsOpenSelector } from '@store/selectors/modals.js'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import Footer from '@components/footer'
import Sidebar from '@components/header2/sidebar'
import SignUpModal from '@components/modals/sign-up-modal'

import Cookie from '../../components/cookie/cookie.jsx'
import Header from '../../components/header/index.js'
import MainServices from '../../components/main-services/index.js'

const MainLayout = ({ children }) => {
	const signUpIsOpen = useSelector(signUpIsOpenSelector)
	const burgerIsOpen = useSelector(burgerIsOpenSelector)

	useScrollTop()
	return (
		<>
			<Header />
			<MainServices />
			{/* {children} */}
			{/* <Footer /> */}
			{/* <Cookie /> */}
			{/* {burgerIsOpen && <Sidebar />} */}
			{/* {signUpIsOpen && <SignUpModal />} */}
		</>
	)
}

export default memo(MainLayout)
