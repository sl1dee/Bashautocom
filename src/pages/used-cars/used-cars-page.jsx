import React from 'react'

import BreadcrumbsTop from '@components/breadcrumbs-top/index.js'
import UsedCarsSlider from '@components/used-cars-slider/index.js'
import UsedCars from '@components/used-cars/used-cars.jsx'

import MainLayout from '../../layout/main/main-layout.jsx'

const UsedCarsPage = () => {
	return (
		<MainLayout>
			<BreadcrumbsTop />
			<UsedCarsSlider />
			<UsedCars />
		</MainLayout>
	)
}

export default UsedCarsPage
