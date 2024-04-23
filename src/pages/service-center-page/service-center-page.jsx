import React from 'react'

import Brands from '@components/brands/brands.jsx'
import DealerAndServiceCenters from '@components/dealer-and-service-centers/dealer-and-service-centers.jsx'
import LoyaltyProgram from '@components/loyalty-program/loyalty-program.jsx'
import ServiceSlider from '@components/service-slider/service-slider.jsx'
import Service from '@components/sign-ups/service/service.jsx'
import TypesOfJobs from '@components/types-of-jobs/types-of-jobs.jsx'

import MainLayout from '../../layout/main/main-layout.jsx'

const ServiceCenterPage = () => {
	const blocks = [
		{
			alias: 'ServiceSlider',
			value: [
				{
					bannerDesktop: './assets/img/service-slider/dueDiligenceDesktop.jpg',
					bannerTablet: './assets/img/service-slider/dueDiligenceTablet.jpg',
					bannerMobile: './assets/img/service-slider/dueDiligenceMobile.jpg'
				},
				{
					bannerDesktop: './assets/img/service-slider/dueDiligenceDesktop.jpg',
					bannerTablet: './assets/img/service-slider/dueDiligenceTablet.jpg',
					bannerMobile: './assets/img/service-slider/dueDiligenceMobile.jpg'
				},
				{
					bannerDesktop: './assets/img/service-slider/dueDiligenceDesktop.jpg',
					bannerTablet: './assets/img/service-slider/dueDiligenceTablet.jpg',
					bannerMobile: './assets/img/service-slider/dueDiligenceMobile.jpg'
				}
			]
		},
		{
			alias: 'TypesOfJobs',
			title: 'Виды работ',
			value: [
				{
					id: 1,
					image: './assets/img/types-of-jobs/maintenance.png',
					title: 'Техническое обслуживание'
				},
				{
					id: 2,
					image: './assets/img/types-of-jobs/changeOfOil.png',
					title: 'Замена масла'
				},
				{
					id: 3,
					image: './assets/img/types-of-jobs/wheelAlignment.png',
					title: 'Развал-схождение'
				},
				{
					id: 4,
					image: './assets/img/types-of-jobs/refillingAirConditioners.png',
					title: 'Заправка кондиционеров'
				},
				{
					id: 5,
					image: './assets/img/types-of-jobs/diagnostics.png',
					title: 'Диагностика'
				},
				{
					id: 6,
					image: './assets/img/types-of-jobs/chassisRepair.png',
					title: 'Ремонт ходовой части'
				},
				{
					id: 7,
					image: './assets/img/types-of-jobs/tireService.png',
					title: 'Шиномонтаж'
				},
				{
					id: 8,
					image: './assets/img/types-of-jobs/automaticTransmissionReplacement.png',
					title: 'Замена в АКПП'
				}
			]
		},
		{
			alias: 'Brands',
			title: 'Мы обслуживаем и ремонтируем бренды',
			viewTabs: 'false',
			value: [
				{
					id: 1,
					href: '/service-center',
					imgPath: './assets/img/brands/haval.svg'
				},
				{
					id: 2,
					href: '/service-center',
					imgPath: './assets/img/brands/changan.svg'
				},
				{
					id: 3,
					href: '/service-center',
					imgPath: './assets/img/brands/omoda.svg'
				},
				{
					id: 4,
					href: '/service-center',
					imgPath: './assets/img/brands/jaecoo.svg'
				},
				{
					id: 5,
					href: '/service-center',
					imgPath: './assets/img/brands/exeed.svg'
				},
				{
					id: 6,
					href: '/service-center',
					imgPath: './assets/img/brands/moskvich.svg'
				},
				{
					id: 7,
					href: '/service-center',
					imgPath: './assets/img/brands/lada.svg'
				},
				{
					id: 8,
					href: '/service-center',
					imgPath: './assets/img/brands/volkswagen.svg'
				},
				{
					id: 9,
					href: '/service-center',
					imgPath: './assets/img/brands/nissan.svg'
				},
				{
					id: 10,
					href: '/service-center',
					imgPath: './assets/img/brands/honda.svg'
				},
				{
					id: 11,
					href: '/service-center',
					imgPath: './assets/img/brands/skoda.svg'
				},
				{
					id: 12,
					href: '/service-center',
					imgPath: './assets/img/brands/infinity.svg'
				},
				{
					id: 13,
					href: '/service-center',
					imgPath: './assets/img/brands/datsun.svg'
				},
				{
					id: 14,
					href: '/service-center',
					imgPath: './assets/img/brands/suzuki.svg'
				}
			]
		},
		{
			alias: 'LoyaltyProgram',
			value: [
				{
					title: 'Выгоднее с программой лояльности Башавтоком',
					bonusSystem: 'Бонусная система 1 бонус = 1 рубль',
					li1: 'Накапливать бонусные баллы и оплачивать ими услуги сервиса, покупку запчастей в любом нашем дилерском центре',
					li2: 'Отслеживать историю посещений сервиса в личном кабинете',
					li3: 'Записываться в сервисный центр',
					btnText: 'Стать участником бонусной программы',
					smallBtnText: 'Стать участником программы',
					image: './assets/img/loyalty-program/phones.png'
				}
			]
		},
		{
			alias: 'Service',
			value: [
				{
					title: 'Быстрая запись в сервисный центр',
					description: 'Оставьте заявку через форму или позвоните по номеру +7 (ХХХ) ХХХ-ХХ-ХХ',
					btn: 'Записаться',
					policyText: 'Нажимая на кнопку, вы соглашаетесь с ',
					policyLink: 'Политикой конфиденциальности',
					image: './assets/img/fast-sign-up/mechanic.jpg',
					titleMobile: 'Запись в сервисный центр'
				}
			],
			brands: [
				{
					label: 'Changan Auto',
					id: 1
				},
				{
					label: 'Omoda',
					id: 2
				},
				{
					label: 'Haval',
					id: 3
				},
				{
					label: 'Москвич',
					id: 4
				},
				{
					label: 'Exeed',
					id: 5
				}
			]
		},
		{
			alias: 'DealerAndServiceCenters',
			title: 'Сервисные центры',
			value: [
				{
					bckgImg: './assets/img/dealer-and-service-centers/haval.jpg',
					street: 'Уфа, ул. Проспект Салавата Юлаева, 89',
					number: '+7 (347) 246-65-47',
					saleCount: '3',
					serviceCount: '7',
					saleBrands: ['Haval', 'Changan'],
					serviceBrands: ['Nissan', 'Honda', 'Infinity', 'Datsun', 'Suzuki', 'Haval', 'Changan']
				},
				{
					bckgImg: './assets/img/dealer-and-service-centers/moskvich.jpg',
					street: 'Уфа, ул. Рубежная, 168',
					number: '+7 (347) 246-65-47',
					saleCount: '2',
					serviceCount: '7',
					saleBrands: ['Haval', 'Changan'],
					serviceBrands: ['Nissan', 'Honda', 'Infinity', 'Datsun', 'Suzuki', 'Haval', 'Changan']
				},
				{
					bckgImg: './assets/img/dealer-and-service-centers/omoda.jpg',
					street: 'Уфа, ул. Адмирала Макарова, 32',
					number: '+7 (347) 246-65-47',
					saleCount: '2',
					serviceCount: '7',
					saleBrands: ['Haval', 'Changan'],
					serviceBrands: ['Nissan', 'Honda', 'Infinity', 'Datsun', 'Suzuki', 'Haval', 'Changan']
				},
				{
					bckgImg: './assets/img/dealer-and-service-centers/haval.jpg',
					street: 'Уфа, ул. Проспект Салавата Юлаева, 89',
					number: '+7 (347) 246-65-47',
					saleCount: '3',
					serviceCount: '7',
					saleBrands: ['Haval', 'Changan'],
					serviceBrands: ['Nissan', 'Honda', 'Infinity', 'Datsun', 'Suzuki', 'Haval', 'Changan']
				},
				{
					bckgImg: './assets/img/dealer-and-service-centers/moskvich.jpg',
					street: 'Уфа, ул. Рубежная, 168',
					number: '+7 (347) 246-65-47',
					saleCount: '2',
					serviceCount: '7',
					saleBrands: ['Haval', 'Changan'],
					serviceBrands: ['Nissan', 'Honda', 'Infinity', 'Datsun', 'Suzuki', 'Haval', 'Changan']
				},
				{
					bckgImg: './assets/img/dealer-and-service-centers/omoda.jpg',
					street: 'Уфа, ул. Адмирала Макарова, 32',
					number: '+7 (347) 246-65-47',
					saleCount: '2',
					serviceCount: '7',
					saleBrands: ['Haval', 'Changan'],
					serviceBrands: ['Nissan', 'Honda', 'Infinity', 'Datsun', 'Suzuki', 'Haval', 'Changan']
				}
			],
			brands: [
				{
					label: 'Changan',
					id: 1
				},
				{
					label: 'Omoda',
					id: 2
				},
				{
					label: 'Haval',
					id: 3
				},
				{
					label: 'Москвич',
					id: 4
				},
				{
					label: 'Exeed',
					id: 5
				}
			],
			cities: ['Все', 'Уфа', 'Стерлитамак', 'Октябрьский', 'Белебей']
		}
	]

	return (
		<>
			{/* <BreadcrumbsTop /> */}
			{/* <Breadcrumbs url={window.location.pathname.slice(1)} type="breadcrumbs/page/" /> */}
			{blocks.map((block) => {
				switch (block.alias) {
					case 'ServiceSlider':
						return <ServiceSlider bannerList={block.value} />
					case 'TypesOfJobs':
						return <TypesOfJobs title={block.title} typesList={block.value} />
					case 'Brands':
						return <Brands title={block.title} viewTabs={block.viewTabs} brandsList={block.value} />
					case 'LoyaltyProgram':
						return <LoyaltyProgram textList={block.value} />
					case 'Service':
						return <Service serviceList={block.value} comboboxValues={block.brands} />
					case 'DealerAndServiceCenters':
						return (
							<DealerAndServiceCenters
								title={block.title}
								cardList={block.value}
								comboboxValues={block.brands}
								items={block.cities}
							/>
						)
				}
			})}
		</>
	)
}

export default ServiceCenterPage
