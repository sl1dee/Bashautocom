import changanUNIK from '@assets/img/new-cars-filter/changan_uni-k.png'
import changanUNIV from '@assets/img/new-cars-filter/changan_uni-v.png'
import close from '@assets/img/new-cars-filter/close.svg'
import coupe from '@assets/img/new-cars-filter/coupe.png'
import crossover from '@assets/img/new-cars-filter/crossover.png'
import done from '@assets/img/new-cars-filter/done.svg'
import funnel from '@assets/img/new-cars-filter/funnel.svg'
import gwm from '@assets/img/new-cars-filter/gwm.png'
import hatchback from '@assets/img/new-cars-filter/hatchback.png'
import havalDargo from '@assets/img/new-cars-filter/haval_dargo.png'
import havalF7 from '@assets/img/new-cars-filter/haval_f7.png'
import havalJolion from '@assets/img/new-cars-filter/haval_jolion.png'
import liftback from '@assets/img/new-cars-filter/liftback.png'
import moskvich3 from '@assets/img/new-cars-filter/moskvich_3.png'
import moskvich6 from '@assets/img/new-cars-filter/moskvich_6.png'
import pickup from '@assets/img/new-cars-filter/pickup.png'
import sedan from '@assets/img/new-cars-filter/sedan.png'
import universal from '@assets/img/new-cars-filter/universal.png'
import vnedorozhnik from '@assets/img/new-cars-filter/vnedorozhnik.png'
import { CheckboxGroup } from '@consta/uikit/CheckboxGroup'
import { Combobox } from '@consta/uikit/Combobox'
import { Slider } from '@consta/uikit/Slider'
import { setBurgerIsOpen } from '@store/modules/modals.js'
import cn from 'classnames'
import React, {useEffect, useState} from 'react'

import { Button } from '@consta/uikit/Button';

import cl from '@components/new-cars/new-cars.module.scss'
import { Pagination } from '@consta/uikit/Pagination';

