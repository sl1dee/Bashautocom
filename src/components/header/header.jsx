import close from '@assets/img/header/close.svg'
import cn from 'classnames'
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import Sidebar from '@components/header/sidebar/sidebar.jsx'

import calendar from '../../../assets/img/about/calendar.svg'
import career from '../../../assets/img/about/career.svg'
import information from '../../../assets/img/about/i.svg'
import loyaltyProgram from '../../../assets/img/about/loyaltyProgram.svg'
import news from '../../../assets/img/about/news.svg'
import burger from '../../../assets/img/header/burger.svg'
import burgerMobile from '../../../assets/img/header/burger_mobile.svg'
import logo from '../../../assets/img/header/new_logo.svg'
import logoMobile from '../../../assets/img/header/new_logo_mobile.svg'
import user from '../../../assets/img/header/user.svg'
import bodyRepair from '../../../assets/img/our-services/bodyRepair.svg'
import carsRent from '../../../assets/img/our-services/carsRent.svg'
import detailing from '../../../assets/img/our-services/detailing.svg'
import insurance from '../../../assets/img/our-services/insurance.svg'
import lending from '../../../assets/img/our-services/lending.svg'
import serviceCenter from '../../../assets/img/our-services/serviceСenter.svg'
import tradeIn from '../../../assets/img/our-services/tradeIn.svg'
import { setBurgerIsOpen } from '../../store/modules/modals.js'
import Button from '../../ui/button/index.js'
import cl from './header.module.scss'

