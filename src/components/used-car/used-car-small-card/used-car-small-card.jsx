import React from 'react'

import cl from './used-car-small-card.module.scss'

const UsedCarSmallCard = ({ smallImage }) => {
	return (
		<div className={cl.wrapper}>
			<img src={smallImage} alt="" />
		</div>
	)
}

export default UsedCarSmallCard
