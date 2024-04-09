import cn from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

import bodyRepair from '../../../assets/img/main-services/bodyRepair.png'
import carsRent from '../../../assets/img/main-services/carsRent.png'
import detailing from '../../../assets/img/main-services/detailing.png'
import insurance from '../../../assets/img/main-services/insurance.png'
import lending from '../../../assets/img/main-services/lending.png'
import newCars from '../../../assets/img/main-services/newCars.png'
import serviceCenter from '../../../assets/img/main-services/serviceСenter.png'
import toCorporativeClients from '../../../assets/img/main-services/toCorporativeClients.png'
import tradeIn from '../../../assets/img/main-services/tradeIn.png'
import usedCars from '../../../assets/img/main-services/usedCars.png'
import cl from './main-services.module.scss'

const MainServices = () => {
	const servicesList = [
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

	return (
		<div className={cl.mainServices}>
			<div className="container p-0">
				<div className={cn([cl.mainServicesCards])}>
					{/* <div className="row row-cols-5 gap-5"> */}
					{servicesList.map(({ id, path, title, text, imgPath }) => (
						<div>
							<Link to={path}>
								<div className={cn([cl.cardWrapper, 'elem', 'd-flex', 'justify-content-center'])} key={id}>
									<div className={cn([cl.card])}>
										<div className={cl.cardTitle}>{title}</div>
										<div className={cl.cardText}>{text}</div>
										<img src={imgPath} alt="" className={cl.cardImg} />
									</div>
								</div>
							</Link>
						</div>
					))}
					{/* </div> */}
				</div>
			</div>
		</div>
	)
}

export default MainServices
