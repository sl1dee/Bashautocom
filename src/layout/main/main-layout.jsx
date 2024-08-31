import useScrollTop from '@hooks/use-scroll-top.js'
import { burgerIsOpenSelector, signUpIsOpenSelector } from '@store/selectors/modals.js'
import React, {memo, Suspense} from 'react'
import { useSelector } from 'react-redux'

import Sidebar from '@components/header/sidebar/sidebar.jsx'
import Navbar from '@components/navbar/navbar.jsx'

import Footer from '../../components/footer/footer.jsx'
import Header from '../../components/header/header.jsx'

const MainLayout = ({ children }) => {
	// const signUpIsOpen = useSelector(signUpIsOpenSelector)
	const burgerIsOpen = useSelector(burgerIsOpenSelector)

	useScrollTop()
	return (
		<>
			<Header />
			<Suspense>{children}</Suspense>
			<Footer />
			{burgerIsOpen && <Sidebar />}
			<Navbar />
			{/*<Cookie /> */}
			{/* !!!!!!! <Sidebar /> нужно сделать сайдбар всегда вмонитрованным */}
			{/* {signUpIsOpen && <SignUpModal />} */}
		</>
	)
}

export default memo(MainLayout)
