import cn from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

import cl from './main-services.module.scss'

const MainServices = ({ mainServicesList }) => {

	return (
		<div className={cl.mainServices}>
			<div className="container">
				<div className={cn([cl.mainServicesCards])}>
					{mainServicesList.map(({ id, path, title, text, imgPath }) => (
						<div key={id}>
							<Link to={path}>
								<div className={cn([cl.cardWrapper, 'elem', 'd-flex', 'justify-content-center'])}>
									<div className={cn([cl.card, 'd-flex', 'flex-column'])}>
										<p className={cn([cl.cardTitle, 'mb-0'])}>{title}</p>
										<p className={cn([cl.cardText, 'mb-0'])}>{text}</p>
										<img src={imgPath} alt="" className={cl.cardImg} />
									</div>
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default MainServices
