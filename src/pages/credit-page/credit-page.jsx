import creditDesktop from '@assets/img/banner/credit/creditDesktop.jpg'
import creditMobile from '@assets/img/banner/credit/creditMobile.jpg'
import creditTablet from '@assets/img/banner/credit/creditTablet.jpg'
import React from 'react'

import Banner from '@components/banner/banner.jsx'
import InOurShowrooms from '@components/in-our-showrooms/in-our-showrooms.jsx'
import TypesOfJobs from '@components/types-of-jobs/types-of-jobs.jsx'

import MainLayout from '../../layout/main/main-layout.jsx'

const CreditPage = () => {
	const blocks = [
		{
			alias: 'Banner',
			value: [
				{
					bannerDesktop: creditDesktop,
					bannerTablet: creditTablet,
					bannerMobile: creditMobile
				}
			]
		},
		{
			alias: 'InOurShowrooms',
			title: 'В наших авто салонах',
			description: 'и всё это можно совместить с приятным выбором автомобиля мечты',
			value: [
				{
					id: 0,
					number: '1',
					text: 'Вас проконсультируют по поводу автокредитования'
				},
				{
					id: 1,
					number: '2',
					text: 'Получите условия предоставления кредитов от разных банков'
				},
				{
					id: 2,
					number: '3',
					text: 'Получите условия предоставления кредитов от разных банков'
				}
			]
		}
	]

	return (
		<MainLayout>
			{blocks.map((block) => {
				switch (block.alias) {
					case 'Banner':
						return <Banner bannerList={block.value} />
					case 'InOurShowrooms':
						return <InOurShowrooms title={block.title} cardList={block.value} description={block.description} />
				}
			})}
		</MainLayout>
	)
}

export default CreditPage
