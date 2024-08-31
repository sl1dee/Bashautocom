import React, {useEffect, useRef} from 'react'

import About from '@components/about/about.jsx'
import LogoGrid from '@components/LogoGrid/LogoGrid.jsx'
import DealerAndServiceCenters from '@components/dealer-and-service-centers/dealer-and-service-centers.jsx'
import Events from '@components/events/events.jsx'
import MainServices from '@components/main-services/main-services.jsx'
import OurServices from '@components/our-services/our-services.jsx'
import Question from '@components/question/question.jsx'
import Reviews from '@components/reviews/reviews.jsx'
import SpecialOffers from '@components/special-offers/special-offers.jsx'
import {useLocation} from "react-router-dom";


const MainPage = () => {

	const mainServicesList = [
		{
			id: 1,
			path: '/new-cars',
			title: 'Новые автомобили',
			text: 'Официальный дилер',
			imgPath: './assets/img/main-services/newCars.png'
		},
		{
			id: 2,
			path: '/used-cars',
			title: 'Авто с пробегом',
			text: 'По выгодным ценам',
			imgPath: './assets/img/main-services/usedCars.png'
		},
		{
			id: 3,
			path: '/service-center',
			title: 'Сервисный центр',
			text: 'Технический осмотр, диагностика и др.',
			imgPath: './assets/img/main-services/serviceСenter.png'
		},
		{
			id: 4,
			path: '/body-repair',
			title: 'Кузовной ремонт',
			text: 'Ремонт деталей кузова, покраска, полировка и др.',
			imgPath: './assets/img/main-services/bodyRepair.png'
		},
		{
			id: 5,
			path: '/',
			title: 'Корпоративным клиентам',
			text: 'Выгодно в лизинг',
			imgPath: './assets/img/main-services/toCorporativeClients.png'
		},
		{
			id: 6,
			path: '/detailing',
			title: 'Детейлинг',
			text: 'Полировка кузова, пленка, химчистка и др.',
			imgPath: './assets/img/main-services/detailing.png'
		},
		{
			id: 7,
			path: '/insurance',
			title: 'Страхование',
			text: 'ОСАГО, КАСКО и др.',
			imgPath: './assets/img/main-services/insurance.png'
		},
		{
			id: 8,
			path: '/credit',
			title: 'Кредитование',
			text: 'Выгодные условия от 0,1%',
			imgPath: './assets/img/main-services/lending.png'
		},
		{
			id: 9,
			path: '/',
			title: 'Аренда автомобилей',
			text: 'Машина для ваших дел',
			imgPath: './assets/img/main-services/carsRent.png'
		},
		{
			id: 10,
			path: '/',
			title: 'Выкуп и Trade-In',
			text: 'Быстрая и честная оценка',
			imgPath: './assets/img/main-services/tradeIn.png'
		}
	]

	const brandsList = [
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
		},
		{
			id: 15,
			href: '/service-center',
			imgPath: './assets/img/brands/livan.svg'
		}
	]

	const cardList = [
		{
			bckgImg: './assets/img/dealer-and-service-centers/haval.jpg',
			name: 'Haval Центр Уфа',
			services: 'Продажа, сервис, запчасти',
		},
		{
			bckgImg: './assets/img/dealer-and-service-centers/moskvich.jpg',
			name: 'Москвич Центр Уфа',
			services: 'Продажа, сервис, запчасти',
		},
		{
			bckgImg: './assets/img/dealer-and-service-centers/omoda.jpg',
			name: 'Omoda Центр Уфа',
			services: 'Продажа, сервис, запчасти',
		},
		{
			bckgImg: './assets/img/dealer-and-service-centers/haval.jpg',
			name: 'Haval Центр Уфа',
			services: 'Продажа, сервис, запчасти',
		},
		{
			bckgImg: './assets/img/dealer-and-service-centers/moskvich.jpg',
			name: 'Москвич Центр Уфа',
			services: 'Продажа, сервис, запчасти',
		},
		{
			bckgImg: './assets/img/dealer-and-service-centers/omoda.jpg',
			name: 'Omoda Центр Уфа',
			services: 'Продажа, сервис, запчасти',
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
			image: './assets/img/special-offer/haval.jpg',
			link: '/'
		},
		{
			image: './assets/img/special-offer/moskvich.jpg',
			link: '/'
		},
		{
			image: './assets/img/special-offer/omoda.jpg',
			link: '/'
		},
		{
			image: './assets/img/special-offer/haval.jpg',
			link: '/'
		},
		{
			image: './assets/img/special-offer/moskvich.jpg',
			link: '/'
		},
		{
			image: './assets/img/special-offer/omoda.jpg',
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
			icon: './assets/img/our-services/tradeIn.svg'
		},
		{
			id: 2,
			href: '/service-center',
			title: 'Сервисный центр',
			text: 'Технический осмотр, диагностика и др.',
			icon: './assets/img/our-services/serviceCenter.svg'
		},
		{
			id: 3,
			href: '/credit',
			title: 'Кредитование',
			text: 'Выгодные условия от 0,1%',
			icon: './assets/img/our-services/lending.svg'
		},
		{
			id: 4,
			href: '/',
			title: 'Аренда автомобилей',
			text: 'Автомобиль для любых целей',
			icon: './assets/img/our-services/carsRent.svg'
		},
		{
			id: 5,
			href: '/',
			title: 'Корпоративным клиентам',
			text: 'Удобные и выгодные условия лизинга автомобилей',
			icon: './assets/img/our-services/toCorporativeClients.svg'
		},
		{
			id: 6,
			href: '/body-repair',
			title: 'Кузовной ремонт',
			text: 'Ремонт деталей кузова, покраска, полировка и др.',
			icon: './assets/img/our-services/bodyRepair.svg'
		},
		{
			id: 7,
			href: '/insurance',
			title: 'Страхование',
			text: 'ОСАГО, КАСКО и др.',
			icon: './assets/img/our-services/insurance.svg'
		},
		{
			id: 8,
			href: '/detailing',
			title: 'Детейлинг',
			text: 'Полировка кузова, пленка, химчистка и др.',
			icon: './assets/img/our-services/detailing.svg'
		}
	]

	const reviewsCards = [
		{
			video: './assets/img/reviews/omoda.jpg',
			text: '2024 Chery Omoda 5 — Великолепный компактный внедорожник!'
		},
		{
			video: './assets/img/reviews/moskvich.jpg',
			text: 'МОСКВИЧ 3 — лучше Лады! Двигатель, вариатор, подвеска, бензин и цена / тест и обзор'
		},
		{
			video: './assets/img/reviews/jaecoo.jpg',
			text: 'JAECOO J7 ТЕСТ ДРАЙВ У ДИЛЕРА, обзор jaecoo j7, лучший китайский кроссовер за 3 миллиона рублей'
		},
		{
			video: './assets/img/reviews/omoda.jpg',
			text: '2024 Chery Omoda 5 — Великолепный компактный внедорожник!'
		},
		{
			video: './assets/img/reviews/moskvich.jpg',
			text: 'МОСКВИЧ 3 — лучше Лады! Двигатель, вариатор, подвеска, бензин и цена / тест и обзор'
		},
		{
			video: './assets/img/reviews/jaecoo.jpg',
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
					image: './assets/img/about/shield.svg',
					text: 'Официальный дилер брендов Omoda, Changan, Jaecoo, Exeed, Москвич, Lada, Haval, Livan'
				},
				{
					id: 1,
					image: './assets/img/about/setting.svg',
					text: 'Обслуживаем автомобили в нашем сервисном центре, обеспечивая безопасность и комфорт'
				},
				{
					id: 2,
					image: './assets/img/about/users.svg',
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
			firstImg: './assets/img/about/mainEntrance.jpg',
			secondImg: './assets/img/about/car.jpg'
		}
	]

	const events = [
		{
			title: '',
			cards: [
				{
					image: './assets/img/events/omoda.jpg',
					href: '/',
					title: 'ОМОDА СУПЕРКАСКО по супер цене в Башавтоком!',
					date: '23.01.2024'
				},
				{
					image: './assets/img/events/jaecoo.jpg',
					href: '/',
					title: 'JAECOO наращивает присутствие на глобальном рынке',
					date: '24.11.2023'
				},
				{
					image: './assets/img/events/lada.jpg',
					href: '/',
					title: 'Новое специальное предложение на шиномонтаж в LADA «Башавтоком»',
					date: '23.01.2024'
				},
				{
					image: './assets/img/events/changan.jpg',
					href: '/',
					title: 'CHANGAN: 20 лет инноваций, с богатым наследием итальянского дизайна',
					date: '23.01.2024'
				}
			]
		}
	]

	const location = useLocation();

	useEffect(() => {
		if (location.hash === '#services') {
			const element = document.getElementById('services');
			if (element) {
				const y = element.getBoundingClientRect().top + window.pageYOffset - 100;
				window.scrollTo({ top: y, behavior: 'smooth' });
			}
		}
	}, [location.hash]);

	return (
		<>
			<MainServices mainServicesList={mainServicesList} />
			<LogoGrid title="Найдите свой бренд" viewTabs logos={brandsList} />
			<SpecialOffers
				specialOffersText={specialOffersText}
				specialOffersCards={specialOffersCards}
				comboboxValues={brands}
				items={tabServices}
			/>
			<div id="services">
				<OurServices ourServicesCards={ourServicesCards} />
			</div>
			<Reviews reviewsCards={reviewsCards} />
			<Question questionText={questionText} comboboxValues={brands} items={questionServices} />
			<DealerAndServiceCenters
				title="Центры и контакты"
				cardList={cardList}
				comboboxValues={brands}
				items={cities}
			/>
			<About aboutText={aboutText} />
			<Events events={events} />
		</>
	)
}
export default MainPage
