import cn from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

import cl from './dealer-and-service-centers-card.module.scss'

const DealerAndServiceCentersCard = ({ bckgImg, street, number, sale, service, saleBrands, serviceBrands }) => {
	return (
		<div className={cl.centersCard} style={{ backgroundImage: `url(${bckgImg})` }}>
			<div className={cn([cl.Block1])}>
				<div className={cl.Block1Text}>
					<div className={cl.Block1TextStreet}>{street}</div>
					<div className={cl.Block1TextNumber}>{number}</div>
				</div>
				<div className={cn([cl.Block1Bottom, 'd-flex', 'justify-content-between'])}>
					<p className="mb-0">Продажа {sale} брендов</p>
					<p className="mb-0">Сервис {service} брендов</p>
				</div>
			</div>
			<div className={cn([cl.Block2])}>
				{saleBrands?.length > 0 && (
					<div className={cn([cl.Block2Sale, 'd-flex', 'flex-column', 'mb-0'])}>
						<div className={cn([cl.Block2SaleTitle, 'mb-0'])}>Продажа</div>
						{saleBrands.map((item) => (
							<p className="mb-0">{item}</p>
						))}
					</div>
				)}
				{saleBrands?.length > 0 && (
					<div className={cn([cl.Block2Service, 'd-flex', 'flex-column', 'mb-0'])}>
						<div className={cn([cl.Block2SaleTitle, 'mb-0'])}>Сервис</div>
						{serviceBrands.map((item) => (
							<p className="mb-0">{item}</p>
						))}
					</div>
				)}
			</div>
		</div>
	)
}

export default DealerAndServiceCentersCard
