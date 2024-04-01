import React from 'react'

import BreadcrumbsTop from '@components/breadcrumbs-top/index.js'
import NewCarsFilter from '@components/new-cars-filter/new-cars-filter.jsx'
import NewCarsSlider from '@components/new-cars-slider/index.js'

import MainLayout from '../../layout/main/index.js'

const NewCarsPage = () => {
	return (
		<MainLayout>
			<BreadcrumbsTop />
			<NewCarsSlider />
			<NewCarsFilter />
		</MainLayout>
	)
}

export default NewCarsPage
