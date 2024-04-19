import cn from 'classnames'
import React from 'react'

import cl from './in-our-showrooms.module.scss'

const InOurShowrooms = ({ title, cardList, description }) => {
	// const cardList = [
	// 	{
	// 		id: 0,
	// 		number: '1',
	// 		text: 'Вас проконсультируют по поводу автокредитования'
	// 	},
	// 	{
	// 		id: 1,
	// 		number: '2',
	// 		text: 'Получите условия предоставления кредитов от разных банков'
	// 	},
	// 	{
	// 		id: 2,
	// 		number: '3',
	// 		text: 'Получите условия предоставления кредитов от разных банков'
	// 	}
	// ]

	return (
		<div className={cl.showroom}>
			<div className="container">
				<div
					className={cn([cl.showroomWrapper, 'd-flex', 'flex-column', 'align-items-center', 'justify-content-center'])}
				>
					<div
						className={cn([
							cl.showroomWrapperBlock1,
							'd-flex',
							'flex-column',
							'align-items-center',
							'justify-content-center'
						])}
					>
						<div className={cl.title}>{title}</div>
						<div className={cn([cl.cards, 'd-flex'])}>
							{cardList.map(({ id, number, text }) => (
								<div
									key={id}
									className={cn([cl.card, 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center'])}
								>
									<div className={cn(cl.number, 'd-flex', 'justify-content-center', 'align-items-center')}>
										{number}
									</div>
									<div className={cl.text}>{text}</div>
								</div>
							))}
						</div>
					</div>
					<div className={cn([cl.showroomWrapperBlock2])}>
						и всё это можно совместить с приятным выбором автомобиля мечты
					</div>
				</div>
			</div>
		</div>
	)
}

export default InOurShowrooms
