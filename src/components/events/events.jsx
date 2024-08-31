import cn from 'classnames'
import { Link } from 'react-router-dom'
import { Button } from '@consta/uikit/Button';
import cl from './events.module.scss'
import React from "react";
import {IconArrowRight} from "@consta/icons/IconArrowRight";
import {createIcon} from "@consta/icons/Icon";

const Events = ({ events }) => {

	const IconExamplePlusSizeM = () => (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M8.95011 19.9201L15.4701 13.4001C16.2401 12.6301 16.2401 11.3701 15.4701 10.6001L8.95011 4.08008" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
	);

	const IconAdd = createIcon({
		m: IconExamplePlusSizeM,
		s: IconExamplePlusSizeM,
		xs: IconExamplePlusSizeM,
		name: 'IconAdd',
	});

	return (
		<>
			{events.map(({ title, cards }) => (
				<div className={cl.events}>
					<div className="container">
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
										<Button className={cn([cl.btn, 'd-none', 'd-sm-flex', 'justify-content-center', 'align-items-center'])} label='Читать все новости' size='l' iconRight={IconAdd}/>
										<Button className={cn([cl.btn, 'd-xs-flex', 'd-sm-none', 'justify-content-center', 'align-items-center'])} label='Все новости' size='s' iconRight={IconAdd}/>
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
