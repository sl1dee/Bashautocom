import React from 'react'

import Brands from '@components/brands/index.js'
import DealerAndServiceCenters from '@components/dealer-and-service-centers/index.js'
import TypesOfJobs from '@components/types-of-jobs/types-of-jobs.jsx'

import MainLayout from '../../layout/main/main-layout.jsx'

const ServiceCenterPage = () => {
	return (
		<MainLayout>
			<TypesOfJobs title="Виды работ" />
			<Brands title="Мы обслуживаем и ремонтируем бренды" viewTabs={false} />
			<DealerAndServiceCenters title="Сервисные центры" />
		</MainLayout>
	)
}

export default ServiceCenterPage
