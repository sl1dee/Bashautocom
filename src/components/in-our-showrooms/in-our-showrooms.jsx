import cn from 'classnames'
import React from 'react'

import cl from './in-our-showrooms.module.scss'

const InOurShowrooms = ({ title, cardList, description }) => {

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
						<div
							className={cn([
								cl.cards,
								'd-grid'
								// 'flex-column',
								// 'flex-lg-row',
								// 'justify-content-center',
								// 'align-items-center'
							])}
						>
							{cardList.map(({ id, number, text }) => (
								<div
									key={id}
									className={cn([cl.card, 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center'])}
								>
									<div className={cn(cl.number, 'd-flex', 'justify-content-center', 'align-items-center')}>
										{number}
									</div>
									<div className={cn([cl.text, 'd-flex', 'justify-content-center', 'align-items-center'])}>{text}</div>
								</div>
							))}
						</div>
					</div>
					<div className={cn([cl.showroomWrapperBlock2])}>{description}</div>
				</div>
			</div>
		</div>
	)
}

export default InOurShowrooms
