import automaticTransmissionReplacement from '@assets/img/types-of-jobs/automaticTransmissionReplacement.png'
import chassisRepair from '@assets/img/types-of-jobs/chassisRepair.png'
import diagnostics from '@assets/img/types-of-jobs/diagnostics.png'
import maintenance from '@assets/img/types-of-jobs/maintenance.png'
import refillingAirConditioners from '@assets/img/types-of-jobs/refillingAirConditioners.png'
import tireService from '@assets/img/types-of-jobs/tireService.png'
import wheelAlignment from '@assets/img/types-of-jobs/wheelAlignment.png'
import сhangeOfOil from '@assets/img/types-of-jobs/сhangeOfOil.png'
import cn from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

import Button from '@ui/button/button.jsx'

import cl from './types-of-jobs.module.scss'

const TypesOfJobs = ({ title, typesList }) => {
	// const typesList = [
	// {
	// 	id: 1,
	// 	image: maintenance,
	// 	title: 'Техническое обслуживание'
	// },
	// {
	// 	id: 2,
	// 	image: сhangeOfOil,
	// 	title: 'Замена масла'
	// },
	// {
	// 	id: 3,
	// 	image: wheelAlignment,
	// 	title: 'Развал-схождение'
	// },
	// {
	// 	id: 4,
	// 	image: refillingAirConditioners,
	// 	title: 'Заправка кондиционеров'
	// },
	// {
	// 	id: 5,
	// 	image: diagnostics,
	// 	title: 'Диагностика'
	// },
	// {
	// 	id: 6,
	// 	image: chassisRepair,
	// 	title: 'Ремонт ходовой части'
	// },
	// {
	// 	id: 7,
	// 	image: tireService,
	// 	title: 'Шиномонтаж'
	// },
	// {
	// 	id: 8,
	// 	image: automaticTransmissionReplacement,
	// 	title: 'Замена в АКПП'
	// }
	// ]

	return (
		<div className={cl.typesOfJob}>
			<div className="container p-0">
				<div className={cn([cl.typesOfJobInformation, 'd-flex', 'flex-column'])}>
					<h1 className={cn([cl.typesOfJobInformationTitle, 'mb-0'])}>{title}</h1>
					<span className={cn([cl.typesOfJobInformationBlock, 'd-flex', 'flex-column'])}>
						<div className={cn([cl.cards, 'd-grid'])}>
							{typesList.map(({ image, title }) => (
								<div className={cn([cl.card, 'd-flex', 'flex-column'])}>
									<Link to="/">
										<h6 className={cn([cl.cardTitle, 'mb-0'])}>{title}</h6>
										<img src={image} alt="event" className={cl.cardImage} />
									</Link>
								</div>
							))}
						</div>
					</span>
				</div>
			</div>
		</div>
	)
}

export default TypesOfJobs
