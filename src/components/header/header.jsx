import cn from 'classnames'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import calendar from '../../../assets/img/about/calendar.svg'
import career from '../../../assets/img/about/career.svg'
import information from '../../../assets/img/about/i.svg'
import loyaltyProgram from '../../../assets/img/about/loyaltyProgram.svg'
import news from '../../../assets/img/about/news.svg'
import logo from '../../../assets/img/header/new_logo.svg'
import user from '../../../assets/img/header/user.svg'
import bodyRepair from '../../../assets/img/our-services/bodyRepair.svg'
import carsRent from '../../../assets/img/our-services/carsRent.svg'
import detailing from '../../../assets/img/our-services/detailing.svg'
import insurance from '../../../assets/img/our-services/insurance.svg'
import lending from '../../../assets/img/our-services/lending.svg'
import serviceСenter from '../../../assets/img/our-services/serviceСenter.svg'
import tradeIn from '../../../assets/img/our-services/tradeIn.svg'
import Button from '../../ui/button/index.js'
import cl from './header.module.scss'

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false)
	const [isOpenServices, setIsOpenServices] = useState(false)
	const [isOpenAbout, setIsOpenAbout] = useState(false)

	const handleScroll = () => {
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop
		setIsScrolled(scrollTop > 0)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const servicesList = [
		{
			id: 1,
			title: 'Выкуп и Trade-In',
			text: 'Выкупим или обменяем ваш автомобиль на новый',
			icon: tradeIn
		},
		{
			id: 2,
			title: 'Сервисный центр',
			text: 'Технический осмотр, диагностика и др.',
			icon: serviceСenter
		},
		{
			id: 3,
			title: 'Кузовной ремонт',
			text: 'Ремонт деталей кузова, покраска, полировка и др.',
			icon: bodyRepair
		},
		{
			id: 4,
			title: 'Детейлинг',
			text: 'Полировка кузова, пленка, химчистка и др.',
			icon: detailing
		},
		{
			id: 5,
			title: 'Кредитование',
			text: 'Выгодные условия от 0,1%',
			icon: lending
		},
		{
			id: 6,
			title: 'Страхование',
			text: 'ОСАГО, КАСКО и др.',
			icon: insurance
		},
		{
			id: 7,
			title: 'Аренда автомобилей',
			text: 'Автомобиль для любых целей',
			icon: carsRent
		}
	]

	const aboutList = [
		{
			id: 1,
			title: 'О компании',
			text: 'Лидер авторынка в Башкирии',
			icon: information
		},
		{
			id: 2,
			title: 'Карьера',
			text: 'Работа и карьера в компании мечты',
			icon: career
		},
		{
			id: 3,
			title: 'Новости',
			text: 'Будьте в курсе событий Башавтоком',
			icon: news
		},
		{
			id: 4,
			title: 'История компании',
			text: 'Рассказываем про наш путь с 1992 года',
			icon: calendar
		},
		{
			id: 5,
			title: 'Программа лояльности',
			text: 'Позволь себе больше',
			icon: loyaltyProgram
		}
	]

	return (
		<header className={`${cl.header} ${isScrolled ? cl.scrolled : ''}`}>
			<div className="d-flex flex-column p-0">
				<div className={cl.headerInformation}>
					<div
						className={cn([cl.headerInformationTopLinks], 'container', 'd-none', 'd-lg-flex', 'justify-content-end')}
					>
						<div>
							<Link to="/">
								<span>Программа лояльности</span>
							</Link>
						</div>
						<div>
							<Link to="/">
								<span>Написать гендиректору</span>
							</Link>
						</div>
						<div>
							<Link to="/">
								<span>+7 (347) 123-45-67</span>
							</Link>
						</div>
						<div>
							<Link to="/">
								<span>Заказать звонок</span>
							</Link>
						</div>
					</div>
					<div className={cn([cl.headerInformationLinks], 'container', 'd-flex', 'justify-content-between')}>
						<div className={cn([cl.logo, 'd-flex', 'align-items-center'])}>
							<Link to="/">
								<img src={logo} alt="logo" />
							</Link>
						</div>
						<div className={cn(cl.servicesLinks, 'd-none', 'd-lg-flex', 'align-items-center')}>
							<div>
								<Link to="/">
									<span>Новые авто</span>
								</Link>
							</div>
							<div>
								<Link to="/">
									<span>Авто с пробегом</span>
								</Link>
							</div>
							<div className="d-none d-xxl-flex">
								<Link to="/">
									<span>Корпоративным клиентам</span>
								</Link>
							</div>
							<div>
								<Link to="/" onClick={() => setIsOpenServices(!isOpenServices)}>
									<span>Услуги</span>
								</Link>
								<div className={isOpenServices ? cn([cl.dropdown, cl.dropdownOpen]) : cl.dropdown}>
									<div className={cn([cl.cards, 'container'])}>
										{servicesList.map(({ id, title, text, icon }) => (
											<div className={cn([cl.cardWrapper, 'd-flex'])} key={id}>
												<div className={cn([cl.card, 'd-flex', 'flex-column'])}>
													<div className={cn([cl.cardDescription, 'd-flex', 'flex-column'])}>
														<div className={cl.cardDescriptionTitle}>{title}</div>
														<div className={cl.cardDescriptionText}>{text}</div>
													</div>
													<img src={icon} alt="" className={cl.cardImg} />
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
							<div>
								<Link to="/" onClick={() => setIsOpenAbout(!isOpenAbout)}>
									<span>О компании</span>
								</Link>
								<div className={isOpenAbout ? cn([cl.dropdown, cl.dropdownOpen]) : cl.dropdown}>
									<div className={cn([cl.cards, 'container'])}>
										{aboutList.map(({ id, title, text, icon }) => (
											<div className={cn([cl.cardWrapper, 'd-flex'])} key={id}>
												<div className={cn([cl.card, 'd-flex', 'flex-column'])}>
													<div className={cn([cl.cardDescription, 'd-flex', 'flex-column'])}>
														<div className={cl.cardDescriptionTitle}>{title}</div>
														<div className={cl.cardDescriptionText}>{text}</div>
													</div>
													<img src={icon} alt="" className={cl.cardImg} />
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
							<div className="d-none d-xxl-flex">
								<Link to="/">
									<span>Контакты</span>
								</Link>
							</div>
							<div className="d-flex d-xxl-none">
								<Link to="/">
									<span>Еще</span>
								</Link>
							</div>
						</div>
						<div className={cl.buttons}>
							<Button sizeStyle="sizeContent" className={cn([cl.buttonsSignUp])}>
								Записаться
							</Button>
							<Button sizeStyle="sizeContent" colorStyle="Secondary" className={cl.buttonsAccount}>
								<img src={user} alt="userIcon" className={cl.buttonsAccountIcon} />
								<span className={cl.buttonsAccountName}>Личный кабинет</span>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