const Header = () => {
	const dispatch = useDispatch()
	const [isScrolled, setIsScrolled] = useState(false)
	const [isOpenServices, setIsOpenServices] = useState(false)
	const [isOpenAbout, setIsOpenAbout] = useState(false)

	const handleScroll = () => {
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop
		setIsScrolled(scrollTop > 0)
	}

	const openBurgerHandler = () => {
		dispatch(setBurgerIsOpen(true))
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
			href: '/',
			title: 'Выкуп и Trade-In',
			text: 'Выкупим или обменяем ваш автомобиль на новый',
			icon: tradeIn
		},
		{
			id: 2,
			href: '/service-center',
			title: 'Сервисный центр',
			text: 'Технический осмотр, диагностика и др.',
			icon: serviceCenter
		},
		{
			id: 3,
			href: '/',
			title: 'Кузовной ремонт',
			text: 'Ремонт деталей кузова, покраска, полировка и др.',
			icon: bodyRepair
		},
		{
			id: 4,
			href: '/',
			title: 'Детейлинг',
			text: 'Полировка кузова, пленка, химчистка и др.',
			icon: detailing
		},
		{
			id: 5,
			href: '/',
			title: 'Кредитование',
			text: 'Выгодные условия от 0,1%',
			icon: lending
		},
		{
			id: 6,
			href: '/',
			title: 'Страхование',
			text: 'ОСАГО, КАСКО и др.',
			icon: insurance
		},
		{
			id: 7,
			href: '/',
			title: 'Аренда автомобилей',
			text: 'Автомобиль для любых целей',
			icon: carsRent
		}
	]

	const aboutList = [
		{
			id: 1,
			href: '/',
			title: 'О компании',
			text: 'Лидер авторынка в Башкирии',
			icon: information
		},
		{
			id: 2,
			href: '/',
			title: 'Карьера',
			text: 'Работа и карьера в компании мечты',
			icon: career
		},
		{
			id: 3,
			href: '/',
			title: 'Новости',
			text: 'Будьте в курсе событий Башавтоком',
			icon: news
		},
		{
			id: 4,
			href: '/',
			title: 'История компании',
			text: 'Рассказываем про наш путь с 1992 года',
			icon: calendar
		},
		{
			id: 5,
			href: '/',
			title: 'Программа лояльности',
			text: 'Позволь себе больше',
			icon: loyaltyProgram
		}
	]

	const navigationList = useMemo(
		() => [
			{
				id: 0,
				href: '/new-cars',
				header: 'Новые автомобили'
			},
			{
				id: 1,
				href: '/used-cars',
				header: 'Автомобили с пробегом'
			},
			{
				id: 2,
				href: '/',
				header: 'Корпоративным клиентам'
			},

			{
				id: 3,
				href: '/',
				header: 'Услуги',
				links: [
					{
						id: 0,
						href: '/',
						icon: tradeIn,
						text: 'Выкуп и Trade-In'
					},
					{
						id: 1,
						href: '/service-center',
						icon: serviceCenter,
						text: 'Сервисный центр'
					},
					{
						id: 2,
						href: '/',
						icon: bodyRepair,
						text: 'Кузовной ремонт'
					},
					{
						id: 3,
						href: '/',
						icon: detailing,
						text: 'Детейлинг'
					},
					{
						id: 4,
						href: '/',
						icon: lending,
						text: 'Кредитование'
					},
					{
						id: 5,
						href: '/',
						icon: insurance,
						text: 'Страхование'
					},
					{
						id: 6,
						href: '/',
						icon: carsRent,
						text: 'Аренда автомобилей'
					}
				]
			},

			{
				id: 4,
				href: '/',
				header: 'О компании',
				links: [
					{
						id: 0,
						href: '/',
						icon: information,
						text: 'О компании'
					},
					{
						id: 1,
						href: '/',
						icon: career,
						text: 'Карьера'
					},
					{
						id: 2,
						href: '/',
						icon: news,
						text: 'Новости'
					},
					{
						id: 3,
						href: '/',
						icon: calendar,
						text: 'История компании'
					},
					{
						id: 4,
						href: '/',
						icon: loyaltyProgram,
						text: 'Программа лояльности'
					}
				]
			},
			{
				id: 5,
				href: '/',
				header: 'Контакты'
			}
		],
		[]
	)

	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<header className={`${cl.header} ${isScrolled ? cl.scrolled : ''}`}>
				<div className="d-flex flex-column p-0">
					<div className={cl.headerInformation}>
						<div className="container">
							<div className={cn([cl.headerInformationTopLinks], 'd-none', 'd-lg-flex', 'justify-content-end')}>
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
							<div
								className={cn(
									[cl.headerInformationLinks],
									'container',
									'd-flex',
									'justify-content-between',
									'align-items-center'
								)}
							>
								<div className={cn([cl.logo, 'd-none', 'd-sm-flex', 'align-items-center'])}>
									<Link to="/">
										<img src={logo} alt="logo" />
									</Link>
								</div>
								<div className={cn([cl.logo, 'd-xs-flex', 'd-sm-none', 'align-items-center'])}>
									<Link to="/">
										<img src={logoMobile} alt="logo" />
									</Link>
								</div>
								<div className={cn(cl.servicesLinks, 'd-none', 'd-lg-flex', 'align-items-center')}>
									<div className={cl.servicesLinksLink}>
										<Link to="/new-cars">
											<span>Новые авто</span>
										</Link>
									</div>
									<div className={cl.servicesLinksLink}>
										<Link to="/used-cars">
											<span>Авто с пробегом</span>
										</Link>
									</div>
									<div className={cn([cl.servicesLinksLink, 'd-none', 'd-xxl-flex'])}>
										<Link to="/">
											<span>Корпоративным клиентам</span>
										</Link>
									</div>
									<div className={cl.servicesLinksLink}>
										{/*<Link to="/" onClick={() => setIsOpenServices(!isOpenServices)}>*/}
										{/*	<span>Услуги</span>*/}
										{/*</Link>*/}
										<div className={cl.droplink}>
											<span>Услуги</span>
										</div>
										{/*<div className={isOpenServices ? cn([cl.dropdown, cl.dropdownOpen]) : cl.dropdown}>*/}
										<div className={cl.dropdown}>
											<div className={cn([cl.cards, 'container'])}>
												{servicesList.map(({ id, href, title, text, icon }) => (
													<Link to={href}>
														<div className={cn([cl.cardWrapper, 'd-flex'])} key={id}>
															<div className={cn([cl.card, 'd-flex', 'flex-column'])}>
																<div className={cn([cl.cardDescription, 'd-flex', 'flex-column'])}>
																	<div className={cl.cardDescriptionTitle}>{title}</div>
																	<div className={cl.cardDescriptionText}>{text}</div>
																</div>
																<img src={icon} alt="" className={cl.cardImg} />
															</div>
														</div>
													</Link>
												))}
											</div>
										</div>
									</div>
									<div className={cl.servicesLinksLink}>
										{/*<Link to="/" onClick={() => setIsOpenAbout(!isOpenAbout)}>*/}
										{/*	<span>О компании</span>*/}
										{/*</Link>*/}
										<div className={cl.droplink}>
											<span>О компании</span>
										</div>
										{/*<div className={isOpenAbout ? cn([cl.dropdown, cl.dropdownOpen]) : cl.dropdown}>*/}
										{/*<div className={cl.bckg}></div>*/}
										<div className={cl.dropdown}>
											<div className={cn([cl.cards, 'container'])}>
												{aboutList.map(({ id, href, title, text, icon }) => (
													<Link to={href}>
														<div className={cn([cl.cardWrapper, 'd-flex'])} key={id}>
															<div className={cn([cl.card, 'd-flex', 'flex-column'])}>
																<div className={cn([cl.cardDescription, 'd-flex', 'flex-column'])}>
																	<div className={cl.cardDescriptionTitle}>{title}</div>
																	<div className={cl.cardDescriptionText}>{text}</div>
																</div>
																<img src={icon} alt="" className={cl.cardImg} />
															</div>
														</div>
													</Link>
												))}
											</div>
										</div>
									</div>
									<div className={cn([cl.servicesLinksLink, 'd-none', 'd-xxl-flex'])}>
										<Link to="/">
											<span>Контакты</span>
										</Link>
									</div>
									<div className={cn([cl.servicesLinksLink, 'd-none', 'd-lg-flex', 'd-xxl-none'])}>
										{/*<Link to="/">*/}
										{/*	<span>Еще</span>*/}
										{/*</Link>*/}
										<div className={cl.smalldrop}>
											<div className={cl.smalldroplink}>
												<span>Еще</span>
											</div>
											<div className={cn([cl.smalldropdown, 'd-flex', 'flex-column'])}>
												<div className={cl.smalldropdownBlock}>
													<Link to="" className={cl.smalldropdownBlockLink}>
														Корпоративным клиентам
													</Link>
												</div>
												<div className={cl.smalldropdownBlock}>
													<Link to="" className={cl.smalldropdownBlockLink}>
														Контакты
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className={cl.buttons}>
									<Button sizeStyle="sizeContent" className={cn([cl.buttonsSignUp])}>
										Записаться
									</Button>
									<Button sizeStyle="sizeContent" colorStyle="Secondary" className={cn([cl.buttonsAccount])}>
										<img src={user} alt="userIcon" className={cl.buttonsAccountIcon} />
										<span className={cl.buttonsAccountName}>Личный кабинет</span>
									</Button>
									<div
										className={cn([cl.buttonsBurger, 'd-none', 'd-sm-flex', 'd-lg-none'])}
										onClick={() => setIsOpen(!isOpen)}
									>
										<img src={burger} alt="burgerIcon" />
									</div>
									<div
										className={cn([cl.buttonsBurger, 'd-xs-flex', 'd-sm-none', 'd-lg-none'])}
										onClick={() => setIsOpen(!isOpen)}
									>
										{isOpen ? <img src={close} alt="burgerIcon" /> : <img src={burgerMobile} alt="burgerIcon" />}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

			<div className={`${cl.sidebar} ${isOpen ? '' : cl.active}`}>
				<div className={`${isOpen ? cl.sidebarBckg : ''}`} title="Закрыть" onClick={() => setIsOpen(!isOpen)} />
				<div className={cn([cl.sidebarContent, 'd-flex', 'flex-column', 'justify-content-md-between', 'h-100'])}>
					{/*<div className={cn([cl.sidebarContentHeader, 'd-flex', 'justify-content-between', 'align-items-center'])}>*/}
					{/*	<div className={cn([cl.logo, 'd-none', 'd-sm-flex', 'align-items-center'])}>*/}
					{/*		<Link to="/">*/}
					{/*			<img src={logo} alt="logo" />*/}
					{/*		</Link>*/}
					{/*	</div>*/}
					{/*	<div className={cn([cl.logo, 'd-xs-flex', 'd-sm-none', 'align-items-center'])}>*/}
					{/*		<Link to="/">*/}
					{/*			<img src={logoMobile} alt="logo" />*/}
					{/*		</Link>*/}
					{/*	</div>*/}
					{/*	<div className={cn([cl.buttons, 'd-flex'])}>*/}
					{/*		<Button sizeStyle="sizeContent" className={cn([cl.buttonsSignUp, 'd-none', 'd-sm-flex'])}>*/}
					{/*			Записаться*/}
					{/*		</Button>*/}
					{/*		<Button*/}
					{/*			sizeStyle="sizeContent"*/}
					{/*			colorStyle="Secondary"*/}
					{/*			className={cn([cl.buttonsAccount, 'd-none', 'd-sm-flex'])}*/}
					{/*		>*/}
					{/*			<img src={user} alt="userIcon" className={cl.buttonsAccountIcon} />*/}
					{/*		</Button>*/}
					{/*		<div*/}
					{/*			className={cn([cl.buttonsBurger, 'd-none', 'd-sm-flex', 'd-lg-none'])}*/}
					{/*			onClick={() => setIsOpen(!isOpen)}*/}
					{/*		>*/}
					{/*			<img src={burger} alt="burgerIcon" />*/}
					{/*		</div>*/}
					{/*		<div className={cn([cl.buttonsBurger, 'd-xs-flex', 'd-sm-none'])} onClick={() => setIsOpen(!isOpen)}>*/}
					{/*			<img src={close} alt="burgerIcon" />*/}
					{/*		</div>*/}
					{/*	</div>*/}
					{/*</div>*/}
					<div className={cn([cl.sidebarContentBody, 'd-flex', 'flex-column'])}>
						{navigationList.map(({ id, header, href, links }) => (
							<div key={id} className={cn([cl.sidebarContentBodyLinks, 'd-flex', 'flex-column'])}>
								<Link to={href}>
									<div onClick={() => setIsOpen(!isOpen)}>
										<h6 className={cn([cl.headerLinks, 'mb-0'])}>{header}</h6>
									</div>
								</Link>
								{links?.map(({ id, text, href, icon }) => (
									<Link key={id} to={href}>
										<div className={cn([cl.group, 'd-flex', 'align-items-center'])} onClick={() => setIsOpen(!isOpen)}>
											<img src={icon} alt="" />
											<p className={cn([cl.subLinks, 'mb-0'])}>{text}</p>
										</div>
									</Link>
								))}
							</div>
						))}
						<div className={cn([cl.sidebarContentBodyFooter, 'd-flex', 'flex-column'])}>
							<a href="tel:+73471234567" className={cl.phone}>
								+7 (347) 123-45-67
							</a>
							<Link to="/" className={cl.modal}>
								Заказать звонок
							</Link>
							<Link to="/" className={cl.modal}>
								Написать гендиректору
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Header
