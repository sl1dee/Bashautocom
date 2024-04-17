import cn from 'classnames'
import React from 'react'

import cl from './reviews-card.module.scss'

const ReviewsCard = ({ video, text, play }) => {
	return (
		<div className={cn([cl.reviewsCard, 'd-flex', 'flex-column'])}>
			<img src={video} alt="auto" className={cl.reviewsCardVideo} />
			<div className={cl.reviewsCardText}>{text}</div>
			<img src={play} alt="" className={cl.reviewsCardPlay} />
		</div>
	)
}

export default ReviewsCard
