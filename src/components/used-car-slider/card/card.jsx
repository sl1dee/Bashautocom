import cn from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

import cl from './card.module.scss'

const Card = ({ image, name, year, owner, mileage, gearbox, drive, price }) => {
	return (
		<div className={cl.wrapper}>
			<Link to="/used-car">
				<div className={cn([cl.card, 'd-flex', 'flex-column'])}>
					<img src={image} alt="" />
					<div className={cn([cl.information, 'd-flex', 'flex-column'])}>
						<div className={cn([cl.firstBlock, 'd-flex', 'flex-column'])}>
							<h5 className={cn([cl.name, 'mb-0'])}>{name}</h5>
							<div className={cl.year}>{year}</div>
						</div>
						<div className={cn([cl.secondBlock, 'd-flex', 'flex-column'])}>
							<span className={cn(['d-flex'])}>
								<div className={cn([cl.owner, 'd-flex', 'align-items-center'])}>{owner}</div>
								<div className={cn([cl.mileage, 'd-flex', 'align-items-center'])}>{mileage}</div>
							</span>
							<span className={cn(['d-flex'])}>
								<div className={cn([cl.gearbox, 'd-flex', 'align-items-center'])}>{gearbox}</div>
								<div className={cn([cl.drive, 'd-flex', 'align-items-center'])}>{drive}</div>
							</span>
						</div>
						<h4 className={cn([cl.price, 'mb-0'])}>{price}</h4>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default Card
