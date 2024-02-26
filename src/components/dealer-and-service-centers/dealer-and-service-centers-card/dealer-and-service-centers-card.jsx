import cn from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

import cl from './dealer-and-service-centers-card.module.scss'

const DealerAndServiceCentersCard = ({ bckgImg, street, number, sale, service }) => {
	return (
		<div className={cl.centersCard} style={{ backgroundImage: `url(${bckgImg})` }}>
			<div className={cl.centersCardText}>
				<div className={cl.centersCardTextStreet}>{street}</div>
				<div className={cl.centersCardTextNumber}>{number}</div>
			</div>
			<div className={cn([cl.centersCardBottom, 'd-flex', 'justify-content-between'])}>
				<button className={cl.btn}>Продажа {sale} брендов</button>
				<button className={cl.btn}>Сервис {service} брендов</button>
			</div>
		</div>
	)
}

export default DealerAndServiceCentersCard
