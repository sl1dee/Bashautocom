import { Breadcrumbs } from '@consta/uikit/Breadcrumbs'
import React from 'react'

import cl from './breadcrumbs-top.module.scss'

const BreadcrumbsTop = () => {
	const pagesNoIcon = [
		{
			label: 'Главная',
			href: '/'
		},
		{
			label: 'Сервисный центр',
			href: '/service-center'
		},
		{
			label: 'Новые автомобили',
			href: '/new-cars-page'
		},
		{
			label: 'Авто с пробегом',
			href: '/used-cars-page'
		},
		{
			label: 'Страница автомобиля',
			href: '/used-car-page'
		}
	]

	return (
		<div className={cl.breadcrumbs}>
			<div className="container p-0">
				<Breadcrumbs items={pagesNoIcon} />
			</div>
		</div>
	)
}

export default BreadcrumbsTop
