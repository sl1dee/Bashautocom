import bodyDetails from '@assets/img/types-of-jobs/bodyDetails.png'
import dentRepair from '@assets/img/types-of-jobs/dentRepair.png'
import geometry from '@assets/img/types-of-jobs/geometry.png'
import painting from '@assets/img/types-of-jobs/painting.png'
import plasticDetails from '@assets/img/types-of-jobs/plasticDetails.png'
import polishing from '@assets/img/types-of-jobs/polishing.png'
import cn from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

import cl from './types-of-jobs-body-repair.module.scss'

const TypesOfJobsBodyRepair = ({ typesList, title }) => {
	// const typesList = [
	// 	{
	// 		id: 1,
	// 		image: bodyDetails,
	// 		title: 'Ремонт деталей корпуса'
	// 	},
	// 	{
	// 		id: 2,
	// 		image: geometry,
	// 		title: 'Восстановление геометрии кузова'
	// 	},
	// 	{
	// 		id: 3,
	// 		image: painting,
	// 		title: 'Покраска автомобиля'
	// 	},
	// 	{
	// 		id: 4,
	// 		image: dentRepair,
	// 		title: 'Ремонт вмятин без покраски'
	// 	},
	// 	{
	// 		id: 5,
	// 		image: polishing,
	// 		title: 'Полировка кузова'
	// 	},
	// 	{
	// 		id: 6,
	// 		image: plasticDetails,
	// 		title: 'Ремонт пластиковых деталей'
	// 	}
	// ]

	return (
		<div className={cl.typesOfJob}>
			<div className="container p-0">
				<div className={cn([cl.typesOfJobInformation, 'd-flex', 'flex-column'])}>
					<h1 className={cn([cl.typesOfJobInformationTitle, 'mb-0'])}>{title}</h1>
					<span className={cn([cl.typesOfJobInformationBlock, 'd-flex', 'flex-column'])}>
						<div className={cn([cl.cards, 'd-grid'])}>
							{typesList.map(({ id, image, title }) => (
								<div className={cn([cl.card, 'd-flex', 'flex-column'])} key={id}>
									<h6 className={cn([cl.cardTitle, 'mb-0'])}>{title}</h6>
									<img src={image} alt="event" className={cl.cardImage} />
								</div>
							))}
						</div>
					</span>
				</div>
			</div>
		</div>
	)
}

export default TypesOfJobsBodyRepair
