import changan from '@assets/img/brands/changan.svg'
import datsun from '@assets/img/brands/datsun.svg'
import exeed from '@assets/img/brands/exeed.svg'
import haval from '@assets/img/brands/haval.svg'
import honda from '@assets/img/brands/honda.svg'
import infinity from '@assets/img/brands/infinity.svg'
import jaecoo from '@assets/img/brands/jaecoo.svg'
import lada from '@assets/img/brands/lada.svg'
import moskvich from '@assets/img/brands/moskvich.svg'
import nissan from '@assets/img/brands/nissan.svg'
import omoda from '@assets/img/brands/omoda.svg'
import skoda from '@assets/img/brands/skoda.svg'
import suzuki from '@assets/img/brands/suzuki.svg'
import volkswagen from '@assets/img/brands/volkswagen.svg'
import havalBckg from '@assets/img/dealer-and-service-centers/haval.jpg'
import moskvichBckg from '@assets/img/dealer-and-service-centers/moskvich.jpg'
import omodaBckg from '@assets/img/dealer-and-service-centers/omoda.jpg'
import polisher from '@assets/img/fast-sign-up/polisher.jpg'
import phones from '@assets/img/loyalty-program/phones.png'
import pic1 from '@assets/img/our-works/body-repair/pic1.jpg'
import pic2 from '@assets/img/our-works/body-repair/pic2.jpg'
import bodyRepairDesktop from '@assets/img/service-slider/bodyRepairDesktop.jpg'
import bodyRepairMobile from '@assets/img/service-slider/bodyRepairMobile.jpg'
import bodyRepairTablet from '@assets/img/service-slider/bodyRepairTablet.jpg'
import bodyDetails from '@assets/img/types-of-jobs/bodyDetails.png'
import dentRepair from '@assets/img/types-of-jobs/dentRepair.png'
import geometry from '@assets/img/types-of-jobs/geometry.png'
import painting from '@assets/img/types-of-jobs/painting.png'
import plasticDetails from '@assets/img/types-of-jobs/plasticDetails.png'
import polishing from '@assets/img/types-of-jobs/polishing.png'
import React from 'react'

import Breadcrumbs from '@helpers/Breadcrumbs.jsx'

import Brands from '@components/brands/index.js'
import DealerAndServiceCenters from '@components/dealer-and-service-centers/index.js'
import LoyaltyProgram from '@components/loyalty-program/loyalty-program.jsx'
import OurWorksBodyRepair from '@components/our-works/our-works-body-repair/our-works-body-repair.jsx'
import ServiceSlider from '@components/service-slider/index.js'
import BodyRepair from '@components/sign-ups/body-repair/body-repair.jsx'
import TypesOfJobsBodyRepair from '@components/types-of-jobs-body-repair/types-of-jobs-body-repair.jsx'

import MainLayout from '../../layout/main/main-layout.jsx'

