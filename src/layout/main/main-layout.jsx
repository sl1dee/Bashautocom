import useScrollTop from '@hooks/use-scroll-top.js'
import { burgerIsOpenSelector, signUpIsOpenSelector } from '@store/selectors/modals.js'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'

// import Footer from '@components/footer2'
import Sidebar from '@components/header2/sidebar'
import SignUpModal from '@components/modals/sign-up-modal'

import About from '../../components/about/index.js'
import Brands from '../../components/brands/index.js'
import Cookie from '../../components/cookie/cookie.jsx'
import DealerAndServiceCenters from '../../components/dealer-and-service-centers/index.js'
import Events from '../../components/events/index.js'
import Footer from '../../components/footer/index.js'
import Header from '../../components/header/index.js'
import MainServices from '../../components/main-services/index.js'
import OurServices from '../../components/our-services/index.js'
import Question from '../../components/question/index.js'
import Reviews from '../../components/reviews/index.js'
import SpecialOffers from '../../components/special-offers/index.js'

const MainLayout = ({ children }) => {
	const signUpIsOpen = useSelector(signUpIsOpenSelector)
	const burgerIsOpen = useSelector(burgerIsOpenSelector)

	useScrollTop()
	return (
		<>
			<Header />
			<MainServices />
			<Brands />
			<SpecialOffers />
			<OurServices />
			<Reviews />
			<Question />
			<DealerAndServiceCenters />
			<About />
			<Events />
			<Footer />
			{/* {children} */}
			{/* <Footer /> */}
			{/* <Cookie /> */}
			{/* {burgerIsOpen && <Sidebar />} */}
			{/* {signUpIsOpen && <SignUpModal />} */}
		</>
	)
}

export default memo(MainLayout)
