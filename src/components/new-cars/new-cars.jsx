import changanUNIK from '@assets/img/new-cars-filter/changan_uni-k.png'
import changanUNIV from '@assets/img/new-cars-filter/changan_uni-v.png'
import coupe from '@assets/img/new-cars-filter/coupe.png'
import crossover from '@assets/img/new-cars-filter/crossover.png'
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
import cn from 'classnames'
import React, { useState } from 'react'

import Button from '@ui/button/index.js'

import cl from '@components/new-cars/new-cars.module.scss'

const NewCars = () => {
	const [comboboxValue, setComboboxValue] = useState(null)
	const [value, setValue] = useState([20, 50])

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

	return (
		<>
			<div className={cn([cl.filter, 'd-flex', 'flex-column', 'd-sm-none'])}>
				<div className={cl.filterTitle}>Фильтры</div>
				<div className={cn([cl.filterCards, 'd-grid'])}>
					{filterList.map(({ carType, name }) => (
						<div className={cn([cl.filterCardsCard, 'd-flex', 'flex-column'])}>
							<img src={carType} alt="" className={cl.filterCardsCardImage} />
							<div className={cl.filterCardsCardName}>{name}</div>
						</div>
					))}
				</div>
				<div className={cn([cl.brand, 'd-flex', 'flex-column'])}>
					<div className={cl.brandTitle}>Выберите бренд</div>
					<input className={cl.brandInput} type="text" placeholder="Поиск по названию" />
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
				<div className={cn([cl.minPrice, 'd-flex', 'flex-column'])}>
					<div className={cl.minPriceTitle}>Минимальная цена, руб</div>
					<div>
						<Slider
							step={5}
							// label={`Значение ${value[0]}-${value[1]}`}
							onChange={({ value }) => setValue(value)}
							value={value}
						/>
					</div>
					<div className={cn([cl.minPriceInputs, 'd-flex', 'justify-content-between'])}>
						<input type="text" placeholder="от" />
						<input type="text" placeholder="до" />
					</div>
				</div>
			</div>
			<div className={cn([cl.newCars, 'container', 'p-0', 'd-flex', 'flex-column'])}>
				<div className={cn([cl.newCarsFilter, 'd-flex', 'flex-column'])}>
					<h1 className={cn([cl.title, 'mb-0'])}>Новые автомобили</h1>
					<div className={cn([cl.newCarsFilterContent, 'd-none', 'd-sm-flex', 'flex-column', 'flex-lg-row'])}>
						<div className={cn([cl.leftBlock, 'd-grid'])}>
							{filterList.map(({ carType, name }) => (
								<div className={cn([cl.leftBlockCard, 'd-flex', 'flex-column'])}>
									<img src={carType} alt="" className={cl.leftBlockCardImage} />
									<div className={cl.leftBlockCardName}>{name}</div>
								</div>
							))}
						</div>
						<div className={cn([cl.rightBlock, 'd-flex', 'flex-column'])}>
							<div className={cn([cl.rightBlockGroup, 'd-flex', 'flex-row', 'flex-lg-column'])}>
								<div className={cn([cl.rightBlockGroupFirst, 'd-flex', 'flex-column'])}>
									<div className={cl.title}>Бренд</div>
									<div className={cl.combobox}>
										<Combobox
											placeholder="Выберите бренд"
											size="l"
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
											step={5}
											// label={`Значение ${value[0]}-${value[1]}`}
											onChange={({ value }) => setValue(value)}
											value={value}
										/>
									</div>
									<div className={cn([cl.inputs, 'd-flex', 'justify-content-between'])}>
										<input type="text" placeholder="от" />
										<input type="text" placeholder="до" />
									</div>
								</div>
							</div>
							<Button>Применить</Button>
						</div>
					</div>
					<div className="d-xs-flex d-sm-none">
						<Button sizeStyle="sizeContent" colorStyle="Secondary" className={cn([cl.btn, 'd-flex'])}>
							<img src={funnel} alt="" />
							<div>Фильтры</div>
						</Button>
					</div>
				</div>
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
								<div className="d-none d-sm-flex">
									<Button sizeStyle="sizeContent" className={cl.btn}>
										Подробнее
									</Button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default NewCars
