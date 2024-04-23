import close from '@assets/img/new-cars-filter/close.svg'
import funnel from '@assets/img/new-cars-filter/funnel.svg'
import { CheckboxGroup } from '@consta/uikit/CheckboxGroup'
import { RadioGroup } from '@consta/uikit/RadioGroup'
import { Select } from '@consta/uikit/Select'
import { Slider } from '@consta/uikit/Slider'
import cn from 'classnames'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '@ui/button/index.js'

import cl from './used-cars.module.scss'

const UsedCars = () => {
	const [price, setPrice] = useState([20, 50])
	const [mileage, setMileage] = useState([20, 50])

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

	const yearsFrom = [
		{
			label: '2017',
			id: 1
		},
		{
			label: '2016',
			id: 2
		},
		{
			label: '2015',
			id: 3
		}
	]

	const yearsBefore = [
		{
			label: '2023',
			id: 1
		},
		{
			label: '2022',
			id: 2
		},
		{
			label: '2021',
			id: 3
		}
	]
	const drives = [{ name: 'Любой' }, { name: 'Передний' }, { name: 'Задний' }, { name: 'Полный' }]
	const gearboxes = [{ name: 'Автоматическая' }, { name: 'Робот' }, { name: 'Вариатор' }, { name: 'Механическая' }]

	const owners = ['Один владелец', 'Не более 2 владельцев', 'Не более 3 владельцев']

	const [brand, setBrand] = useState(null)
	const [body, setBody] = useState(null)
	const [drive, setDrive] = useState(null)
	const [gearbox, setGearbox] = useState(null)
	const [yearFrom, setYearFrom] = useState(null)
	const [yearBefore, setYearBefore] = useState(null)
	const [owner, setOwner] = useState(owners[0])

	const carsList = [
		{
			image: './assets/img/used-cars/KiaRioX.png',
			name: 'Kia Rio X',
			year: '2020',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '1 850 000 ₽'
		},
		{
			image: './assets/img/used-cars/JetourX90Plus.jpg',
			name: 'Jetour X90 Plus',
			year: '2023',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '3 490 000 ₽'
		},
		{
			image: './assets/img/used-cars/KiaRio.jpg',
			name: 'Kia Rio',
			year: '2020',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '1 850 000 ₽'
		},
		{
			image: './assets/img/used-cars/JetourDashing.jpg',
			name: 'Jetour Dashing',
			year: '2020',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '3 200 000 ₽'
		},
		{
			image: './assets/img/used-cars/LadaVesta.jpg',
			name: 'ВАЗ (LADA) Vesta',
			year: '2020',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '1 150 000 ₽'
		},
		{
			image: './assets/img/used-cars/KiaPicanto.jpg',
			name: 'KIA Picanto',
			year: '2009',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '580 000 ₽'
		},
		{
			image: './assets/img/used-cars/KiaRioX.png',
			name: 'Kia Rio X',
			year: '2020',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '1 850 000 ₽'
		},
		{
			image: './assets/img/used-cars/JetourX90Plus.jpg',
			name: 'Jetour X90 Plus',
			year: '2023',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '3 490 000 ₽'
		},
		{
			image: './assets/img/used-cars/KiaRio.jpg',
			name: 'Kia Rio',
			year: '2020',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '1 850 000 ₽'
		},
		{
			image: './assets/img/used-cars/JetourDashing.jpg',
			name: 'Jetour Dashing',
			year: '2020',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '3 200 000 ₽'
		},
		{
			image: './assets/img/used-cars/LadaVesta.jpg',
			name: 'ВАЗ (LADA) Vesta',
			year: '2020',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '1 150 000 ₽'
		},
		{
			image: './assets/img/used-cars/KiaPicanto.jpg',
			name: 'KIA Picanto',
			year: '2009',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '580 000 ₽'
		}
	]

	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<div className={`${cl.sidebar} ${isOpen ? '' : cl.active}`}>
				<div className={`${isOpen ? cl.sidebarBckg : ''}`} title="Закрыть" onClick={() => setIsOpen(!isOpen)} />
				<div className={cn(cl.group)}>
					<div className={cn([cl.groupFilter, 'd-flex', 'd-xxl-none', 'flex-column'])}>
						<div className={cn([cl.groupFilterHead, 'd-flex', 'align-items-center', 'justify-content-between'])}>
							<h5 className={cn([cl.groupFilterHeadTitle, 'mb-0'])}>Фильтры</h5>
							<img className={cl.groupFilterHeadClose} src={close} alt="close" onClick={() => setIsOpen(!isOpen)} />
						</div>
						<div className={cn([cl.block, 'd-flex', 'flex-column'])}>
							<span>Цена, руб</span>
							<div>
								<Slider
									step={5}
									// label={`Значение ${value[0]}-${value[1]}`}
									onChange={({ value }) => setPrice(value)}
									value={price}
								/>
							</div>
							<div className={cn([cl.inputs, 'd-flex', 'justify-content-between'])}>
								<input type="text" placeholder={price[0]} />
								<input type="text" placeholder={price[1]} />
							</div>
						</div>
						<div className={cn([cl.block, 'd-flex', 'flex-column'])}>
							<span>Пробег, км</span>
							<div>
								<Slider
									step={5}
									// label={`Значение ${value[0]}-${value[1]}`}
									onChange={({ value }) => setMileage(value)}
									value={mileage}
								/>
							</div>
							<div className={cn([cl.inputs, 'd-flex'])}>
								<input type="text" placeholder={mileage[0]} />
								<input type="text" placeholder={mileage[1]} />
							</div>
						</div>
						<div className={cn([cl.block, 'd-flex', 'flex-column'])}>
							<span>Год</span>
							<div className={cn([cl.selectors, 'd-flex'])}>
								<div className={cl.select}>
									<Select
										placeholder="от"
										items={yearsFrom}
										value={yearFrom}
										onChange={({ value }) => setYearFrom(value)}
									/>
								</div>
								<div className={cl.select}>
									<Select
										placeholder="до"
										items={yearsBefore}
										value={yearBefore}
										onChange={({ value }) => setYearBefore(value)}
									/>
								</div>
							</div>
						</div>
						<div className={cn([cl.block, 'd-flex', 'flex-column'])}>
							<span>Марка</span>
							<div>
								<CheckboxGroup
									value={brand}
									items={brands}
									getItemLabel={(item) => item.name}
									getItemDisabled={(item) => item.disabled}
									onChange={({ value }) => setBrand(value)}
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
									onChange={({ value }) => setBody(value)}
									name="CheckboxGroup"
								/>
							</div>
						</div>
						<div className={cn([cl.block, 'd-flex', 'flex-column'])}>
							<span>Количество владельцев</span>
							<div>
								<RadioGroup
									value={owner}
									items={owners}
									getItemLabel={(item) => item}
									onChange={({ value }) => setOwner(value)}
									direction="column"
								/>
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
									onChange={({ value }) => setDrive(value)}
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
									onChange={({ value }) => setGearbox(value)}
									name="CheckboxGroup"
								/>
							</div>
						</div>
						<Button className={cl.btn} colorStyle="primary" sizeStyle="sizeS" onClick={() => setIsOpen(!isOpen)}>
							Принять
						</Button>
					</div>
				</div>
			</div>

			<div className={cn([cl.usedCars, 'container', 'p-0', 'd-flex', 'flex-column'])}>
				<div
					className={cn([
						cl.head,
						'd-flex',
						'justify-content-sm-between',
						'align-items-sm-center',
						'flex-column',
						'flex-sm-row'
					])}
				>
					<h1 className={cn([cl.title, 'mb-0'])}>Авто с пробегом</h1>
					<div className="d-flex d-xxl-none">
						<Button
							sizeStyle="sizeContent"
							colorStyle="Secondary"
							className={cn([cl.btn, 'd-flex'])}
							onClick={() => setIsOpen(!isOpen)}
						>
							<img src={funnel} alt="" />
							<div>Фильтры</div>
						</Button>
					</div>
				</div>
				<div className={cn([cl.usedCarsContent, 'd-flex'])}>
					<div className={cn([cl.usedCarsContentFilter, 'd-none', 'd-xxl-flex', 'flex-column'])}>
						<h5 className={cn([cl.usedCarsContentFilterTitle, 'mb-0'])}>Фильтры</h5>
						<div className={cn([cl.block, 'd-flex', 'flex-column'])}>
							<span>Цена, руб</span>
							<div>
								<Slider
									step={5}
									// label={`Значение ${value[0]}-${value[1]}`}
									onChange={({ value }) => setPrice(value)}
									value={price}
								/>
							</div>
							<div className={cn([cl.inputs, 'd-flex', 'justify-content-between'])}>
								<input type="text" placeholder={price[0]} />
								<input type="text" placeholder={price[1]} />
							</div>
						</div>
						<div className={cn([cl.block, 'd-flex', 'flex-column'])}>
							<span>Пробег, км</span>
							<div>
								<Slider
									step={5}
									// label={`Значение ${value[0]}-${value[1]}`}
									onChange={({ value }) => setMileage(value)}
									value={mileage}
								/>
							</div>
							<div className={cn([cl.inputs, 'd-flex'])}>
								<input type="text" placeholder={mileage[0]} />
								<input type="text" placeholder={mileage[1]} />
							</div>
						</div>
						<div className={cn([cl.block, 'd-flex', 'flex-column'])}>
							<span>Год</span>
							<div className={cn([cl.selectors, 'd-flex'])}>
								<div className={cl.select}>
									<Select
										placeholder="от"
										items={yearsFrom}
										value={yearFrom}
										onChange={({ value }) => setYearFrom(value)}
									/>
								</div>
								<div className={cl.select}>
									<Select
										placeholder="до"
										items={yearsBefore}
										value={yearBefore}
										onChange={({ value }) => setYearBefore(value)}
									/>
								</div>
							</div>
						</div>
						<div className={cn([cl.block, 'd-flex', 'flex-column'])}>
							<span>Марка</span>
							<div>
								<CheckboxGroup
									value={brand}
									items={brands}
									getItemLabel={(item) => item.name}
									getItemDisabled={(item) => item.disabled}
									onChange={({ value }) => setBrand(value)}
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
									onChange={({ value }) => setBody(value)}
									name="CheckboxGroup"
								/>
							</div>
						</div>
						<div className={cn([cl.block, 'd-flex', 'flex-column'])}>
							<span>Количество владельцев</span>
							<div>
								<RadioGroup
									value={owner}
									items={owners}
									getItemLabel={(item) => item}
									onChange={({ value }) => setOwner(value)}
									direction="column"
								/>
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
									onChange={({ value }) => setDrive(value)}
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
									onChange={({ value }) => setGearbox(value)}
									name="CheckboxGroup"
								/>
							</div>
						</div>
					</div>
					<div className={cn([cl.usedCarsContentCards, 'd-grid'])}>
						{carsList.map(({ image, name, year, owner, mileage, gearbox, drive, price }) => (
							<Link to="/used-car">
								<div className={cn([cl.usedCarsContentCardsCard, 'd-flex', 'flex-column'])}>
									<img src={image} alt="" />
									<div className={cn([cl.information, 'd-flex', 'flex-column'])}>
										<div className={cn([cl.firstBlock, 'd-flex', 'flex-column'])}>
											<h5 className={cn([cl.name, 'mb-0'])}>{name}</h5>
											<div className={cl.year}>{year}</div>
										</div>
										<div className={cn([cl.secondBlock, 'd-none', 'd-sm-flex', 'flex-column'])}>
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
							</Link>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default UsedCars
