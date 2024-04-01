import JetourDashing from '@assets/img/used-cars/JetourDashing.jpg'
import JetourX90Plus from '@assets/img/used-cars/JetourX90Plus.jpg'
import KiaPicanto from '@assets/img/used-cars/KiaPicanto.jpg'
import KiaRio from '@assets/img/used-cars/KiaRio.jpg'
import KiaRioX from '@assets/img/used-cars/KiaRioX.png'
import LadaVesta from '@assets/img/used-cars/LadaVesta.jpg'
import { CheckboxGroup } from '@consta/uikit/CheckboxGroup'
import { RadioGroup } from '@consta/uikit/RadioGroup'
import cn from 'classnames'
import React, { useState } from 'react'

import cl from './used-cars.module.scss'

const UsedCars = () => {
	const [brand, setBrand] = useState(null)
	const [body, setBody] = useState(null)
	// const [value, setValue] = useState(items[0])
	const [drive, setDrive] = useState(null)
	const [gearbox, setGearbox] = useState(null)

	const brands = [
		{ name: 'Audi' },
		{ name: 'BAIC' },
		{ name: 'BMW' },
		{ name: 'Cadillac' },
		{ name: 'Changan' },
		{ name: 'Chery' }
	]

	const bodies = [
		{ name: 'Седан' },
		{ name: 'Кроссовер' },
		{ name: 'Хетчбэк' },
		{ name: 'Внедорожник' },
		{ name: 'Купе' },
		{ name: 'Лифтбэк' },
		{ name: 'Универсал' },
		{ name: 'Пикап' }
	]
	// const owners = [{ name: 'Один владелец' }, { name: 'Не более 2 владельцев' }, { name: 'Не более 3 владельцев' }]
	// const items = [
	// 	{
	// 		name: 'Один владелец'
	// 	},
	// 	{
	// 		name: 'Не более 2 владельцев'
	// 	},
	// 	{
	// 		name: 'Не более 3 владельцев'
	// 	}
	// ]
	const drives = [{ name: 'Любой' }, { name: 'Передний' }, { name: 'Задний' }, { name: 'Полный' }]
	const gearboxes = [{ name: 'Автоматическая' }, { name: 'Робот' }, { name: 'Вариатор' }, { name: 'Механическая' }]

	const carsList = [
		{
			image: KiaRioX,
			name: 'Kia Rio X',
			year: '2020',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '1 850 000 ₽'
		},
		{
			image: JetourX90Plus,
			name: 'Jetour X90 Plus',
			year: '2023',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '3 490 000 ₽'
		},
		{
			image: KiaRio,
			name: 'Kia Rio',
			year: '2020',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '1 850 000 ₽'
		},
		{
			image: JetourDashing,
			name: 'Jetour Dashing',
			year: '2020',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '3 200 000 ₽'
		},
		{
			image: LadaVesta,
			name: 'ВАЗ (LADA) Vesta',
			year: '2020',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '1 150 000 ₽'
		},
		{
			image: KiaPicanto,
			name: 'KIA Picanto',
			year: '2009',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '580 000 ₽'
		},
		{
			image: KiaRioX,
			name: 'Kia Rio X',
			year: '2020',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '1 850 000 ₽'
		},
		{
			image: JetourX90Plus,
			name: 'Jetour X90 Plus',
			year: '2023',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '3 490 000 ₽'
		},
		{
			image: KiaRio,
			name: 'Kia Rio',
			year: '2020',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '1 850 000 ₽'
		},
		{
			image: JetourDashing,
			name: 'Jetour Dashing',
			year: '2020',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '3 200 000 ₽'
		},
		{
			image: LadaVesta,
			name: 'ВАЗ (LADA) Vesta',
			year: '2020',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '1 150 000 ₽'
		},
		{
			image: KiaPicanto,
			name: 'KIA Picanto',
			year: '2009',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '580 000 ₽'
		}
	]

	return (
		<div className={cn([cl.usedCars, 'container', 'p-0', 'd-flex', 'flex-column'])}>
			<h1 className={cl.title}>Авто с пробегом</h1>
			<div className={cn([cl.usedCarsContent, 'd-flex'])}>
				<div className={cn([cl.usedCarsContentFilter, 'd-flex', 'flex-column'])}>
					<h5 className={cn([cl.usedCarsContentFilterTitle, 'mb-0'])}>Фильтры</h5>
					<div className={cn([cl.block, 'd-flex', 'flex-column'])}>
						<span>Цена, руб</span>
					</div>
					<div className={cn([cl.block, 'd-flex', 'flex-column'])}>
						<span>Пробег, км</span>
					</div>
					<div className={cn([cl.block, 'd-flex', 'flex-column'])}>
						<span>Год</span>
					</div>
					<div className={cn([cl.block, 'd-flex', 'flex-column'])}>
						<span>Марка</span>
						<div>
							<CheckboxGroup
								value={brand}
								items={brands}
								getItemLabel={(item) => item.name}
								getItemDisabled={(item) => item.disabled}
								onChange={setBrand}
								name="CheckboxGroup"
							/>
						</div>
					</div>
					<div className={cn([cl.block, 'd-flex', 'flex-column'])}>
						<span>Кузов</span>
						<div>
							<CheckboxGroup
								value={body}
								items={bodies}
								getItemLabel={(item) => item.name}
								getItemDisabled={(item) => item.disabled}
								onChange={setBody}
								name="CheckboxGroup"
							/>
						</div>
					</div>
					<div className={cn([cl.block, 'd-flex', 'flex-column'])}>
						<span>Количество владельцев</span>
						<div>
							{/* <RadioGroup */}
							{/*	value={value} */}
							{/*	items={items} */}
							{/*	getItemLabel={(item) => item.name} */}
							{/*	getItemDisabled={(item) => item.disabled} */}
							{/*	onClick={({ value }) => setValue(value)} */}
							{/* /> */}
						</div>
					</div>
					<div className={cn([cl.block, 'd-flex', 'flex-column'])}>
						<span>Привод</span>
						<div>
							<CheckboxGroup
								value={drive}
								items={drives}
								getItemLabel={(item) => item.name}
								getItemDisabled={(item) => item.disabled}
								onChange={setDrive}
								name="CheckboxGroup"
							/>
						</div>
					</div>
					<div className={cn([cl.block, 'd-flex', 'flex-column'])}>
						<span>Коробка</span>
						<div>
							<CheckboxGroup
								value={gearbox}
								items={gearboxes}
								getItemLabel={(item) => item.name}
								getItemDisabled={(item) => item.disabled}
								onChange={setGearbox}
								name="CheckboxGroup"
							/>
						</div>
					</div>
				</div>
				<div className={cn([cl.usedCarsContentCards, 'd-grid'])}>
					{carsList.map(({ image, name, year, owner, mileage, gearbox, drive, price }) => (
						<div className={cn([cl.usedCarsContentCardsCard, 'd-flex', 'flex-column'])}>
							<img src={image} alt="" />
							<div className={cn([cl.information, 'd-flex', 'flex-column'])}>
								<div className={cn([cl.firstBlock, 'd-flex', 'flex-column'])}>
									<h5 className={cn([cl.name, 'mb-0'])}>{name}</h5>
									<div className={cl.year}>{year}</div>
								</div>
								<div className={cn([cl.secondBlock, 'd-flex', 'flex-column'])}>
									<span className={cn(['d-flex'])}>
										<div className={cn([cl.owner, 'd-flex', 'align-items-center'])}>{owner}</div>
										<div className={cn([cl.mileage, 'd-flex', 'align-items-center'])}>{mileage}</div>
									</span>
									<span className={cn(['d-flex'])}>
										<div className={cn([cl.gearbox, 'd-flex', 'align-items-center'])}>{gearbox}</div>
										<div className={cn([cl.drive, 'd-flex', 'align-items-center'])}>{drive}</div>
									</span>
								</div>
								<h4 className={cn([cl.price, 'mb-0'])}>{price}</h4>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default UsedCars
