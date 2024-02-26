import cn from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

import cl from './special-offers-card.module.scss'

const SpecialOffersCard = ({ bckgImg, title, logo }) => {
	return (
		<div className={cl.offerCard} style={{ backgroundImage: `url(${bckgImg})` }}>
			<div className={cl.offerCardTitle}>{title}</div>
			<div className={cn([cl.offerCardBottom, 'd-flex', 'justify-content-between'])}>
				<img src={logo} alt="" />
				<Link to="/" className={cl.offerCardBottomLink}>
					Подробнее
				</Link>
			</div>
		</div>
	)
}

export default SpecialOffersCard
