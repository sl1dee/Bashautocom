import cn from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

import cl from './dealer-and-service-centers-card.module.scss'

const DealerAndServiceCentersCard = ({
	bckgImg,
	name,
	services,
}) => {
	return (
		<div className={cn([cl.centersCard, 'd-flex', 'flex-column', 'justify-content-end'])} style={{ backgroundImage: `url(${bckgImg})` }}>
			<div className={cn([cl.text, 'd-flex', 'flex-column'])}>
				<div className={cl.textName}>{name}</div>
				<div className={cl.textServices}>{services}</div>
			</div>
		</div>
	)
}

export default DealerAndServiceCentersCard
