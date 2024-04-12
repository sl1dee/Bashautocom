import home from '@assets/img/navbar/home.svg'
import location from '@assets/img/navbar/location.svg'
import service from '@assets/img/navbar/service.svg'
import user from '@assets/img/navbar/user.svg'
import cn from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

import cl from './navbar.module.scss'

const Navbar = () => {
	return (
		<div className={cn([cl.navbar, 'd-xs-flex', 'd-sm-none'])}>
			<div className="container">
				<div className={cn([cl.navbarLinks, 'd-flex', 'justify-content-between', 'align-items-center'])}>
					<Link to="/">
						<div
							className={cn([cl.linkGroup, 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center'])}
						>
							<img src={home} alt="иконка" className={cl.icon} />
							<div className={cl.name}>Главная</div>
						</div>
					</Link>
					<Link to="/">
						<div
							className={cn([cl.linkGroup, 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center'])}
						>
							<img src={service} alt="иконка" className={cl.icon} />
							<div className={cl.name}>Услуги</div>
						</div>
					</Link>
					<Link to="/">
						<div
							className={cn([cl.linkGroup, 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center'])}
						>
							<img src={location} alt="иконка" className={cl.icon} />
							<div className={cl.name}>Контакты</div>
						</div>
					</Link>
					<Link to="/">
						<div
							className={cn([cl.linkGroup, 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center'])}
						>
							<img src={user} alt="иконка" className={cl.icon} />
							<div className={cl.name}>Кабинет</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Navbar
