import cn from 'classnames'
import React from 'react'

import bodyRepair from '../../../assets/img/our-services/bodyRepair.svg'
import carsRent from '../../../assets/img/our-services/carsRent.svg'
import detailing from '../../../assets/img/our-services/detailing.svg'
import insurance from '../../../assets/img/our-services/insurance.svg'
import lending from '../../../assets/img/our-services/lending.svg'
import serviceСenter from '../../../assets/img/our-services/serviceСenter.svg'
import toCorporativeClients from '../../../assets/img/our-services/toCorporativeClients.svg'
import tradeIn from '../../../assets/img/our-services/tradeIn.svg'
import Button from '../../ui/button/index.js'
import cl from './our-services.module.scss'

const OurServices = () => {
	const servicesList = [
		{
			id: 1,
			title: 'Выкуп и Trade-In',
			text: 'Выкупим или обменяем ваш автомобиль на новый',
			icon: tradeIn
		},
		{
			id: 2,
			title: 'Сервисный центр',
			text: 'Технический осмотр, диагностика и др.',
			icon: serviceСenter
		},
		{
			id: 3,
			title: 'Кредитование',
			text: 'Выгодные условия от 0,1%',
			icon: lending
		},
		{
			id: 4,
			title: 'Аренда автомобилей',
			text: 'Автомобиль для любых целей',
			icon: carsRent
		},
		{
			id: 5,
			title: 'Корпоративным клиентам',
			text: 'Удобные и выгодные условия лизинга автомобилей',
			icon: toCorporativeClients
		},
		{
			id: 6,
			title: 'Кузовной ремонт',
			text: 'Ремонт деталей кузова, покраска, полировка и др.',
			icon: bodyRepair
		},
		{
			id: 7,
			title: 'Страхование',
			text: 'ОСАГО, КАСКО и др.',
			icon: insurance
		},
		{
			id: 8,
			title: 'Детейлинг',
			text: 'Полировка кузова, пленка, химчистка и др.',
			icon: detailing
		}
	]

	return (
		<div className={cl.ourServices}>
			<div className="container p-0">
				<div className={cn([cl.ourServicesInformation, 'd-flex', 'flex-column'])}>
					<h1 className={cn([cl.ourServicesInformationTitle, 'd-flex', 'justify-content-center', 'mb-0'])}>
						Наши услуги
					</h1>
					<div className={cn([cl.ourServicesInformationCards, 'row', 'row-cols-5'])}>
						{servicesList.map(({ id, title, text, icon }) => (
							<div className={cn([cl.cardWrapper, 'd-flex'])} key={id}>
								<div className={cn([cl.card, 'd-flex', 'justify-content-between'])}>
									<div className="d-flex flex-column w-100">
										<div className={cl.cardTitle}>{title}</div>
										<div className={cl.cardText}>{text}</div>
										<Button sizeStyle="sizeL" colorStyle="secondary" className={cl.cardButton}>
											Подробнее
										</Button>
									</div>
									<img src={icon} alt="" className={cl.cardImg} />
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default OurServices
