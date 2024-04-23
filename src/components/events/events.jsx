import changan from '@assets/img/events/changan.jpg'
import jaecoo from '@assets/img/events/jaecoo.jpg'
import lada from '@assets/img/events/lada.jpg'
import omoda from '@assets/img/events/omoda.jpg'
import cn from 'classnames'
import { Link } from 'react-router-dom'

import Button from '../../ui/button/index.js'
import cl from './events.module.scss'

const Events = ({ events }) => {

	return (
		<>
			{events.map(({ title, cards }) => (
				<div className={cl.events}>
					<div className="container p-0">
						<div className={cn([cl.eventsInformation, 'd-flex', 'flex-column'])}>
							<h1 className={cn([cl.eventsInformationTitle, 'mb-0'])}>Будьте в курсе событий</h1>
							<span className={cn([cl.eventsInformationBlock, 'd-flex', 'flex-column'])}>
								<div className={cn([cl.cards, 'd-grid'])}>
									{cards.map(({ image, href, title, date }) => (
										<Link to={href} className={cn([cl.card, 'd-flex', 'flex-column'])}>
											<img src={image} alt="event" className={cl.cardImage} />
											<h6 className={cn([cl.cardTitle, 'mb-0'])}>{title}</h6>
											<p className={cn([cl.cardDate, 'mb-0'])}>{date}</p>
										</Link>
									))}
								</div>
								<div className="d-flex align-self-start align-self-sm-end">
									<Link to="/">
										<Button sizeStyle="sizeContent" className={cn(cl.btn, 'd-flex', 'align-items-center')}>
											<div className="d-none d-sm-flex">Читать все новости</div>
											<div className="d-xs-flex d-sm-none">Все новости</div>
											<div className={cl.arrow} />
										</Button>
									</Link>
								</div>
							</span>
						</div>
					</div>
				</div>
			))}
		</>
	)
}

export default Events
