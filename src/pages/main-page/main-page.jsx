import React from 'react'

import About from '@components/about/index.js'
import Brands from '@components/brands/index.js'
import DealerAndServiceCenters from '@components/dealer-and-service-centers/index.js'
import Events from '@components/events/index.js'
import MainServices from '@components/main-services/index.js'
import OurServices from '@components/our-services/index.js'
import Question from '@components/question/index.js'
import Reviews from '@components/reviews/index.js'
import SpecialOffers from '@components/special-offers/index.js'

import MainLayout from '../../layout/main'

const MainPage = () => {
	return (
		<MainLayout>
			<MainServices />
			<Brands title="Найдите свой бренд" />
			<SpecialOffers />
			<OurServices />
			<Reviews />
			<Question />
			<DealerAndServiceCenters title="Дилерские и сервисные центры" />
			<About />
			<Events />
			{/* <MainSlider /> */}
			{/* <Services preHeader /> */}
			{/* <Favorites favorites={favorites} /> */}
			{/* <EmployeesSlider sliderHeaderText="Заботливые профессионалы клиники" isViewAll /> */}
			{/* /!* <OurWorks /> *!/ */}
			{/* /!* <ReviewsSlider /> *!/ */}
			{/* /!* <Articles /> *!/ */}
			{/* <About /> */}
			{/* <YandexMap /> */}
		</MainLayout>
	)
}
export default MainPage
