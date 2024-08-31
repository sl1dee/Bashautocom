import React from 'react'

import BreadcrumbsTop from '@components/breadcrumbs-top/breadcrumbs-top.jsx'
import UsedCarSlider from '@components/used-car-slider/used-car-slider.jsx'
import UsedCar from '@components/used-car/used-car.jsx'

import MainLayout from '../../layout/main/main-layout.jsx'

const UsedCarPage = () => {
	return (
		<>
			<BreadcrumbsTop />
			<UsedCar />
			<UsedCarSlider />
		</>
	)
}

export default UsedCarPage
