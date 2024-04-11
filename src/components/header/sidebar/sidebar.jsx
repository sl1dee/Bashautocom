import calendar from '@assets/img/about/calendar.svg'
import career from '@assets/img/about/career.svg'
import information from '@assets/img/about/i.svg'
import loyaltyProgram from '@assets/img/about/loyaltyProgram.svg'
import news from '@assets/img/about/news.svg'
import burger from '@assets/img/header/burger.svg'
import logo from '@assets/img/header/new_logo.svg'
import user from '@assets/img/header/user.svg'
import bodyRepair from '@assets/img/our-services/bodyRepair.svg'
import carsRent from '@assets/img/our-services/carsRent.svg'
import detailing from '@assets/img/our-services/detailing.svg'
import insurance from '@assets/img/our-services/insurance.svg'
import lending from '@assets/img/our-services/lending.svg'
import serviceCenter from '@assets/img/our-services/serviceСenter.svg'
import tradeIn from '@assets/img/our-services/tradeIn.svg'
import useDisableScroll from '@hooks/use-disable-scroll.js'
import { setBurgerIsOpen } from '@store/modules/modals.js'
import cn from 'classnames'
import React, { useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import Button from '@ui/button/button.jsx'

import cl from './sidebar.module.scss'

const Sidebar = () => {
	const dispatch = useDispatch()
	useDisableScroll()

	const [isWasClosed, setIsWasClosed] = useState(false)

	const closeHandler = () => {
		setIsWasClosed(true)

		setTimeout(() => dispatch(setBurgerIsOpen(false)), 310)
	}

	const navigationList = useMemo(
		() => [
			{
				id: 0,
				href: '/',
				header: 'Новые автомобили'
			},
			{
				id: 1,
				href: '/',
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
						href: '/',
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

	return (
		<div className={cl.sidebar}>
			<div className={cl.sidebarBckg} onClick={closeHandler} title="Закрыть" />
			<div
				className={cn([
					cl.sidebarContent,
					{ [cl.sidebarContentClosed]: isWasClosed },
					'd-flex',
					'flex-column',
					'justify-content-md-between',
					'h-100'
				])}
			>
				<div className={cn([cl.sidebarContentHeader, 'd-flex', 'justify-content-between'])}>
					<div className={cn([cl.logo, 'd-flex', 'align-items-center'])}>
						<Link to="/">
							<img src={logo} alt="logo" />
						</Link>
					</div>
					<div className={cn([cl.buttons, 'd-flex'])}>
						<Button sizeStyle="sizeContent" className={cn([cl.buttonsSignUp, 'd-none', 'd-sm-flex'])}>
							Записаться
						</Button>
						<Button
							sizeStyle="sizeContent"
							colorStyle="Secondary"
							className={cn([cl.buttonsAccount, 'd-none', 'd-sm-flex'])}
						>
							<img src={user} alt="userIcon" className={cl.buttonsAccountIcon} />
						</Button>
						<div className={cn([cl.buttonsBurger, 'd-flex', 'd-lg-none'])} onClick={closeHandler}>
							<img src={burger} alt="burgerIcon" />
						</div>
					</div>
				</div>
				<div className={cn([cl.sidebarContentBody, 'd-flex', 'flex-column'])}>
					{navigationList.map(({ id, header, href, links }) => (
						<div key={id} className={cn([cl.sidebarContentBodyLinks, 'd-flex', 'flex-column'])}>
							<Link to={href}>
								<div>
									<h6 className={cn([cl.headerLinks, 'mb-0'])}>{header}</h6>
								</div>
							</Link>
							{links?.map(({ id, text, href, icon }) => (
								<Link key={id} to={href}>
									<div className={cn([cl.group, 'd-flex'])}>
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
	)
}

export default Sidebar