const BodyRepairPage = () => {
	const blocks = [
		{
			alias: 'BodyRepairSlider',
			value: [
				{
					bannerDesktop: bodyRepairDesktop,
					bannerTablet: bodyRepairTablet,
					bannerMobile: bodyRepairMobile
				},
				{
					bannerDesktop: bodyRepairDesktop,
					bannerTablet: bodyRepairTablet,
					bannerMobile: bodyRepairMobile
				},
				{
					bannerDesktop: bodyRepairDesktop,
					bannerTablet: bodyRepairTablet,
					bannerMobile: bodyRepairMobile
				}
			]
		},
		{
			alias: 'TypesOfJobsBodyRepair',
			title: 'Виды работ',
			value: [
				{
					id: 1,
					image: bodyDetails,
					title: 'Ремонт деталей корпуса'
				},
				{
					id: 2,
					image: geometry,
					title: 'Восстановление геометрии кузова'
				},
				{
					id: 3,
					image: painting,
					title: 'Покраска автомобиля'
				},
				{
					id: 4,
					image: dentRepair,
					title: 'Ремонт вмятин без покраски'
				},
				{
					id: 5,
					image: polishing,
					title: 'Полировка кузова'
				},
				{
					id: 6,
					image: plasticDetails,
					title: 'Ремонт пластиковых деталей'
				}
			]
		},
		{
			alias: 'OurWorksBodyRepair',
			title: 'Наши работы',
			value: [
				{
					id: 0,
					image: pic1
				},
				{
					id: 1,
					image: pic2
				},
				{
					id: 0,
					image: pic1
				},
				{
					id: 1,
					image: pic2
				},
				{
					id: 0,
					image: pic1
				},
				{
					id: 1,
					image: pic2
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
					imgPath: haval
				},
				{
					id: 2,
					href: '/service-center',
					imgPath: changan
				},
				{
					id: 3,
					href: '/service-center',
					imgPath: omoda
				},
				{
					id: 4,
					href: '/service-center',
					imgPath: jaecoo
				},
				{
					id: 5,
					href: '/service-center',
					imgPath: exeed
				},
				{
					id: 6,
					href: '/service-center',
					imgPath: moskvich
				},
				{
					id: 7,
					href: '/service-center',
					imgPath: lada
				},
				{
					id: 8,
					href: '/service-center',
					imgPath: volkswagen
				},
				{
					id: 9,
					href: '/service-center',
					imgPath: nissan
				},
				{
					id: 10,
					href: '/service-center',
					imgPath: honda
				},
				{
					id: 11,
					href: '/service-center',
					imgPath: skoda
				},
				{
					id: 12,
					href: '/service-center',
					imgPath: infinity
				},
				{
					id: 13,
					href: '/service-center',
					imgPath: datsun
				},
				{
					id: 14,
					href: '/service-center',
					imgPath: suzuki
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
					image: phones
				}
			]
		},
		{
			alias: 'BodyRepair',
			value: [
				{
					title: 'Быстрая запись в сервисный центр',
					description: 'Оставьте заявку через форму или позвоните по номеру +7 (ХХХ) ХХХ-ХХ-ХХ',
					btn: 'Записаться',
					policyText: 'Нажимая на кнопку, вы соглашаетесь с ',
					policyLink: 'Политикой конфиденциальности',
					image: polisher,
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
					bckgImg: havalBckg,
					street: 'Уфа, ул. Проспект Салавата Юлаева, 89',
					number: '+7 (347) 246-65-47',
					saleCount: '3',
					serviceCount: '7',
					saleBrands: ['Haval', 'Changan'],
					serviceBrands: ['Nissan', 'Honda', 'Infinity', 'Datsun', 'Suzuki', 'Haval', 'Changan']
				},
				{
					bckgImg: moskvichBckg,
					street: 'Уфа, ул. Рубежная, 168',
					number: '+7 (347) 246-65-47',
					saleCount: '2',
					serviceCount: '7',
					saleBrands: ['Haval', 'Changan'],
					serviceBrands: ['Nissan', 'Honda', 'Infinity', 'Datsun', 'Suzuki', 'Haval', 'Changan']
				},
				{
					bckgImg: omodaBckg,
					street: 'Уфа, ул. Адмирала Макарова, 32',
					number: '+7 (347) 246-65-47',
					saleCount: '2',
					serviceCount: '7',
					saleBrands: ['Haval', 'Changan'],
					serviceBrands: ['Nissan', 'Honda', 'Infinity', 'Datsun', 'Suzuki', 'Haval', 'Changan']
				},
				{
					bckgImg: havalBckg,
					street: 'Уфа, ул. Проспект Салавата Юлаева, 89',
					number: '+7 (347) 246-65-47',
					saleCount: '3',
					serviceCount: '7',
					saleBrands: ['Haval', 'Changan'],
					serviceBrands: ['Nissan', 'Honda', 'Infinity', 'Datsun', 'Suzuki', 'Haval', 'Changan']
				},
				{
					bckgImg: moskvichBckg,
					street: 'Уфа, ул. Рубежная, 168',
					number: '+7 (347) 246-65-47',
					saleCount: '2',
					serviceCount: '7',
					saleBrands: ['Haval', 'Changan'],
					serviceBrands: ['Nissan', 'Honda', 'Infinity', 'Datsun', 'Suzuki', 'Haval', 'Changan']
				},
				{
					bckgImg: omodaBckg,
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
		<MainLayout>
			{/* <BreadcrumbsTop /> */}
			{/* <Breadcrumbs url={window.location.pathname.slice(1)} type="breadcrumbs/page/" /> */}
			{blocks.map((block) => {
				switch (block.alias) {
					case 'BodyRepairSlider':
						return <ServiceSlider bannerList={block.value} />
					case 'TypesOfJobsBodyRepair':
						return <TypesOfJobsBodyRepair title={block.title} typesList={block.value} />
					case 'OurWorksBodyRepair':
						return <OurWorksBodyRepair title={block.title} ourWorksList={block.value} />
					case 'Brands':
						return <Brands title={block.title} viewTabs={block.viewTabs} brandsList={block.value} />
					case 'LoyaltyProgram':
						return <LoyaltyProgram textList={block.value} />
					case 'BodyRepair':
						return <BodyRepair bodyRepairList={block.value} comboboxValues={block.brands} />
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
		</MainLayout>
	)
}

export default BodyRepairPage
