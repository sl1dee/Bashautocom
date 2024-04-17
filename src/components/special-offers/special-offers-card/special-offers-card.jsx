import React from 'react'
import { Link } from 'react-router-dom'

import cl from './special-offers-card.module.scss'

const SpecialOffersCard = ({ image, link }) => {
	return (
		<div className={cl.offerCard}>
			<Link to={link}>
				<img src={image} alt="banner image" />
			</Link>
		</div>
	)
}

export default SpecialOffersCard
