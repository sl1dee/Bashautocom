import car from '@assets/img/about/car.jpg'
import mainEntrance from '@assets/img/about/mainEntrance.jpg'
import settingAbout from '@assets/img/about/setting.svg'
import shieldAbout from '@assets/img/about/shield.svg'
import usersAbout from '@assets/img/about/users.svg'
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
import changanEvent from '@assets/img/events/changan.jpg'
import jaecooEvent from '@assets/img/events/jaecoo.jpg'
import ladaEvent from '@assets/img/events/lada.jpg'
import omodaEvent from '@assets/img/events/omoda.jpg'
import bodyRepair from '@assets/img/main-services/bodyRepair.png'
import carsRent from '@assets/img/main-services/carsRent.png'
import detailing from '@assets/img/main-services/detailing.png'
import insurance from '@assets/img/main-services/insurance.png'
import lending from '@assets/img/main-services/lending.png'
import newCars from '@assets/img/main-services/newCars.png'
import serviceCenter from '@assets/img/main-services/serviceСenter.png'
import toCorporativeClients from '@assets/img/main-services/toCorporativeClients.png'
import tradeIn from '@assets/img/main-services/tradeIn.png'
import usedCars from '@assets/img/main-services/usedCars.png'
import jaecooVideo from '@assets/img/reviews/jaecoo.jpg'
import moskvichVideo from '@assets/img/reviews/moskvich.jpg'
import omodaVideo from '@assets/img/reviews/omoda.jpg'
import havalSpecialOffersBckg from '@assets/img/special-offer/haval.jpg'
import moskvichSpecialOffersBckg from '@assets/img/special-offer/moskvich.jpg'
import omodaSpecialOffersBckg from '@assets/img/special-offer/omoda.jpg'
import React from 'react'

import About from '@components/about/index.js'
import Brands from '@components/brands/index.js'
import DealerAndServiceCenters from '@components/dealer-and-service-centers/index.js'
import Events from '@components/events/index.js'
import MainServices from '@components/main-services/index.js'
import OurServices from '@components/our-services/index.js'
import Question from '@components/question/index.js'
import Reviews from '@components/reviews/index.js'
import SpecialOffers from '@components/special-offers/index.js'

import bodyRepairIcon from '../../../assets/img/our-services/bodyRepair.svg'
import carsRentIcon from '../../../assets/img/our-services/carsRent.svg'
import detailingIcon from '../../../assets/img/our-services/detailing.svg'
import insuranceIcon from '../../../assets/img/our-services/insurance.svg'
import lendingIcon from '../../../assets/img/our-services/lending.svg'
import serviceCenterIcon from '../../../assets/img/our-services/serviceСenter.svg'
import toCorporativeClientsIcon from '../../../assets/img/our-services/toCorporativeClients.svg'
import tradeInIcon from '../../../assets/img/our-services/tradeIn.svg'
import MainLayout from '../../layout/main'

