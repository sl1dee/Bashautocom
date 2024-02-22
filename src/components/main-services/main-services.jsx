import cn from 'classnames'
import React from 'react'

import bodyRepair from '../../../assets/img/main-services/bodyRepair.png'
import carsRent from '../../../assets/img/main-services/carsRent.png'
import detailing from '../../../assets/img/main-services/detailing.png'
import insurance from '../../../assets/img/main-services/insurance.png'
import lending from '../../../assets/img/main-services/lending.png'
import newCars from '../../../assets/img/main-services/newCars.png'
import serviceСenter from '../../../assets/img/main-services/serviceСenter.png'
import toCorporativeClients from '../../../assets/img/main-services/toCorporativeClients.png'
import tradeIn from '../../../assets/img/main-services/tradeIn.png'
import usedCars from '../../../assets/img/main-services/usedCars.png'
import cl from './main-services.module.scss'

const MainServices = () => {
	const servicesCards = [
		{
			id: 1,
			title: 'Новые автомобили',
			text: 'Официальный дилер',
			imgPath: newCars
		},
		{
			id: 2,
			title: 'Авто с пробегом',
			text: 'По выгодным ценам',
			imgPath: usedCars
		},
		{
			id: 3,
			title: 'Сервисный центр',
			text: 'Технический осмотр, диагностика и др.',
			imgPath: serviceСenter
		},
		{
			id: 4,
			title: 'Кузовной ремонт',
			text: 'Ремонт деталей кузова, покраска, полировка и др.',
			imgPath: bodyRepair
		},
		{
			id: 5,
			title: 'Корпоративным клиентам',
			text: 'Выгодно в лизинг',
			imgPath: toCorporativeClients
		},
		{
			id: 6,
			title: 'Детейлинг',
			text: 'Полировка кузова, пленка, химчистка и др.',
			imgPath: detailing
		},
		{
			id: 7,
			title: 'Страхование',
			text: 'ОСАГО, КАСКО и др.',
			imgPath: insurance
		},
		{
			id: 8,
			title: 'Кредитование',
			text: 'Выгодные условия от 0,1%',
			imgPath: lending
		},
		{
			id: 9,
			title: 'Аренда автомобилей',
			text: 'Машина для ваших дел',
			imgPath: carsRent
		},
		{
			id: 10,
			title: 'Выкуп и Trade-In',
			text: 'Быстрая и честная оценка',
			imgPath: tradeIn
		}
	]

	return (
		<div className={cl.mainServices}>
			<div className="container-fluid p-0">
				<div className={cn([cl.mainServicesCards])}>
					<div className="row row-cols-5">
						{servicesCards.map(({ title, text, imgPath }) => (
							<div className={cn([cl.card])}>
								<div className={cl.cardTitle}>{title}</div>
								<div className={cl.cardText}>{text}</div>
								<img src={imgPath} alt="" className={cl.cardImg} />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainServices
