import cn from 'classnames'
import React from 'react'
import {Link, useLocation} from 'react-router-dom'

import cl from './navbar.module.scss'

const Navbar = () => {

	const location = useLocation();

	return (
		<div className={cn([cl.navbar, 'd-xs-flex', 'd-sm-none'])}>
			<div className="container">
				<div className={cn([cl.navbarLinks, 'd-flex', 'justify-content-between', 'align-items-center'])}>
					<Link to="/" className={location.pathname === '/' ? cl.activeLink : ''} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
						<div className={cn([cl.linkGroup, 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center'])}>
							<img src='../../../assets/img/navbar/home.svg' alt="иконка" className={cl.icon} />
							<div className={cl.name}>Главная</div>
						</div>
					</Link>
					<Link to="/#services">
						<div className={cn([cl.linkGroup, 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center'])}>
							<img src='../../../assets/img/navbar/service.svg' alt="иконка" className={cl.icon} />
							<div className={cl.name}>Услуги</div>
						</div>
					</Link>
					{/*<Link to="/" className={activeLink === 'home' ? cl.activeLink : ''}>*/}
					{/*<Link to="/">*/}
					{/*	<div className={cn([cl.linkGroup, 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center'])}>*/}
					{/*		<img src='../../../assets/img/navbar/home.svg' alt="иконка" className={cl.icon} />*/}
					{/*		<div className={cl.name}>Главная</div>*/}
					{/*	</div>*/}
					{/*</Link>*/}
					{/*<Link to="#services">*/}
					{/*	<div className={cn([cl.linkGroup, 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center'])}>*/}
					{/*		<img src='../../../assets/img/navbar/service.svg' alt="иконка" className={cl.icon} />*/}
					{/*		<div className={cl.name}>Услуги</div>*/}
					{/*	</div>*/}
					{/*</Link>*/}
					<Link to="">
						<div className={cn([cl.linkGroup, 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center'])}>
							<img src='../../../assets/img/navbar/location.svg' alt="иконка" className={cl.icon} />
							<div className={cl.name}>Контакты</div>
						</div>
					</Link>
					<Link to="">
						<div className={cn([cl.linkGroup, 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center'])}>
							<img src='../../../assets/img/navbar/user.svg' alt="иконка" className={cl.icon} />
							<div className={cl.name}>Кабинет</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Navbar
