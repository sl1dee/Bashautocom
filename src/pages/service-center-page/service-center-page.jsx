import React from 'react'

import About from '@components/about2/index.js'
import Brands from '@components/brands/index.js'
import DealerAndServiceCenters from '@components/dealer-and-service-centers/index.js'
import Events from '@components/events/index.js'
import MainServices from '@components/main-services/index.js'
import OurServices from '@components/our-services/index.js'
import Question from '@components/question/index.js'
import Reviews from '@components/reviews/index.js'
import SpecialOffers from '@components/special-offers/index.js'

import MainLayout from '../../layout/main/main-layout.jsx'

const ServiceCenterPage = () => {
	return (
		<MainLayout>
			<Brands title="Мы обслуживаем и ремонтируем бренды" />
			<DealerAndServiceCenters />
		</MainLayout>
	)
}

export default ServiceCenterPage
