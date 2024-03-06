import changan from '@assets/img/events/changan.jpg'
import jaecoo from '@assets/img/events/jaecoo.jpg'
import lada from '@assets/img/events/lada.jpg'
import omoda from '@assets/img/events/omoda.jpg'
import cn from 'classnames'

import Button from '../../ui/button/index.js'
import cl from './events.module.scss'

const Events = () => {
	const eventsList = [
		{
			image: omoda,
			title: 'ОМОDА СУПЕРКАСКО по супер цене в Башавтоком!',
			date: '23.01.2024'
		},
		{
			image: jaecoo,
			title: 'JAECOO наращивает присутствие на глобальном рынке',
			date: '24.11.2023'
		},
		{
			image: lada,
			title: 'Новое специальное предложение на шиномонтаж в LADA «Башавтоком»',
			date: '23.01.2024'
		}
	]

	return (
		<div className={cl.events}>
			<div className="container p-0">
				<div className={cn([cl.eventsInformation, 'd-flex', 'flex-column'])}>
					<h1 className={cn([cl.eventsInformationTitle, 'mb-0'])}>Будьте в курсе событий</h1>
					<span className={cn([cl.eventsInformationBlock, 'd-flex', 'flex-column'])}>
						<div className={cn([cl.cards, 'd-flex'])}>
							{eventsList.map(({ image, title, date }) => (
								<div className={cn([cl.card, 'd-flex', 'flex-column'])}>
									<img src={image} alt="event" className={cl.cardImage} />
									<h6 className={cn([cl.cardTitle, 'mb-0'])}>{title}</h6>
									<p className={cn([cl.cardDate, 'mb-0'])}>{date}</p>
								</div>
							))}
						</div>
						<div className="d-flex align-self-end">
							<Button sizeStyle="sizeL" className={cl.btn}>
								Читать все новости
							</Button>
						</div>
					</span>
				</div>
			</div>
		</div>
	)
}

export default Events
