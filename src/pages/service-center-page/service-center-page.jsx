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
import mechanic from '@assets/img/fast-sign-up/mechanic.jpg'
import phones from '@assets/img/loyalty-program/phones.png'
import dueDiligenceDesktop from '@assets/img/service-slider/dueDiligenceDesktop.jpg'
import dueDiligenceMobile from '@assets/img/service-slider/dueDiligenceMobile.jpg'
import dueDiligenceSmallDesktop from '@assets/img/service-slider/dueDiligenceSmallDesktop.jpg'
import dueDiligenceTablet from '@assets/img/service-slider/dueDiligenceTablet.jpg'
import automaticTransmissionReplacement from '@assets/img/types-of-jobs/automaticTransmissionReplacement.png'
import changeOfOil from '@assets/img/types-of-jobs/changeOfOil.png'
import chassisRepair from '@assets/img/types-of-jobs/chassisRepair.png'
import diagnostics from '@assets/img/types-of-jobs/diagnostics.png'
import maintenance from '@assets/img/types-of-jobs/maintenance.png'
import refillingAirConditioners from '@assets/img/types-of-jobs/refillingAirConditioners.png'
import tireService from '@assets/img/types-of-jobs/tireService.png'
import wheelAlignment from '@assets/img/types-of-jobs/wheelAlignment.png'
import React from 'react'

import Breadcrumbs from '@helpers/Breadcrumbs.jsx'

import Brands from '@components/brands/index.js'
import BreadcrumbsTop from '@components/breadcrumbs-top/index.js'
import DealerAndServiceCenters from '@components/dealer-and-service-centers/index.js'
import FastSignUp from '@components/fast-sign-up/index.js'
import LoyaltyProgram from '@components/loyalty-program/loyalty-program.jsx'
import Modal from '@components/modal/modal.jsx'
import ServiceSlider from '@components/service-slider/index.js'
import TypesOfJobs from '@components/types-of-jobs/types-of-jobs.jsx'

import havalBckg from '../../../assets/img/dealer-and-service-centers/haval.jpg'
import moskvichBckg from '../../../assets/img/dealer-and-service-centers/moskvich.jpg'
import omodaBckg from '../../../assets/img/dealer-and-service-centers/omoda.jpg'
import MainLayout from '../../layout/main/main-layout.jsx'

const ServiceCenterPage = () => {
	const blocks = [
		{
			alias: 'ServiceSlider',
			value: [
				{
					bannerDesktop: dueDiligenceDesktop,
					bannerSmallDesktop: dueDiligenceSmallDesktop,
					bannerTablet: dueDiligenceTablet,
					bannerMobile: dueDiligenceMobile
				},
				{
					bannerDesktop: dueDiligenceDesktop,
					bannerSmallDesktop: dueDiligenceSmallDesktop,
					bannerTablet: dueDiligenceTablet,
					bannerMobile: dueDiligenceMobile
				},
				{
					bannerDesktop: dueDiligenceDesktop,
					bannerSmallDesktop: dueDiligenceSmallDesktop,
					bannerTablet: dueDiligenceTablet,
					bannerMobile: dueDiligenceMobile
				}
			]
		},
		{
			alias: 'TypesOfJobs',
			title: 'Виды работ',
			value: [
				{
					id: 1,
					image: maintenance,
					title: 'Техническое обслуживание'
				},
				{
					id: 2,
					image: changeOfOil,
					title: 'Замена масла'
				},
				{
					id: 3,
					image: wheelAlignment,
					title: 'Развал-схождение'
				},
				{
					id: 4,
					image: refillingAirConditioners,
					title: 'Заправка кондиционеров'
				},
				{
					id: 5,
					image: diagnostics,
					title: 'Диагностика'
				},
				{
					id: 6,
					image: chassisRepair,
					title: 'Ремонт ходовой части'
				},
				{
					id: 7,
					image: tireService,
					title: 'Шиномонтаж'
				},
				{
					id: 8,
					image: automaticTransmissionReplacement,
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
			alias: 'FastSignUp',
			value: [
				{
					title: 'Быстрая запись в сервисный центр',
					description: 'Оставьте заявку через форму или позвоните по номеру +7 (ХХХ) ХХХ-ХХ-ХХ',
					btn: 'Записаться',
					policyText: 'Нажимая на кнопку, вы соглашаетесь с ',
					policyLink: 'Политикой конфиденциальности',
					image: mechanic,
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
			<Breadcrumbs url={window.location.pathname.slice(1)} type="breadcrumbs/page/" />
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
					case 'FastSignUp':
						return <FastSignUp signUpList={block.value} comboboxValues={block.brands} />
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
			{/* <ServiceSlider /> */}
			{/* <TypesOfJobs title="Виды работ" /> */}
			{/* <Brands title="Мы обслуживаем и ремонтируем бренды" viewTabs={false} /> */}
			{/* <LoyaltyProgram /> */}
			{/* <FastSignUp /> */}
			{/* /!* <Modal /> *!/ */}
			{/* <DealerAndServiceCenters title="Сервисные центры" /> */}
		</MainLayout>
	)
}

export default ServiceCenterPage
