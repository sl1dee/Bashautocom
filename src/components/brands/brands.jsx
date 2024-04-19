import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'
import { Combobox } from '@consta/uikit/Combobox'
import cn from 'classnames'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import changan from '../../../assets/img/brands/changan.svg'
import datsun from '../../../assets/img/brands/datsun.svg'
import exeed from '../../../assets/img/brands/exeed.svg'
import haval from '../../../assets/img/brands/haval.svg'
import honda from '../../../assets/img/brands/honda.svg'
import infinity from '../../../assets/img/brands/infinity.svg'
import jaecoo from '../../../assets/img/brands/jaecoo.svg'
import lada from '../../../assets/img/brands/lada.svg'
import moskvich from '../../../assets/img/brands/moskvich.svg'
import nissan from '../../../assets/img/brands/nissan.svg'
import omoda from '../../../assets/img/brands/omoda.svg'
import skoda from '../../../assets/img/brands/skoda.svg'
import suzuki from '../../../assets/img/brands/suzuki.svg'
import volkswagen from '../../../assets/img/brands/volkswagen.svg'
import user from '../../../assets/img/header/user.svg'
import Button from '../../ui/button/button.jsx'
import cl from './brands.module.scss'

const Brands = ({ title, viewTabs, brandsList }) => {
	// const brandsList = [
	// 	{
	// 		id: 1,
	// 		href: '',
	// 		imgPath: haval
	// 	},
	// 	{
	// 		id: 2,
	// 		href: '',
	// 		imgPath: changan
	// 	},
	// 	{
	// 		id: 3,
	// 		href: '',
	// 		imgPath: omoda
	// 	},
	// 	{
	// 		id: 4,
	// 		href: '',
	// 		imgPath: jaecoo
	// 	},
	// 	{
	// 		id: 5,
	// 		href: '',
	// 		imgPath: exeed
	// 	},
	// 	{
	// 		id: 6,
	// 		href: '',
	// 		imgPath: moskvich
	// 	},
	// 	{
	// 		id: 7,
	// 		href: '',
	// 		imgPath: lada
	// 	},
	// 	{
	// 		id: 8,
	// 		href: '',
	// 		imgPath: volkswagen
	// 	},
	// 	{
	// 		id: 9,
	// 		href: '',
	// 		imgPath: nissan
	// 	},
	// 	{
	// 		id: 10,
	// 		href: '',
	// 		imgPath: honda
	// 	},
	// 	{
	// 		id: 11,
	// 		href: '',
	// 		imgPath: skoda
	// 	},
	// 	{
	// 		id: 12,
	// 		href: '',
	// 		imgPath: infinity
	// 	},
	// 	{
	// 		id: 13,
	// 		href: '',
	// 		imgPath: datsun
	// 	},
	// 	{
	// 		id: 14,
	// 		href: '',
	// 		imgPath: suzuki
	// 	}
	// ]

	const items = ['Все', 'Продаем', 'Ремонтируем']

	const [value, setValue] = useState(items[0])

	return (
		<div className={cl.brands}>
			<div className="container p-0">
				<div className={cn([cl.brandsInformation, 'd-flex', 'flex-column'])}>
					<div
						className={cn([
							cl.brandsInformationHead,
							'd-flex',
							'flex-column',
							'flex-xxl-row',
							'justify-content-start',
							'justify-content-xxl-between',
							'align-items-xxl-center'
						])}
					>
						<h1 className={cn([cl.brandsInformationHeadTitle, 'mb-0'])}>{title}</h1>
						{viewTabs === true ? (
							<div>
								<div className="d-none d-lg-flex">
									<ChoiceGroup
										// className={cl.choice}
										value={value}
										onChange={({ value }) => setValue(value)}
										items={items}
										getItemLabel={(item) => item}
										form="default"
										size="l"
										view="primary"
										name="ChoiceGroupExampleForm"
										multiple={false}
									/>
								</div>
								<div className="d-none d-sm-flex d-lg-none">
									<ChoiceGroup
										// className={cl.choice}
										value={value}
										onChange={({ value }) => setValue(value)}
										items={items}
										getItemLabel={(item) => item}
										form="default"
										size="m"
										view="primary"
										name="ChoiceGroupExampleForm"
										multiple={false}
									/>
								</div>
								<div className="d-xs-flex d-sm-none">
									<ChoiceGroup
										// className={cl.choice}
										value={value}
										onChange={({ value }) => setValue(value)}
										items={items}
										getItemLabel={(item) => item}
										form="default"
										size="s"
										view="primary"
										name="ChoiceGroupExampleForm"
										multiple={false}
									/>
								</div>
							</div>
						) : (
							<div className="d-none" />
						)}
					</div>
					<div className={cl.cards}>
						{brandsList.map(({ id, href, imgPath }) => (
							<div>
								<Link to={href}>
									<div key={id} className={cl.card}>
										<div className={cn([cl.cardLogo, 'd-flex', 'align-items-center', 'justify-content-center'])}>
											<img src={imgPath} alt="car_logo" />
										</div>
									</div>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Brands
