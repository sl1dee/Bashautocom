import cn from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

import Button from '@ui/button/button.jsx'

import cl from './types-of-jobs.module.scss'

const TypesOfJobs = ({ title, typesList }) => {


	return (
		<div className={cl.typesOfJob}>
			<div className="container p-0">
				<div className={cn([cl.typesOfJobInformation, 'd-flex', 'flex-column'])}>
					<h1 className={cn([cl.typesOfJobInformationTitle, 'mb-0'])}>{title}</h1>
					<span className={cn([cl.typesOfJobInformationBlock, 'd-flex', 'flex-column'])}>
						<div className={cn([cl.cards, 'd-grid'])}>
							{typesList.map(({ image, title }) => (
								<div className={cn([cl.card, 'd-flex', 'flex-column'])}>
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

export default TypesOfJobs
