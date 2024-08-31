import React from 'react'

import BreadcrumbsTop from '@components/breadcrumbs-top/breadcrumbs-top.jsx'
import UsedCarsSlider from '@components/used-cars-slider/used-cars-slider.jsx'
import UsedCars from '@components/used-cars/used-cars.jsx'

import MainLayout from '../../layout/main/main-layout.jsx'

const UsedCarsPage = () => {
	return (
		<>
			<BreadcrumbsTop />
			<UsedCarsSlider />
			<UsedCars />
		</>
	)
}

export default UsedCarsPage
