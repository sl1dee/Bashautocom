import cn from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../../ui/button/index.js'
import cl from './our-services.module.scss'

const OurServices = ({ ourServicesCards }) => {

	return (
		<div className={cl.ourServices}>
			<div className="container p-0">
				<div className={cn([cl.ourServicesInformation, 'd-flex', 'flex-column'])}>
					<h1
						className={cn([
							cl.ourServicesInformationTitle,
							'd-flex',
							'justify-content-sm-center',
							'justify-content-xs-start',
							'mb-0'
						])}
					>
						Наши услуги
					</h1>
					<div className={cn([cl.ourServicesInformationCards])}>
						{ourServicesCards.map(({ id, href, title, text, icon }) => (
							<div key={id}>
								<div className={cn([cl.cardWrapper, 'd-none', 'd-lg-flex'])}>
									<div className={cn([cl.card, 'd-flex', 'flex-column', 'justify-content-between'])}>
										<div className={cn([cl.cardGroup, 'd-flex', 'justify-content-between'])}>
											<div className={cn([cl.cardGroupInfo, 'd-flex', 'flex-column'])}>
												<div className={cl.cardGroupInfoTitle}>{title}</div>
												<div className={cl.cardGroupInfoText}>{text}</div>
											</div>
											<img src={icon} alt="" className={cl.cardGroupImg} />
										</div>
										<Link to={href}>
											<div className={cn([cl.btn, 'd-none', 'd-lg-flex'])}>
												<Button
													sizeStyle="sizeL"
													colorStyle="secondary"
													className={cn([cl.button], 'd-none', 'd-lg-flex')}
												>
													Подробнее
												</Button>
											</div>
										</Link>
									</div>
								</div>
								<Link to={href} className="d-flex d-lg-none">
									<div className={cn([cl.cardWrapper, 'd-flex', 'd-lg-none'])} key={id}>
										<div className={cn([cl.card, 'd-flex', 'flex-column', 'justify-content-between'])}>
											<div className={cn([cl.cardGroup, 'd-flex', 'justify-content-between'])}>
												<div className={cn([cl.cardGroupInfo, 'd-flex', 'flex-column'])}>
													<div className={cl.cardGroupInfoTitle}>{title}</div>
													<div className={cl.cardGroupInfoText}>{text}</div>
												</div>
												<img src={icon} alt="" className={cl.cardGroupImg} />
											</div>
										</div>
									</div>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default OurServices
