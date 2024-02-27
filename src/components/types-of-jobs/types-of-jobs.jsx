import automaticTransmissionReplacement from '@assets/img/types-of-jobs/automaticTransmissionReplacement.jpg'
import chassisRepair from '@assets/img/types-of-jobs/chassisRepair.jpg'
import diagnostics from '@assets/img/types-of-jobs/diagnostics.jpg'
import maintenance from '@assets/img/types-of-jobs/maintenance.jpg'
import refillingAirConditioners from '@assets/img/types-of-jobs/refillingAirConditioners.jpg'
import tireService from '@assets/img/types-of-jobs/tireService.jpg'
import wheelAlignment from '@assets/img/types-of-jobs/wheelAlignment.jpg'
import сhangeOfOil from '@assets/img/types-of-jobs/сhangeOfOil.jpg'
import cn from 'classnames'
import React from 'react'

import Button from '@ui/button/button.jsx'

import cl from './types-of-jobs.module.scss'

const TypesOfJobs = ({ title }) => {
	const typesList = [
		{
			id: 1,
			image: maintenance,
			title: 'Техническое обслуживание'
		},
		{
			id: 2,
			image: сhangeOfOil,
			title: 'Замена масла'
		},
		{
			id: 3,
			image: wheelAlignment,
			title: 'Развал-схождение'
		},
		{
			id: 4,
			image: refillingAirConditioners,
			title: 'Заправка кондиционеров'
		},
		{
			id: 5,
			image: diagnostics,
			title: 'Диагностика'
		},
		{
			id: 6,
			image: chassisRepair,
			title: 'Ремонт ходовой части'
		},
		{
			id: 7,
			image: tireService,
			title: 'Шиномонтаж'
		},
		{
			id: 8,
			image: automaticTransmissionReplacement,
			title: 'Замена в АКПП'
		}
	]

	return (
		<div className={cl.typesOfJob}>
			<div className="container p-0">
				<div className={cn([cl.typesOfJobInformation, 'd-flex', 'flex-column'])}>
					<h1 className={cn([cl.typesOfJobInformationTitle, 'mb-0'])}>{title}</h1>
					<span className={cn([cl.typesOfJobInformationBlock, 'd-flex', 'flex-column'])}>
						<div className={cn([cl.cards, 'row', 'row-cols-4'])}>
							{typesList.map(({ image, title }) => (
								<div className={cn([cl.card, 'd-flex', 'flex-column'])}>
									<img src={image} alt="event" className={cl.cardImage} />
									<h6 className={cn([cl.cardTitle, 'mb-0'])}>{title}</h6>
									<div className="d-flex">
										<Button sizeStyle="sizeM" className={cl.btn}>
											Записаться
										</Button>
									</div>
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
