import cn from 'classnames'
import React from 'react'
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

const Brands = () => {
	const brandsist = [
		{
			id: 1,
			imgPath: haval
		},
		{
			id: 2,
			imgPath: changan
		},
		{
			id: 3,
			imgPath: omoda
		},
		{
			id: 4,
			imgPath: jaecoo
		},
		{
			id: 5,
			imgPath: exeed
		},
		{
			id: 6,
			imgPath: moskvich
		},
		{
			id: 7,
			imgPath: lada
		},
		{
			id: 8,
			imgPath: volkswagen
		},
		{
			id: 9,
			imgPath: nissan
		},
		{
			id: 10,
			imgPath: honda
		},
		{
			id: 11,
			imgPath: skoda
		},
		{
			id: 12,
			imgPath: infinity
		},
		{
			id: 13,
			imgPath: datsun
		},
		{
			id: 14,
			imgPath: suzuki
		}
	]

	return (
		<div className={cl.brands}>
			<div className="container p-0">
				<div className={cn([cl.brandsInformation, 'd-flex', 'flex-column'])}>
					<div className="d-flex justify-content-between align-items-center">
						<h1 className={cn([cl.brandsInformationTitle, 'mb-0'])}>Найдите свой бренд</h1>
						<div className={cl.brandsInformationTabs}>
							<div className="d-flex">
								<Button sizeStyle="sizeL">Все бренды</Button>
								<Button sizeStyle="sizeL" colorStyle="Outlined">
									Продаем
								</Button>
								<Button sizeStyle="sizeL" colorStyle="Outlined">
									Ремонтируем
								</Button>
							</div>
						</div>
					</div>
					<div className="row row-cols-5 gap-4">
						{brandsist.map(({ id, imgPath }) => (
							<div key={id} className={cl.card}>
								<Link to="/" className={cl.cardLogo}>
									<img src={imgPath} alt="car_logo" />
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
