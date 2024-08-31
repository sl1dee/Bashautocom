import JetourDashing from '@assets/img/used-cars/JetourDashing.jpg'
import JetourX90Plus from '@assets/img/used-cars/JetourX90Plus.jpg'
import KiaPicanto from '@assets/img/used-cars/KiaPicanto.jpg'
import KiaRio from '@assets/img/used-cars/KiaRio.jpg'
import KiaRioX from '@assets/img/used-cars/KiaRioX.png'
import LadaVesta from '@assets/img/used-cars/LadaVesta.jpg'
import cn from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

import cl from './rent-cars.module.scss'

const RentCars = () => {
	const carsList = [
		{
			id: 0,
			image: KiaRioX,
			name: 'LADA Granta',
			year: '2022',
			horsepower: '89 л.с.',
			volume: '1.6 л.',
			gearbox: 'Автомат',
			gas: 'Бензин',
			price: 'от 2 000 ₽/сутки'
		},
		{
			id: 1,
			image: JetourX90Plus,
			name: 'Toyota RAV4',
			year: '2021',
			horsepower: '197 л.с.',
			volume: '2.5 л.',
			gearbox: 'Автомат',
			gas: 'Бензин',
			price: 'от 6 000 ₽/сутки'
		},
		{
			id: 2,
			image: KiaRio,
			name: 'Hyundai Solaris',
			year: '2021',
			horsepower: '123 л.с.',
			volume: '1.6 л.',
			gearbox: 'Механика',
			gas: 'Пропан',
			price: 'от 2 000 ₽/сутки'
		},
		{
			id: 3,
			image: JetourDashing,
			name: 'LADA Granta',
			year: '2023',
			horsepower: '89 л.с.',
			volume: '1.6 л.',
			gearbox: 'Механика',
			gas: 'Пропан',
			price: 'от 1 800 ₽/сутки'
		}
	]

	return (
		<div className={cl.rent}>
			<div className="container">
				<div className={cn([cl.rentWrapper, 'd-flex', 'flex-column'])}>
					<h2 className={cn([cl.rentWrapperTitle, 'mb-0'])}>Автомобили в аренду</h2>
					<div className={cn([cl.rentWrapperCards, 'd-grid'])}>
						{carsList.map(({ id, image, name, year, horsepower, volume, gearbox, gas, price }) => (
							<div className={cn([cl.rentWrapperCardsCard, 'd-flex', 'flex-column'])} key={id}>
								<img src={image} alt="" />
								<div className={cn([cl.information, 'd-flex', 'flex-column'])}>
									<div className={cn([cl.firstBlock, 'd-flex', 'flex-column'])}>
										<h5 className={cn([cl.name, 'mb-0'])}>{name}</h5>
										<div className={cl.year}>{year}, {horsepower}, {volume}</div>
									</div>
									<div className={cn([cl.secondBlock, 'd-none', 'd-sm-flex', 'flex-column'])}>
										<span className={cn(['d-flex'])}>
											<div className={cn([cl.gearbox, 'd-flex', 'align-items-center'])}>{gearbox}</div>
											<div className={cn([cl.gas, 'd-flex', 'align-items-center'])}>{gas}</div>
										</span>
									</div>
									<h4 className={cn([cl.price, 'mb-0'])}>{price}</h4>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default RentCars
