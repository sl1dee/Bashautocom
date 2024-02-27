import React from 'react'

import About from '@components/about2'
import Articles from '@components/articles'
import Brands from '@components/brands/index.js'
import DealerAndServiceCenters from '@components/dealer-and-service-centers/index.js'
import EmployeesSlider from '@components/employees-slider'
import Events from '@components/events/index.js'
import Favorites from '@components/favorites/index.js'
import MainServices from '@components/main-services/index.js'
import MainSlider from '@components/main-slider'
import OurServices from '@components/our-services/index.js'
import OurWorks from '@components/our-works'
import Question from '@components/question/index.js'
import ReviewsSlider from '@components/reviews-slider'
import Reviews from '@components/reviews/index.js'
import Services from '@components/services'
import SpecialOffers from '@components/special-offers/index.js'
import YandexMap from '@components/yandex-map'

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
			<DealerAndServiceCenters />
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
