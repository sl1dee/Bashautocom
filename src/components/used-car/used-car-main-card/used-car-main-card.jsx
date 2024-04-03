import React from 'react'

import cl from './used-car-main-card.module.scss'

const UsedCarMainCard = ({ mainImage }) => {
	return (
		<div className={cl.wrapper}>
			<img src={mainImage} alt="" />
		</div>
	)
}

export default UsedCarMainCard