const MainPage = () => {
	const mainServicesList = [
		{
			id: 1,
			path: '/new-cars',
			title: 'Новые автомобили',
			text: 'Официальный дилер',
			imgPath: newCars
		},
		{
			id: 2,
			path: '/used-cars',
			title: 'Авто с пробегом',
			text: 'По выгодным ценам',
			imgPath: usedCars
		},
		{
			id: 3,
			path: '/service-center',
			title: 'Сервисный центр',
			text: 'Технический осмотр, диагностика и др.',
			imgPath: serviceCenter
		},
		{
			id: 4,
			path: '/',
			title: 'Кузовной ремонт',
			text: 'Ремонт деталей кузова, покраска, полировка и др.',
			imgPath: bodyRepair
		},
		{
			id: 5,
			path: '/',
			title: 'Корпоративным клиентам',
			text: 'Выгодно в лизинг',
			imgPath: toCorporativeClients
		},
		{
			id: 6,
			path: '/',
			title: 'Детейлинг',
			text: 'Полировка кузова, пленка, химчистка и др.',
			imgPath: detailing
		},
		{
			id: 7,
			path: '/',
			title: 'Страхование',
			text: 'ОСАГО, КАСКО и др.',
			imgPath: insurance
		},
		{
			id: 8,
			path: '/',
			title: 'Кредитование',
			text: 'Выгодные условия от 0,1%',
			imgPath: lending
		},
		{
			id: 9,
			path: '/',
			title: 'Аренда автомобилей',
			text: 'Машина для ваших дел',
			imgPath: carsRent
		},
		{
			id: 10,
			path: '/',
			title: 'Выкуп и Trade-In',
			text: 'Быстрая и честная оценка',
			imgPath: tradeIn
		}
	]

	const brandsList = [
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

	const cardList = [
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
	]

	const brands = [
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
	]

	const cities = ['Все', 'Уфа', 'Стерлитамак', 'Октябрьский', 'Белебей']

	const tabServices = ['Все', 'Продажа', 'Сервис', 'Детейлинг']

	const questionServices = ['Покупка', 'Сервис', 'Услуги']

	const specialOffersCards = [
		{
			image: havalSpecialOffersBckg,
			link: '/'
		},
		{
			image: moskvichSpecialOffersBckg,
			link: '/'
		},
		{
			image: omodaSpecialOffersBckg,
			link: '/'
		},
		{
			image: havalSpecialOffersBckg,
			link: '/'
		},
		{
			image: moskvichSpecialOffersBckg,
			link: '/'
		},
		{
			image: omodaSpecialOffersBckg,
			link: '/'
		}
	]

	const specialOffersText = [
		{
			title: 'Специальные предложения',
			titleMobile: 'Спецпредложения'
		}
	]

	const ourServicesCards = [
		{
			id: 1,
			href: '/',
			title: 'Выкуп и Trade-In',
			text: 'Выкупим или обменяем ваш автомобиль на новый',
			icon: tradeInIcon
		},
		{
			id: 2,
			href: '/service-center',
			title: 'Сервисный центр',
			text: 'Технический осмотр, диагностика и др.',
			icon: serviceCenterIcon
		},
		{
			id: 3,
			href: '/',
			title: 'Кредитование',
			text: 'Выгодные условия от 0,1%',
			icon: lendingIcon
		},
		{
			id: 4,
			href: '/',
			title: 'Аренда автомобилей',
			text: 'Автомобиль для любых целей',
			icon: carsRentIcon
		},
		{
			id: 5,
			href: '/',
			title: 'Корпоративным клиентам',
			text: 'Удобные и выгодные условия лизинга автомобилей',
			icon: toCorporativeClientsIcon
		},
		{
			id: 6,
			href: '/',
			title: 'Кузовной ремонт',
			text: 'Ремонт деталей кузова, покраска, полировка и др.',
			icon: bodyRepairIcon
		},
		{
			id: 7,
			href: '/',
			title: 'Страхование',
			text: 'ОСАГО, КАСКО и др.',
			icon: insuranceIcon
		},
		{
			id: 8,
			href: '/',
			title: 'Детейлинг',
			text: 'Полировка кузова, пленка, химчистка и др.',
			icon: detailingIcon
		}
	]

	const reviewsCards = [
		{
			video: omodaVideo,
			text: '2024 Chery Omoda 5 — Великолепный компактный внедорожник!'
		},
		{
			video: moskvichVideo,
			text: 'МОСКВИЧ 3 — лучше Лады! Двигатель, вариатор, подвеска, бензин и цена / тест и обзор'
		},
		{
			video: jaecooVideo,
			text: 'JAECOO J7 ТЕСТ ДРАЙВ У ДИЛЕРА, обзор jaecoo j7, лучший китайский кроссовер за 3 миллиона рублей'
		},
		{
			video: omodaVideo,
			text: '2024 Chery Omoda 5 — Великолепный компактный внедорожник!'
		},
		{
			video: moskvichVideo,
			text: 'МОСКВИЧ 3 — лучше Лады! Двигатель, вариатор, подвеска, бензин и цена / тест и обзор'
		},
		{
			video: jaecooVideo,
			text: 'JAECOO J7 ТЕСТ ДРАЙВ У ДИЛЕРА, обзор jaecoo j7, лучший китайский кроссовер за 3 миллиона рублей'
		}
	]

	const questionText = [
		{
			question: 'У вас возник вопрос?',
			description:
				'Задайте свой вопрос в форме, выбрав тему Покупка, Сервис или Услуги. Мы свяжемся с вами в течении дня, ответим на все вопросы, запишем на тест-драйв, сервис или ремонт при необходимости.',
			descriptionMobile: 'Мы ответим на все вопросы, запишем на тест-драйв, сервис или ремонт при необходимости.',
			socialNetworkText: 'Или напишите нам в социальных сетях',
			policyText: 'Нажимая на кнопку, вы соглашаетесь с ',
			policyLink: 'Политикой конфиденциальности',
			btn: 'Отправить вопрос',
			btnMobile: 'Задать вопрос'
		}
	]

	const aboutText = [
		{
			title: 'Башавтоком - лидер на автомобильном рынке Башкирии',
			points: [
				{
					id: 0,
					image: shieldAbout,
					text: 'Официальный дилер брендов Omoda, Changan Auto, Jaecoo, Exeed, Москвич, Lada, Haval.'
				},
				{
					id: 1,
					image: settingAbout,
					text: 'Обслуживаем автомобили в нашем сервисном центре, обеспечивая безопасность и комфорт'
				},
				{
					id: 2,
					image: usersAbout,
					text: '850 сотрудников Башавтоком — профессионалы своего дела, и каждый день делают всё для вашего удобства'
				}
			],
			btn: 'Подробнее о компании',
			achievements: [
				{
					title: '30 лет',
					text: 'Продаём автомобили с 1992 года'
				},
				{
					title: '100 000+',
					text: 'Автомобилей продали за все время работы'
				},
				{
					title: '4 города',
					text: 'Уфа, Октябрьский, Стерлитамак, Белебей'
				}
			],
			firstImg: mainEntrance,
			secondImg: car
		}
	]

	const events = [
		{
			title: '',
			cards: [
				{
					image: omodaEvent,
					href: '/',
					title: 'ОМОDА СУПЕРКАСКО по супер цене в Башавтоком!',
					date: '23.01.2024'
				},
				{
					image: jaecooEvent,
					href: '/',
					title: 'JAECOO наращивает присутствие на глобальном рынке',
					date: '24.11.2023'
				},
				{
					image: ladaEvent,
					href: '/',
					title: 'Новое специальное предложение на шиномонтаж в LADA «Башавтоком»',
					date: '23.01.2024'
				},
				{
					image: changanEvent,
					href: '/',
					title: 'CHANGAN: 20 лет инноваций, с богатым наследием итальянского дизайна',
					date: '23.01.2024'
				}
			]
		}
	]

	return (
		<MainLayout>
			<MainServices mainServicesList={mainServicesList} />
			<Brands title="Найдите свой бренд" viewTabs brandsList={brandsList} />
			<SpecialOffers
				specialOffersText={specialOffersText}
				specialOffersCards={specialOffersCards}
				comboboxValues={brands}
				items={tabServices}
			/>
			<OurServices ourServicesCards={ourServicesCards} />
			<Reviews reviewsCards={reviewsCards} />
			<Question questionText={questionText} comboboxValues={brands} items={questionServices} />
			<DealerAndServiceCenters
				title="Дилерские и сервисные центры"
				cardList={cardList}
				comboboxValues={brands}
				items={cities}
			/>
			<About aboutText={aboutText} />
			<Events events={events} />
		</MainLayout>
	)
}
export default MainPage
