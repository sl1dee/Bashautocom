import close from '@assets/img/new-cars-filter/close.svg'
import funnel from '@assets/img/new-cars-filter/funnel.svg'
import { CheckboxGroup } from '@consta/uikit/CheckboxGroup'
import { RadioGroup } from '@consta/uikit/RadioGroup'
import { Select } from '@consta/uikit/Select'
import { Slider } from '@consta/uikit/Slider'
import cn from 'classnames'
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@consta/uikit/Button';

import cl from './used-cars.module.scss'
import {Pagination} from "@consta/uikit/Pagination";
import {createIcon} from "@consta/icons/Icon";

const UsedCars = () => {
	const [page, setPage] = useState(1);
	const [minPrice, setMinPrice] = useState(0);
	const [maxPrice, setMaxPrice] = useState(1000000);
	const [minMileage, setMinMileage] = useState(0);
	const [maxMileage, setMaxMileage] = useState(100000);

	const filters = [
		{
			alias: 'Years',
			label: 'год',
			value1: [
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
			],
			value2: [
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
		},
		{
			alias: 'Brands',
			value: [
				{ name: 'Audi' },
				{ name: 'BAIC' },
				{ name: 'BMW' },
				{ name: 'Cadillac' },
				{ name: 'Changan' },
				{ name: 'Chery' }
			]
		},
		{
			alias: 'Bodies',
			value: [
				{ name: 'Седан' },
				{ name: 'Кроссовер' },
				{ name: 'Хетчбэк' },
				{ name: 'Внедорожник' },
				{ name: 'Купе' },
				{ name: 'Лифтбэк' },
				{ name: 'Универсал' },
				{ name: 'Пикап' }
			]
		},
		{
			alias: 'Owners',
			value: ['Один владелец', 'Не более 2 владельцев', 'Не более 3 владельцев'
				// { name: 'Один владелец' },
				// { name: 'Не более 2 владельцев' },
				// { name: 'Не более 3 владельцев' }
			]
		},
		{
			alias: 'Drivers',
			value: [
				{ name: 'Любой' },
				{ name: 'Передний' },
				{ name: 'Задний' },
				{ name: 'Полный' }
			]
		},
		{
			alias: 'Gearboxes',
			value: [
				{ name: 'Автоматическая' },
				{ name: 'Робот' },
				{ name: 'Вариатор' },
				{ name: 'Механическая' }
			]
		}
	]

	// const brands = [
	// 	{ name: 'Audi' },
	// 	{ name: 'BAIC' },
	// 	{ name: 'BMW' },
	// 	{ name: 'Cadillac' },
	// 	{ name: 'Changan' },
	// 	{ name: 'Chery' }
	// ]

	// const bodies = [
	// 	{ name: 'Седан' },
	// 	{ name: 'Кроссовер' },
	// 	{ name: 'Хетчбэк' },
	// 	{ name: 'Внедорожник' },
	// 	{ name: 'Купе' },
	// 	{ name: 'Лифтбэк' },
	// 	{ name: 'Универсал' },
	// 	{ name: 'Пикап' }
	// ]

	// const yearsFrom = [
	// 	{
	// 		label: '2017',
	// 		id: 1
	// 	},
	// 	{
	// 		label: '2016',
	// 		id: 2
	// 	},
	// 	{
	// 		label: '2015',
	// 		id: 3
	// 	}
	// ]

	// const yearsBefore = [
	// 	{
	// 		label: '2023',
	// 		id: 1
	// 	},
	// 	{
	// 		label: '2022',
	// 		id: 2
	// 	},
	// 	{
	// 		label: '2021',
	// 		id: 3
	// 	}
	// ]
	// const drives = [{ name: 'Любой' }, { name: 'Передний' }, { name: 'Задний' }, { name: 'Полный' }]
	// const gearboxes = [{ name: 'Автоматическая' }, { name: 'Робот' }, { name: 'Вариатор' }, { name: 'Механическая' }]

	// const owners = ['Один владелец', 'Не более 2 владельцев', 'Не более 3 владельцев']

	const [brand, setBrand] = useState(null)
	const [body, setBody] = useState(null)
	const [drive, setDrive] = useState(null)
	const [gearbox, setGearbox] = useState(null)
	const [yearFrom, setYearFrom] = useState(null)
	const [yearBefore, setYearBefore] = useState(null)
	const [owner, setOwner] = useState(null)
	// const [filterValues, setFilterValues] = useState({checkFilters: {}, rangeFilters: {}, dateFilters: {}, comboboxFilters: {}})

	const carsList = [
		{
			id: 0,
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
			id: 1,
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
			id: 2,
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
			id: 3,
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
			id: 4,
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
			id: 5,
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
			id: 6,
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
			id: 7,
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
			id: 8,
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
			id: 9,
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
			id: 10,
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
			id: 11,
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

	const scrollToTop = () => {
		window.scrollTo({
			top: 600,
			behavior: "smooth"
		});
	};
	const scrollToTopMob = () => {
		window.scrollTo({
			top: 250,
			behavior: "smooth"
		});
	};

	if (isOpen) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = '';
	}

	const handleSidebarToggle = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 1400) {
				setIsOpen(false);
			}
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const handleSliderChange = (newPrice) => {
		setMinPrice(newPrice[0]);
		setMaxPrice(newPrice[1]);
	};

	const handleMinPriceChange = (e) => {
		let newMinPrice = parseInt(e.target.value);
		let newMaxPrice = maxPrice;
		if (!isNaN(newMinPrice)) {
			if (newMinPrice > newMaxPrice) {
				setMinPrice(newMaxPrice);
				setMaxPrice(newMinPrice);
			} else {
				setMinPrice(newMinPrice);
			}
		}
	};

	const handleMaxPriceChange = (e) => {
		let newMaxPrice = parseInt(e.target.value);
		let newMinPrice = minPrice;
		if (!isNaN(newMaxPrice)) {
			if (newMaxPrice < newMinPrice) {
				setMaxPrice(newMinPrice);
				setMinPrice(newMaxPrice);
			} else {
				setMaxPrice(newMaxPrice);
			}
		}
	};

	const handleSliderMileageChange = (newMileage) => {
		setMinMileage(newMileage[0]);
		setMaxMileage(newMileage[1]);
	};

	const handleMinMileageChange = (e) => {
		let newMinMileage = parseInt(e.target.value);
		let newMaxMileage = maxMileage;
		if (!isNaN(newMinMileage)) {
			if (newMinMileage > newMaxMileage) {
				setMinMileage(newMaxMileage);
				setMaxMileage(newMinMileage);
			} else {
				setMinMileage(newMinMileage);
			}
		}
	};

	const handleMaxMileageChange = (e) => {
		let newMaxMileage = parseInt(e.target.value);
		let newMinMileage = minMileage;
		if (!isNaN(newMaxMileage)) {
			if (newMaxMileage < newMinMileage) {
				setMaxMileage(newMinMileage);
				setMinMileage(newMaxMileage);
			} else {
				setMaxMileage(newMaxMileage);
			}
		}
	};

	const IconExamplePlusSizeM = () => (
		<svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M4.05078 1.57495H13.9508C14.7758 1.57495 15.4508 2.24995 15.4508 3.07495V4.72495C15.4508 5.32495 15.0758 6.07495 14.7008 6.44995L11.4758 9.29995C11.0258 9.67495 10.7258 10.425 10.7258 11.025V14.25C10.7258 14.7 10.4258 15.3 10.0508 15.525L9.00078 16.2C8.02578 16.8 6.67578 16.125 6.67578 14.925V10.95C6.67578 10.425 6.37578 9.74995 6.07578 9.37495L3.22578 6.37495C2.85078 5.99995 2.55078 5.32495 2.55078 4.87495V3.14995C2.55078 2.24995 3.22578 1.57495 4.05078 1.57495Z" stroke="#2F3140" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M8.1975 1.57495L4.5 7.49995" stroke="#2F3140" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>

	);
	const IconAdd = createIcon({
		m: IconExamplePlusSizeM,
		s: IconExamplePlusSizeM,
		xs: IconExamplePlusSizeM,
		name: 'IconAdd',
	});

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
									min={0}
									max={10000000}
									step={5}
									range={true}
									value={[minPrice, maxPrice]}
									onChange={({value}) => handleSliderChange(value)}
								/>
							</div>
							<div className={cn([cl.inputs, 'd-flex', 'justify-content-between'])}>
								<input type="text" value={minPrice} onChange={handleMinPriceChange} placeholder="от" />
								<input type="text" value={maxPrice} onChange={handleMaxPriceChange} placeholder="до" />
							</div>
						</div>
						<div className={cn([cl.block, 'd-flex', 'flex-column'])}>
							<span>Пробег, км</span>
							<div>
								<Slider
									min={0}
									max={200000}
									step={5}
									range={true}
									value={[minMileage, maxMileage]}
									onChange={({value}) => handleSliderMileageChange(value)}
								/>
							</div>
							<div className={cn([cl.inputs, 'd-flex', 'justify-content-between'])}>
								<input type="text" value={minMileage} onChange={handleMinMileageChange} placeholder="от" />
								<input type="text" value={maxMileage} onChange={handleMaxMileageChange} placeholder="до" />
							</div>
						</div>
						{filters.map((filter) => {
							switch (filter.alias) {
								case 'Years':
									return (
										<div className={cn([cl.block, 'd-flex', 'flex-column'])}>
											<span>{filter.label}</span>
											<div className={cn([cl.selectors, 'd-flex'])}>
												<div className={cl.select}>
													<Select
														placeholder="от"
														items={filter.value1}
														value={yearFrom}
														onChange={({ value }) => setYearFrom(value)}
													/>
												</div>
												<div className={cl.select}>
													<Select
														placeholder="до"
														items={filter.value2}
														value={yearBefore}
														onChange={({ value }) => setYearBefore(value)}
													/>
												</div>
											</div>
										</div>
									)
								case 'Brands':
									return (
										<div className={cn([cl.block, 'd-flex', 'flex-column'])}>
											<span>Марка</span>
											<div>
												<CheckboxGroup
													items={filter.value}
													value={brand}
													getItemLabel={(item) => item.name}
													getItemDisabled={(item) => item.disabled}
													onChange={({ value }) => setBrand(value)}
													name="CheckboxGroup"
												/>
											</div>
										</div>
									)
								case 'Bodies':
									return  (
										<div className={cn([cl.block, 'd-flex', 'flex-column'])}>
											<span>Кузов</span>
											<div>
												<CheckboxGroup
													items={filter.value}
													value={body}
													getItemLabel={(item) => item.name}
													getItemDisabled={(item) => item.disabled}
													onChange={({ value }) => setBody(value)}
													name="CheckboxGroup"
												/>
											</div>
										</div>
									)
								case 'Owners':
									return (
										<div className={cn([cl.block, 'd-flex', 'flex-column'])}>
											<span>Количество владельцев</span>
											<div>
												<RadioGroup
													items={filter.value}
													value={owner}
													getItemLabel={(item) => item}
													onChange={({ value }) => setOwner(value)}
													direction="column"
												/>
											</div>
										</div>
									)
								case 'Drivers':
									return (
										<div className={cn([cl.block, 'd-flex', 'flex-column'])}>
											<span>Привод</span>
											<div>
												<CheckboxGroup
													items={filter.value}
													value={drive}
													getItemLabel={(item) => item.name}
													getItemDisabled={(item) => item.disabled}
													onChange={({ value }) => setDrive(value)}
													name="CheckboxGroup"
												/>
											</div>
										</div>
									)
								case 'Gearboxes':
									return (
										<div className={cn([cl.block, 'd-flex', 'flex-column'])}>
											<span>Коробка</span>
											<div>
												<CheckboxGroup
													items={filter.value}
													value={gearbox}
													getItemLabel={(item) => item.name}
													getItemDisabled={(item) => item.disabled}
													onChange={({ value }) => setGearbox(value)}
													name="CheckboxGroup"
												/>
											</div>
										</div>
									)
							}
						})}
						<div onClick={scrollToTopMob}>
							<Button className={cl.btn} label='Применить' size='m' onClick={handleSidebarToggle}/>
						</div>
					</div>
				</div>
			</div>

			<div className={cn([cl.usedCars, 'container', 'd-flex', 'flex-column'])}>
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
						<Button className={cn([cl.btn, 'd-none', 'd-lg-flex', 'align-items-center'])} iconLeft={IconAdd} label='Фильтры' size="l" view="secondary" onClick={() => setIsOpen(!isOpen)}/>
						<Button className={cn([cl.btn, 'd-none', 'd-sm-flex', 'align-items-center', 'd-lg-none'])} iconLeft={IconAdd} label='Фильтры' size="m" view="secondary" onClick={() => setIsOpen(!isOpen)}/>
						<Button className={cn([cl.btn, 'd-xs-flex', 'align-items-center', 'd-sm-none'])} iconLeft={IconAdd} label='Фильтры' size="s" view="secondary" onClick={() => setIsOpen(!isOpen)}/>
					</div>
				</div>
				<div className={cn([cl.usedCarsContent, 'd-flex'])}>
					<div className={cn([cl.usedCarsContentFilter, 'd-none', 'd-xxl-flex', 'flex-column'])}>
						<h5 className={cn([cl.usedCarsContentFilterTitle, 'mb-0'])}>Фильтры</h5>
						<div className={cn([cl.block, 'd-flex', 'flex-column'])}>
							<span>Цена, руб</span>
							<div>
								<Slider
									min={0}
									max={10000000}
									step={5}
									range={true}
									value={[minPrice, maxPrice]}
									onChange={({value}) => handleSliderChange(value)}
								/>
							</div>
							<div className={cn([cl.inputs, 'd-flex', 'justify-content-between'])}>
								<input type="text" value={minPrice} onChange={handleMinPriceChange} placeholder="от" />
								<input type="text" value={maxPrice} onChange={handleMaxPriceChange} placeholder="до" />
							</div>
						</div>
						<div className={cn([cl.block, 'd-flex', 'flex-column'])}>
							<span>Пробег, км</span>
							<div>
								<Slider
									min={0}
									max={200000}
									step={5}
									range={true}
									value={[minMileage, maxMileage]}
									onChange={({value}) => handleSliderMileageChange(value)}
								/>
							</div>
							<div className={cn([cl.inputs, 'd-flex', 'justify-content-between'])}>
								<input type="text" value={minMileage} onChange={handleMinMileageChange} placeholder="от" />
								<input type="text" value={maxMileage} onChange={handleMaxMileageChange} placeholder="до" />
							</div>
						</div>
						{filters.map((filter) => {
							switch (filter.alias) {
								case 'Years':
									return (
										<div className={cn([cl.block, 'd-flex', 'flex-column'])}>
											<span>{filter.label}</span>
											<div className={cn([cl.selectors, 'd-flex'])}>
												<div className={cl.select}>
													<Select
														placeholder="от"
														items={filter.value1}
														value={yearFrom}
														onChange={({ value }) => setYearFrom(value)}
													/>
												</div>
												<div className={cl.select}>
													<Select
														placeholder="до"
														items={filter.value2}
														value={yearBefore}
														onChange={({ value }) => setYearBefore(value)}
													/>
												</div>
											</div>
										</div>
									)
								case 'Brands':
									return (
										<div className={cn([cl.block, 'd-flex', 'flex-column'])}>
											<span>Марка</span>
											<div>
												<CheckboxGroup
													items={filter.value}
													value={brand}
													getItemLabel={(item) => item.name}
													getItemDisabled={(item) => item.disabled}
													onChange={({ value }) => setBrand(value)}
													name="CheckboxGroup"
												/>
											</div>
										</div>
									)
								case 'Bodies':
									return  (
										<div className={cn([cl.block, 'd-flex', 'flex-column'])}>
											<span>Кузов</span>
											<div>
												<CheckboxGroup
													items={filter.value}
													value={body}
													getItemLabel={(item) => item.name}
													getItemDisabled={(item) => item.disabled}
													onChange={({ value }) => setBody(value)}
													name="CheckboxGroup"
												/>
											</div>
										</div>
									)
								case 'Owners':
									return (
										<div className={cn([cl.block, 'd-flex', 'flex-column'])}>
											<span>Количество владельцев</span>
											<div>
												<RadioGroup
													items={filter.value}
													value={owner}
													getItemLabel={(item) => item}
													onChange={({ value }) => setOwner(value)}
													direction="column"
												/>
											</div>
										</div>
									)
								case 'Drivers':
									return (
										<div className={cn([cl.block, 'd-flex', 'flex-column'])}>
											<span>Привод</span>
											<div>
												<CheckboxGroup
													items={filter.value}
													value={drive}
													getItemLabel={(item) => item.name}
													getItemDisabled={(item) => item.disabled}
													onChange={({ value }) => setDrive(value)}
													name="CheckboxGroup"
												/>
											</div>
										</div>
									)
								case 'Gearboxes':
									return (
										<div className={cn([cl.block, 'd-flex', 'flex-column'])}>
											<span>Коробка</span>
											<div>
												<CheckboxGroup
													items={filter.value}
													value={gearbox}
													getItemLabel={(item) => item.name}
													getItemDisabled={(item) => item.disabled}
													onChange={({ value }) => setGearbox(value)}
													name="CheckboxGroup"
												/>
											</div>
										</div>
									)
							}
						})}
					</div>
					<div>
						<div className={cn([cl.usedCarsContentCards, 'd-grid'])}>
							{carsList.map(({ id, image, name, year, owner, mileage, gearbox, drive, price }) => (
								<Link to="/used-car" key={id}>
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
						<div className={cn([cl.pagination, 'd-flex', 'flex-column'])}>
							<Button className={cn([cl.paginationBtn, 'd-none', 'd-sm-flex', 'align-items-center', 'justify-content-center'])} label='Загрузить еще' size='l' view="secondary"/>
							<Button className={cn([cl.paginationBtn, 'd-xs-flex', 'd-sm-none'])} label='Загрузить еще' size='s' view="secondary"/>
							<div className='d-flex justify-content-center'>
								<Pagination
									type="default"
									items={10}
									currentPage={page}
									visibleCount={7}
									totalPages={10}
									value={page}
									onChange={setPage}
								/>
							</div>
						</div>
						<div className={cn([cl.filterimg, 'd-none', 'd-xxl-flex'])}>
							<img src='../../../assets/img/new-cars-filter/filter.svg' onClick={scrollToTop} alt="" className={cn([cl.icon])}/>
						</div>
						<div className={cn([cl.filterimg, 'd-none', 'd-lg-flex', 'd-xxl-none'])}>
							<img src='../../../assets/img/new-cars-filter/filter.svg' onClick={() => setIsOpen(!isOpen)} alt="" className={cn([cl.icon])}/>
						</div>
						<div className={cn([cl.filterimg, 'd-none', 'd-sm-flex', 'd-lg-none'])}>
							<img src='../../../assets/img/new-cars-filter/filtersmall.svg' onClick={() => setIsOpen(!isOpen)} alt="" className={cn([cl.icon])}/>
						</div>
						<div className={cn([cl.filterimg, 'd-xs-flex', 'd-sm-none'])}>
							<img src='../../../assets/img/new-cars-filter/filtersmall.svg' onClick={() => setIsOpen(!isOpen)} alt="" className={cn([cl.icon])}/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default UsedCars
