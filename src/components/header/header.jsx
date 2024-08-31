import cn from 'classnames'
import React, {useEffect, useMemo, useRef, useState} from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import burger from '../../../assets/img/header/burger.svg'
import burgerMobile from '../../../assets/img/header/burger_mobile.svg'
import logo from '../../../assets/img/header/new_logo.svg'
import logoMobile from '../../../assets/img/header/new_logo_mobile.svg'
import user from '../../../assets/img/header/user.svg'
import { setBurgerIsOpen } from '../../store/modules/modals.js'
import { Button } from '@consta/uikit/Button';
import cl from './header.module.scss'
import {createIcon} from "@consta/icons/Icon";

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
			icon: './assets/img/our-services/tradeIn.svg'
		},
		{
			id: 2,
			href: '/service-center',
			title: 'Сервисный центр',
			text: 'Технический осмотр, диагностика и др.',
			icon: './assets/img/our-services/serviceCenter.svg'
		},
		{
			id: 3,
			href: '/body-repair',
			title: 'Кузовной ремонт',
			text: 'Ремонт деталей кузова, покраска, полировка и др.',
			icon: './assets/img/our-services/bodyRepair.svg'
		},
		{
			id: 4,
			href: '/detailing',
			title: 'Детейлинг',
			text: 'Полировка кузова, пленка, химчистка и др.',
			icon: './assets/img/our-services/detailing.svg'
		},
		{
			id: 5,
			href: '/credit',
			title: 'Кредитование',
			text: 'Выгодные условия от 0,1%',
			icon: './assets/img/our-services/lending.svg'
		},
		{
			id: 6,
			href: '/insurance',
			title: 'Страхование',
			text: 'ОСАГО, КАСКО и др.',
			icon: './assets/img/our-services/insurance.svg'
		},
		{
			id: 7,
			href: '/rent-car',
			title: 'Аренда автомобилей',
			text: 'Автомобиль для любых целей',
			icon: './assets/img/our-services/carsRent.svg'
		}
	]

	const aboutList = [
		{
			id: 1,
			href: '/',
			title: 'О компании',
			text: 'Лидер авторынка в Башкирии',
			icon: './assets/img/about/i.svg'
		},
		{
			id: 2,
			href: '/',
			title: 'Карьера',
			text: 'Работа и карьера в компании мечты',
			icon: './assets/img/about/career.svg'
		},
		{
			id: 3,
			href: '/',
			title: 'Новости',
			text: 'Будьте в курсе событий Башавтоком',
			icon: './assets/img/about/news.svg'
		},
		{
			id: 4,
			href: '/',
			title: 'История компании',
			text: 'Рассказываем про наш путь с 1992 года',
			icon: './assets/img/about/calendar.svg'
		},
		{
			id: 5,
			href: '/',
			title: 'Программа лояльности',
			text: 'Позволь себе больше',
			icon: './assets/img/about/loyaltyProgram.svg'
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
						icon: './assets/img/our-services/tradeIn.svg',
						text: 'Выкуп и Trade-In'
					},
					{
						id: 1,
						href: '/service-center',
						icon: './assets/img/our-services/serviceCenter.svg',
						text: 'Сервисный центр'
					},
					{
						id: 2,
						href: '/body-repair',
						icon: './assets/img/our-services/bodyRepair.svg',
						text: 'Кузовной ремонт'
					},
					{
						id: 3,
						href: '/detailing',
						icon: './assets/img/our-services/detailing.svg',
						text: 'Детейлинг'
					},
					{
						id: 4,
						href: '/credit',
						icon: './assets/img/our-services/lending.svg',
						text: 'Кредитование'
					},
					{
						id: 5,
						href: '/insurance',
						icon: './assets/img/our-services/insurance.svg',
						text: 'Страхование'
					},
					{
						id: 6,
						href: '/',
						icon: './assets/img/our-services/carsRent.svg',
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
						icon: './assets/img/about/i.svg',
						text: 'О компании'
					},
					{
						id: 1,
						href: '/',
						icon: './assets/img/about/career.svg',
						text: 'Карьера'
					},
					{
						id: 2,
						href: '/',
						icon: './assets/img/about/news.svg',
						text: 'Новости'
					},
					{
						id: 3,
						href: '/',
						icon: './assets/img/about/calendar.svg',
						text: 'История компании'
					},
					{
						id: 4,
						href: '/',
						icon: './assets/img/about/loyaltyProgram.svg',
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

	const [isHover, setIsHover] = useState(false);
	const timeoutRef = useRef(null);

	const [isHover2, setIsHover2] = useState(false);
	const timeoutRef2 = useRef(null);

	const handleMenuOpen = () => {
		clearTimeout(timeoutRef.current);
		setIsHover(true);
	};

	const handleMenuClose = () => {
		timeoutRef.current = setTimeout(() => {
			setIsHover(false);
		}, 300);
	};

	const handleMenuOpen2 = () => {
		clearTimeout(timeoutRef2.current);
		setIsHover2(true);
	};

	const handleMenuClose2 = () => {
		timeoutRef2.current = setTimeout(() => {
			setIsHover2(false);
		}, 300);
	};

	if (isOpen) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = '';
	}

	const IconExamplePlusSizeM = () => (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#2F3140" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="#2F3140" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
										<div className={cl.droplink} onMouseEnter={handleMenuOpen}
											 onMouseLeave={handleMenuClose}>
											<span>Услуги</span>
										</div>
										{/*<div className={isOpenServices ? cn([cl.dropdown, cl.dropdownOpen]) : cl.dropdown}>*/}
										<div className={`${cl.dropdown} ${isHover ? cl.open : ''}`} onMouseEnter={handleMenuOpen} onMouseLeave={handleMenuClose}>
											{/*<div className={cl.dropdown} onMouseEnter={handleMenuOpen} onMouseLeave={handleMenuClose}>*/}
											<div className={cl.bckg}></div>
											<div className={cn([cl.cards, 'container'])}>
												{servicesList.map(({ id, href, title, text, icon }) => (
													<Link to={href} key={id} onClick={() => setIsHover(!isHover)}>
														<div className={cn([cl.cardWrapper, 'd-flex'])}>
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
										<div className={cl.droplink} onMouseEnter={handleMenuOpen2} onMouseLeave={handleMenuClose2}>
											<span>О компании</span>
										</div>
										<div className={`${cl.dropdown} ${isHover2 ? cl.open : ''}`} onMouseEnter={handleMenuOpen2} onMouseLeave={handleMenuClose2}>
											<div className={cl.bckg}></div>
											<div className={cn([cl.cards, 'container'])}>
												{aboutList.map(({ id, href, title, text, icon }) => (
													<Link to={href} key={id} onClick={() => setIsHover2(!isHover2)}>
														<div className={cn([cl.cardWrapper, 'd-flex'])}>
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
									<Button className={cn([cl.buttonsSignUp, 'd-none', 'd-lg-flex', 'justify-content-center', 'align-items-center'])} label='Записаться' size='l'/>
									<Button className={cn([cl.buttonsSignUp, 'd-none', 'd-sm-flex', 'd-lg-none', 'justify-content-center', 'align-items-center'])} label='Записаться' size='m'/>
									<Button className={cn([cl.buttonsAccount, 'justify-content-center', 'align-items-center'])} label='Личный кабинет' size='l' view="secondary" iconLeft={IconAdd}/>
									<Button className={cn([cl.buttonsAccIcon, 'justify-content-center', 'align-items-center'])} size='l' view="secondary" iconLeft={IconAdd} onlyIcon/>
									<Button className={cn([cl.buttonsAccIcon, 'd-none', 'd-sm-flex', 'd-lg-none', 'justify-content-center', 'align-items-center'])} size='m' view="secondary" iconLeft={IconAdd} onlyIcon/>
									<div
										className={cn([cl.buttonsBurger, 'd-none', 'd-sm-flex', 'd-lg-none'])}
										onClick={() => setIsOpen(!isOpen)}
									>
										{isOpen ? <img src='../../../assets/img/header/close.svg' alt="burgerIcon" /> : <img src={burger} alt="burgerIcon" />}
									</div>
									<div
										className={cn([cl.buttonsBurger, 'd-xs-flex', 'd-sm-none'])}
										onClick={() => setIsOpen(!isOpen)}
									>
										{isOpen ? <img src='../../../assets/img/header/close-white.svg' alt="burgerIcon" /> : <img src={burgerMobile} alt="burgerIcon" />}
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