const NewCars = () => {
	const [comboboxValue, setComboboxValue] = useState(null)
	const [page, setPage] = useState(1);
	const [minPrice, setMinPrice] = useState(0);
	const [maxPrice, setMaxPrice] = useState(1000000);

	const filterList = [
		{
			carType: sedan,
			name: 'Седан'
		},
		{
			carType: crossover,
			name: 'Кроссовер'
		},
		{
			carType: hatchback,
			name: 'Хетчбэк'
		},
		{
			carType: liftback,
			name: 'Лифтбэк'
		},
		{
			carType: universal,
			name: 'Универсал'
		},
		{
			carType: vnedorozhnik,
			name: 'Внедорожник'
		},
		{
			carType: coupe,
			name: 'Купе'
		},
		{
			carType: pickup,
			name: 'Пикап'
		}
	]

	const carsList = [
		{
			image: havalJolion,
			name: 'Haval Jolion',
			description: 'Кроссовер, двигатель 1.5 л, трансмиссия 2WD / 4WD, коробка передач АКПП/МКПП',
			price: 'от 1 849 000 ₽'
		},
		{
			image: moskvich3,
			name: 'Москвич 3',
			description: 'Кроссовер, тарированный двигатель 1.5 л, крутящий момент 210 Нм, коробка передач МКПП/CVT',
			price: 'от 1 700 000 ₽'
		},
		{
			image: moskvich6,
			name: 'Москвич 6',
			description: 'Кроссовер, двигатель 1.5 л, трансмиссия 2WD / 4WD, коробка передач АКПП/МКПП',
			price: 'от 2 336 000 ₽'
		},
		{
			image: changanUNIK,
			name: 'Changan UNI-K',
			description: 'Кроссовер, двигатель 1.5 л, трансмиссия 2WD / 4WD, коробка передач АКПП/МКПП',
			price: 'от 3 339 900 ₽'
		},
		{
			image: havalDargo,
			name: 'Haval Dargo',
			description: 'Кроссовер, двигатель 1.5 л, трансмиссия 2WD / 4WD, коробка передач АКПП/МКПП',
			price: 'от 2 799 000 ₽'
		},
		{
			image: changanUNIV,
			name: 'Changan UNI-V',
			description: 'Седан, двигатель 1.5 л, крутящий момент 300 Нм, КПП 7DCT',
			price: 'от 2 759 900 ₽'
		},
		{
			image: havalF7,
			name: 'Haval F7',
			description: 'Кроссовер, двигатель 1.5 л, трансмиссия 2WD / 4WD, коробка передач АКПП/МКПП',
			price: 'от 2 336 000 ₽'
		},
		{
			image: gwm,
			name: 'Changan UNI-K',
			description: 'Кроссовер, двигатель 1.5 л, трансмиссия 2WD / 4WD, коробка передач АКПП/МКПП',
			price: 'от 2 899 000 ₽'
		},
		{
			image: havalJolion,
			name: 'Haval Jolion',
			description: 'Кроссовер, двигатель 1.5 л, трансмиссия 2WD / 4WD, коробка передач АКПП/МКПП',
			price: 'от 1 849 000 ₽'
		},
		{
			image: moskvich3,
			name: 'Москвич 3',
			description: 'Кроссовер, тарированный двигатель 1.5 л, крутящий момент 210 Нм, коробка передач МКПП/CVT',
			price: 'от 1 700 000 ₽'
		},
		{
			image: moskvich6,
			name: 'Москвич 6',
			description: 'Кроссовер, двигатель 1.5 л, трансмиссия 2WD / 4WD, коробка передач АКПП/МКПП',
			price: 'от 2 336 000 ₽'
		},
		{
			image: changanUNIK,
			name: 'Changan UNI-K',
			description: 'Кроссовер, двигатель 1.5 л, трансмиссия 2WD / 4WD, коробка передач АКПП/МКПП',
			price: 'от 3 339 900 ₽'
		}
	]

	const comboboxValues = [
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

	const brands = [
		{ name: 'Audi' },
		{ name: 'BAIC' },
		{ name: 'BMW' },
		{ name: 'Cadillac' },
		{ name: 'Changan' },
		{ name: 'Chery' }
	]

	const [brand, setBrand] = useState(null)

	const [isOpen, setIsOpen] = useState(false)

	const [isActive, setIsActive] = useState(false)

	const [activeStates, setActiveStates] = useState(filterList.map(() => false))

	const toggleActive = (index) => {
		setActiveStates((prevStates) => {
			const newStates = [...prevStates]
			newStates[index] = !newStates[index]
			return newStates
		})
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 350,
			behavior: "smooth"
		});
	};
	const scrollToTopMob = () => {
		window.scrollTo({
			top: 150,
			behavior: "smooth"
		});
	};

	if (isOpen) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = '';
	}

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 576) {
				setIsOpen(false);
			}
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const handleSidebarToggle = () => {
		setIsOpen(!isOpen);
	};

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


	return (
		<>
			<div className={cn([`${cl.sidebar} ${isOpen ? '' : cl.active}`, 'd-xs-flex', 'd-sm-none'])}>
				<div className={`${isOpen ? cl.sidebarBckg : ''}`} title="Закрыть" onClick={handleSidebarToggle} />
				<div className={cn([cl.group, 'd-flex', 'flex-column', 'd-sm-none'])}>
					<div className={cn([cl.filter, 'd-flex', 'flex-column', 'd-sm-none'])}>
						<div className={cn([cl.filterHead, 'd-flex', 'align-items-center', 'justify-content-between'])}>
							<div className={cl.filterHeadTitle}>Фильтры</div>
							<img className={cl.filterHeadClose} src={close} alt="close" onClick={handleSidebarToggle} />
						</div>
						<div className={cn([cl.filterCards, 'd-grid'])}>
							{filterList.map(({ carType, name }, index) => (
								<div
									key={index}
									onClick={() => toggleActive(index)}
									className={`${cl.filterCardsCard} ${activeStates[index] ? cl.active2 : ''}`}
								>
									{/* <div className={cn([cl.filterCardsCard, 'd-flex', 'flex-column'])} onClick={() => setIsActive(!isActive)}> */}
									<img src={carType} alt="" className={cl.filterCardsCardImage} />
									<div className={cl.filterCardsCardName}>{name}</div>
									<img src={done} alt="" className={cl.filterCardsCardDone} />
									<img
										src={done}
										alt=""
										className={`${cl.filterCardsCardDone} ${activeStates[index] ? cl.active2Done : ''}`}
									/>
								</div>
							))}
						</div>
						<div className={cn([cl.brand, 'd-flex', 'flex-column'])}>
							<div className={cl.brandTitle}>Выберите бренд</div>
							<input className={cl.brandInput} type="text" placeholder="Поиск по названию" />
							<div>
								<CheckboxGroup
									className={cl.checkbox}
									value={brand}
									items={brands}
									getItemLabel={(item) => item.name}
									getItemDisabled={(item) => item.disabled}
									onChange={({ value }) => setBrand(value)}
									name="CheckboxGroup"
								/>
							</div>
						</div>
						<div className={cn([cl.minPrice, 'd-flex', 'flex-column'])}>
							<div className={cl.minPriceTitle}>Минимальная цена, руб</div>
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
						<div onClick={scrollToTopMob}>
							<Button className={cl.btn} label='Применить' onClick={handleSidebarToggle}/>
						</div>
					</div>
				</div>
			</div>
			<div className={cn([cl.newCars, 'container', 'd-flex', 'flex-column'])}>
				<div className={cn([cl.newCarsFilter, 'd-flex', 'flex-column'])}>
					<h1 className={cn([cl.title, 'mb-0'])}>Новые автомобили</h1>
					<div className={cn([cl.newCarsFilterContent, 'd-none', 'd-sm-flex', 'flex-column', 'flex-lg-row'])}>
						<div className={cn([cl.leftBlock, 'd-grid'])}>
							{filterList.map(({ carType, name }, index) => (
								<div
									key={index}
									onClick={() => toggleActive(index)}
									className={`${cl.leftBlockCard} ${activeStates[index] ? cl.active2 : ''}`}
								>
									{/* <div className={cn([cl.filterCardsCard, 'd-flex', 'flex-column'])} onClick={() => setIsActive(!isActive)}> */}
									<img src={carType} alt="" className={cl.leftBlockCardImage} />
									<div className={cl.leftBlockCardName}>{name}</div>
									<img
										src={done}
										alt=""
										className={`${cl.leftBlockCardDone} ${activeStates[index] ? cl.active2Done : ''}`}
									/>
								</div>
							))}
						</div>
						<div className={cn([cl.rightBlock, 'd-flex', 'flex-column'])}>
							<div className={cn([cl.rightBlockGroup, 'd-flex', 'flex-row', 'flex-lg-column'])}>
								<div className={cn([cl.rightBlockGroupFirst, 'd-flex', 'flex-column'])}>
									<div className={cl.title}>Бренд</div>
									<div className={cn([cl.combobox, 'd-none', 'd-lg-flex'])}>
										<Combobox
											placeholder="Выберите бренд"
											size="l"
											items={comboboxValues}
											value={comboboxValue}
											onChange={({ value }) => setComboboxValue(value)}
											multiple
										/>
									</div>
									<div className={cn([cl.combobox, 'd-none', 'd-sm-flex', 'd-lg-none'])}>
										<Combobox
											placeholder="Выберите бренд"
											size="s"
											items={comboboxValues}
											value={comboboxValue}
											onChange={({ value }) => setComboboxValue(value)}
											multiple
										/>
									</div>
								</div>
								<div className={cn([cl.rightBlockGroupSecond, 'd-flex', 'flex-column'])}>
									<div className={cl.title}>Минимальная цена, руб</div>
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
							</div>
							<div onClick={() => handleSliderChange}>
								{/*<Button sizeStyle="sizeS" className={cl.btn} >*/}
								{/*	Применить*/}
								{/*</Button>*/}
								<Button className={cn([cl.btn, 'd-none', 'd-lg-flex', 'justify-content-center', 'align-items-center'])} label='Применить' size='l' onClick={handleSidebarToggle}/>
								<Button className={cn([cl.btn, 'd-none', 'd-sm-flex', 'd-lg-none', 'justify-content-center', 'align-items-center'])} label='Применить' size='m' onClick={handleSidebarToggle}/>
							</div>
						</div>
					</div>
					<div className="d-xs-flex d-sm-none" onClick={handleSidebarToggle}>
						{/*<Button sizeStyle="sizeContent" colorStyle="Secondary" className={cn([cl.btn, 'd-flex'])}>*/}
						{/*	<img src={funnel} alt="" />*/}
						{/*	<div>Фильтры</div>*/}
						{/*</Button>*/}
						<Button className={cn([cl.btn, 'd-flex', 'justify-content-center', 'align-items-center'])} label='Фильтры' size='s' view='secondary'/>
					</div>
				</div>
				<div>
					<div className={cn([cl.newCarsCards, 'd-grid'])}>
						{carsList.map(({ image, name, description, price }) => (
							<div className={cn([cl.newCarsCardsCard, 'd-flex', 'flex-column'])}>
								<img src={image} alt="" className={cl.image} />
								<div className={cn([cl.information, 'd-flex', 'flex-column', 'justify-content-between'])}>
									<div className={cn([cl.group, 'd-flex', 'flex-column'])}>
										<div className={cl.name}>{name}</div>
										<div className={cl.description}>{description}</div>
									</div>
									<div className={cl.price}>{price}</div>
									{/*<Button sizeStyle="sizeS" className={cn([cl.btn, 'd-none', 'd-sm-flex'])}>*/}
									{/*	Подробнее*/}
									{/*</Button>*/}
									<Button className={cn([cl.btn, 'd-none', 'd-lg-flex', 'justify-content-center', 'align-items-center'])} label='Подробнее' size='l'/>
									<Button className={cn([cl.btn, 'd-none', 'd-sm-flex', 'd-lg-none', 'justify-content-center', 'align-items-center'])} label='Подробнее' size='m'/>
								</div>
							</div>
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
								visibleCount={10}
								totalPages={10}
								value={page}
								onChange={setPage}
							/>
						</div>
					</div>
					<div className={cn([cl.filterimg, 'd-none', 'd-lg-flex'])}>
						<img src='../../../assets/img/new-cars-filter/filter.svg' onClick={scrollToTop} alt="" className={cn([cl.icon])}/>
					</div>
					<div className={cn([cl.filterimg, 'd-none', 'd-sm-flex', 'd-lg-none'])}>
						<img src='../../../assets/img/new-cars-filter/filtersmall.svg' onClick={scrollToTop} alt="" className={cn([cl.icon])}/>
					</div>
					<div className={cn([cl.filterimg, 'd-xs-flex', 'd-sm-none'])}>
						<img src='../../../assets/img/new-cars-filter/filtersmall.svg' onClick={handleSidebarToggle} alt="" className={cn([cl.icon])}/>
					</div>
				</div>
			</div>
		</>
	)
}

export default NewCars
