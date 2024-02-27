import useScrollTop from '@hooks/use-scroll-top.js'
import { burgerIsOpenSelector, signUpIsOpenSelector } from '@store/selectors/modals.js'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import Footer from '../../components/footer/index.js'
import Header from '../../components/header/index.js'

const MainLayout = ({ children }) => {
	// const signUpIsOpen = useSelector(signUpIsOpenSelector)
	// const burgerIsOpen = useSelector(burgerIsOpenSelector)

	useScrollTop()
	return (
		<>
			<Header />
			{children}
			<Footer />
			{/* <Cookie /> */}
			{/* {burgerIsOpen && <Sidebar />} */}
			{/* {signUpIsOpen && <SignUpModal />} */}
		</>
	)
}

export default memo(MainLayout)
