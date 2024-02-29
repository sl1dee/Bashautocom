import React from 'react'
import { Link } from 'react-router-dom'

import cl from './special-offers-card.module.scss'

const SpecialOffersCard = ({ image, link }) => {
	return (
		// <div className={cl.offerCard} style={{ backgroundImage: `url(${bckgImg})` }}>
		// 	<div className={cl.offerCardTitle}>{title}</div>
		// 	<div className={cn([cl.offerCardBottom, 'd-flex', 'justify-content-between'])}>
		// 		<img src={logo} alt="" />
		// 		<Link to="/" className={cl.offerCardBottomLink}>
		// 			Подробнее
		// 		</Link>
		// 	</div>
		// </div>
		<div className={cl.offerCard}>
			<Link to={link}>
				<img src={image} alt="banner image" />
			</Link>
		</div>
	)
}

export default SpecialOffersCard
