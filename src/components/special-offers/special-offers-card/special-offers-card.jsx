import cn from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

import arrow_up from '../../../../assets/img/special-offer/arrow-up.svg'
import haval from '../../../../assets/img/special-offer/haval.jpg'
import haval_logo from '../../../../assets/img/special-offer/haval_logo.svg'
import cl from './special-offers-card.module.scss'

const SpecialOffersCard = ({ bckgImg, title, logo }) => {
	// const cardList = [
	// 	{
	// 		bckgImg: haval,
	// 		title: 'ВЫГОДА НА HAVAL M6 до 200 000 ₽',
	// 		logo: haval_logo
	// 	}
	// ]
	return (
		<div>
			{/* <img src={haval} alt="" className={cl.offerCardBackground} /> */}
			{/* {cardList.map(({ bckgImg, title, logo }) => ( */}
			<div className={cl.offerCard} style={{ backgroundImage: `url(${bckgImg})` }}>
				<div className={cl.offerCardTitle}>{title}</div>
				<div className={cn([cl.offerCardBottom, 'd-flex', 'justify-content-between'])}>
					<img src={logo} alt="" />
					<Link to="/" className={cl.offerCardBottomLink}>
						Подробнее
						{/* <img src={arrow_up} alt="" /> */}
					</Link>
				</div>
			</div>
			{/* ))} */}
		</div>
	)
}

export default SpecialOffersCard
