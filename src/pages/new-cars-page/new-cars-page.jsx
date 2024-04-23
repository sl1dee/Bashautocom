import React from 'react'

import BreadcrumbsTop from '@components/breadcrumbs-top/breadcrumbs-top.jsx'
import NewCarsSlider from '@components/new-cars-slider/new-cars-slider.jsx'
import NewCars from '@components/new-cars/new-cars.jsx'

import MainLayout from '../../layout/main/index.js'

const NewCarsPage = () => {
	return (
		<>
			<BreadcrumbsTop />
			<NewCarsSlider />
			<NewCars />
		</>
	)
}

export default NewCarsPage
