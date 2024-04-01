import React from 'react'

import BreadcrumbsTop from '@components/breadcrumbs-top/index.js'
import NewCarsSlider from '@components/new-cars-slider/index.js'
import NewCars from '@components/new-cars/new-cars.jsx'

import MainLayout from '../../layout/main/index.js'

const NewCarsPage = () => {
	return (
		<MainLayout>
			<BreadcrumbsTop />
			<NewCarsSlider />
			<NewCars />
		</MainLayout>
	)
}

export default NewCarsPage
