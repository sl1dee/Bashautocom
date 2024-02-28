import React from 'react'

import Brands from '@components/brands/index.js'
import BreadcrumbsTop from '@components/breadcrumbs-top/index.js'
import DealerAndServiceCenters from '@components/dealer-and-service-centers/index.js'
import ServiceSlider from '@components/service-slider/index.js'
import TypesOfJobs from '@components/types-of-jobs/types-of-jobs.jsx'

import MainLayout from '../../layout/main/main-layout.jsx'

const ServiceCenterPage = () => {
	return (
		<MainLayout>
			<BreadcrumbsTop />
			<ServiceSlider />
			<TypesOfJobs title="Виды работ" />
			<Brands title="Мы обслуживаем и ремонтируем бренды" viewTabs={false} />
			<DealerAndServiceCenters title="Сервисные центры" />
		</MainLayout>
	)
}

export default ServiceCenterPage
