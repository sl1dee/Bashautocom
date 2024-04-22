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
import detailing from '@assets/img/fast-sign-up/detailing.jpg'
import phones from '@assets/img/loyalty-program/phones.png'
import pic1 from '@assets/img/our-works/detailing/pic1.jpg'
import pic2 from '@assets/img/our-works/detailing/pic2.jpg'
import pic3 from '@assets/img/our-works/detailing/pic3.jpg'
import detailingDesktop from '@assets/img/service-slider/detailingDesktop.jpg'
import detailingMobile from '@assets/img/service-slider/detailingMobile.jpg'
import detailingTablet from '@assets/img/service-slider/detailingTablet.jpg'
import dentRepairDetailing from '@assets/img/types-of-jobs/dentRepairDetailing.png'
import dryCleaning from '@assets/img/types-of-jobs/dryCleaning.png'
import film from '@assets/img/types-of-jobs/film.png'
import glassRepair from '@assets/img/types-of-jobs/glassRepair.png'
import polishingDetailing from '@assets/img/types-of-jobs/polishingDetailing.png'
import protectiveCompounds from '@assets/img/types-of-jobs/protectiveCompounds.png'
import scratchRepair from '@assets/img/types-of-jobs/scratchRepair.png'
import washing from '@assets/img/types-of-jobs/washing.png'
import React from 'react'

import Brands from '@components/brands/index.js'
import DealerAndServiceCenters from '@components/dealer-and-service-centers/index.js'
import LoyaltyProgram from '@components/loyalty-program/loyalty-program.jsx'
import OurWorksBodyRepair from '@components/our-works/our-works-body-repair/our-works-body-repair.jsx'
import OurWorksDetailing from '@components/our-works/our-works-detailing/our-works-detailing.jsx'
import ServiceSlider from '@components/service-slider/index.js'
import Detailing from '@components/sign-ups/detailing/detailing.jsx'
import Service from '@components/sign-ups/service/service.jsx'
import TypesOfJobs from '@components/types-of-jobs/types-of-jobs.jsx'

import MainLayout from '../../layout/main/main-layout.jsx'

const DetailingPage = () => {
	const blocks = [
		{
			alias: 'ServiceSlider',
			value: [
				{
					bannerDesktop: detailingDesktop,
					bannerTablet: detailingTablet,
					bannerMobile: detailingMobile
				},
				{
					bannerDesktop: detailingDesktop,
					bannerTablet: detailingTablet,
					bannerMobile: detailingMobile
				},
				{
					bannerDesktop: detailingDesktop,
					bannerTablet: detailingTablet,
					bannerMobile: detailingMobile
				}
			]
		},
		{
			alias: 'TypesOfJobs',
			title: 'Виды работ',
			value: [
				{
					id: 1,
					image: polishingDetailing,
					title: 'Полировка кузова и стекол'
				},
				{
					id: 2,
					image: film,
					title: 'Декоративная и защитная пленка'
				},
				{
					id: 3,
					image: dentRepairDetailing,
					title: 'Ремонт вмятин без покраски'
				},
				{
					id: 4,
					image: protectiveCompounds,
					title: 'Нанесение защитных составов'
				},
				{
					id: 5,
					image: washing,
					title: 'Мойка и очистка кузова'
				},
				{
					id: 6,
					image: dryCleaning,
					title: 'Химчистка салона'
				},
				{
					id: 7,
					image: scratchRepair,
					title: 'Ремонт сколов и царапин'
				},
				{
					id: 8,
					image: glassRepair,
					title: 'Ремонт лобового стекла'
				}
			]
		},
		{
			alias: 'OurWorksDetailing',
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
					id: 2,
					image: pic3
				},
				{
					id: 3,
					image: pic1
				},
				{
					id: 4,
					image: pic2
				},
				{
					id: 5,
					image: pic3
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
					href: '',
					imgPath: haval
				},
				{
					id: 2,
					href: '',
					imgPath: changan
				},
				{
					id: 3,
					href: '',
					imgPath: omoda
				},
				{
					id: 4,
					href: '',
					imgPath: jaecoo
				},
				{
					id: 5,
					href: '',
					imgPath: exeed
				},
				{
					id: 6,
					href: '',
					imgPath: moskvich
				},
				{
					id: 7,
					href: '',
					imgPath: lada
				},
				{
					id: 8,
					href: '',
					imgPath: volkswagen
				},
				{
					id: 9,
					href: '',
					imgPath: nissan
				},
				{
					id: 10,
					href: '',
					imgPath: honda
				},
				{
					id: 11,
					href: '',
					imgPath: skoda
				},
				{
					id: 12,
					href: '',
					imgPath: infinity
				},
				{
					id: 13,
					href: '',
					imgPath: datsun
				},
				{
					id: 14,
					href: '',
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
			alias: 'Detailing',
			value: [
				{
					title: 'Быстрая запись на детейлинг',
					description: 'Оставьте заявку через форму или позвоните по номеру +7 (ХХХ) ХХХ-ХХ-ХХ',
					btn: 'Записаться',
					policyText: 'Нажимая на кнопку, вы соглашаетесь с ',
					policyLink: 'Запись на детейлинг',
					image: detailing,
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
					case 'ServiceSlider':
						return <ServiceSlider bannerList={block.value} />
					case 'TypesOfJobs':
						return <TypesOfJobs title={block.title} typesList={block.value} />
					case 'OurWorksDetailing':
						return <OurWorksDetailing title={block.title} ourWorksDetailingList={block.value} />
					case 'Brands':
						return <Brands title={block.title} viewTabs={block.viewTabs} brandsList={block.value} />
					case 'LoyaltyProgram':
						return <LoyaltyProgram textList={block.value} />
					case 'Detailing':
						return <Detailing detailingList={block.value} comboboxValues={block.brands} />
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

export default DetailingPage
