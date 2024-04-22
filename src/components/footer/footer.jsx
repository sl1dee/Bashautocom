import appStore from '@assets/img/footer/appStore.svg'
import googlePlay from '@assets/img/footer/googlePlay.svg'
import logo from '@assets/img/footer/logo.svg'
import qr from '@assets/img/footer/qr.svg'
import ruStore from '@assets/img/footer/ruStore.svg'
import telegram from '@assets/img/footer/telegram.svg'
import vk from '@assets/img/footer/vk.svg'
import whatsApp from '@assets/img/footer/whatsApp.svg'
import cn from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

import cl from './footer.module.scss'

const Footer = () => {
	return (
		<div>
			<div className={cl.footer}>
				<div className="container p-0">
					<div className={cn([cl.footerContent, 'd-grid'])}>
						<div className={cn([cl.footerContentContacts, 'd-flex', 'flex-sm-column'])}>
							<div className={cn([cl.footerContentContactsGroup, 'd-flex', 'flex-column'])}>
								<img src={logo} alt="" className={cl.logo} />
								<div className={cn([cl.phone, 'd-flex', 'flex-column'])}>
									{/* <div className={cl.phoneNumber}>+7 (347) 123-45-67</div> */}
									<a href="tel:+73471234567" className={cl.phoneNumber}>
										+7 (347) 123-45-67
									</a>
									<Link to="/" className={cn([cl.phoneLink, 'd-flex'])}>
										Заказать звонок
									</Link>
								</div>
							</div>
							<div className={cn([cl.footerContentContactsIcons, 'd-flex'])}>
								<Link to="/">
									<img src={vk} alt="" />
								</Link>
								<Link to="/">
									<img src={whatsApp} alt="" />
								</Link>
								<Link to="/">
									<img src={telegram} alt="" />
								</Link>
							</div>
						</div>
						<p className={cn([cl.text, 'mb-0', 'd-flex', 'align-items-center'])}>
							Сайт носит информационный характер и предложения не являются публичной офертой.
						</p>
						<span className={cn([cl.footerContentBuy, 'd-flex', 'flex-column'])}>
							<div className={cl.title}>Купить автомобиль</div>
							<div className={cl.link}>
								<Link to="/new-cars" className={cl.actlink}>
									Новые автомобили
								</Link>
							</div>
							<div className={cl.link}>
								<Link to="/used-cars" className={cl.actlink}>
									Авто с пробегом
								</Link>
							</div>
							<div className={cl.link}>
								<Link to="/" className={cl.actlink}>
									Специальные предложения
								</Link>
							</div>
						</span>
						<span className={cn([cl.footerContentCompany, 'd-flex', 'flex-column'])}>
							<div className={cl.title}>Компания</div>
							<div className={cl.link}>
								<Link to="/" className={cl.actlink}>
									О компании
								</Link>
							</div>
							<div className={cl.link}>
								<Link to="/" className={cl.actlink}>
									Карьера
								</Link>
							</div>
							<div className={cl.link}>
								<Link to="/" className={cl.actlink}>
									Программа лояльности
								</Link>
							</div>
							<div className={cl.link}>
								<Link to="/" className={cl.actlink}>
									Новости
								</Link>
							</div>
							<div className={cl.link}>
								<Link to="/" className={cl.actlink}>
									История компании
								</Link>
							</div>
							<div className={cl.link}>
								<Link to="/" className={cl.actlink}>
									Контакты
								</Link>
							</div>
						</span>
						<span className={cn([cl.footerContentServices, 'd-flex', 'flex-column'])}>
							<div className={cl.title}>Услуги</div>
							<div className={cl.link}>
								<Link to="/" className={cl.actlink}>
									Корпоративным клиентам
								</Link>
							</div>
							<div className={cl.link}>
								<Link to="/service-center" className={cl.actlink}>
									Сервисный центр
								</Link>
							</div>
							<div className={cl.link}>
								<Link to="/body-repair" className={cl.actlink}>
									Кузовной ремонт
								</Link>
							</div>
							<div className={cl.link}>
								<Link to="/detailing" className={cl.actlink}>
									Детейлинг
								</Link>
							</div>
							<div className={cl.link}>
								<Link to="/" className={cl.actlink}>
									Выкуп и Trade-In
								</Link>
							</div>
							<div className={cl.link}>
								<Link to="/insurance" className={cl.actlink}>
									Страхование
								</Link>
							</div>
							<div className={cl.link}>
								<Link to="/credit" className={cl.actlink}>
									Кредитование
								</Link>
							</div>
							<div className={cl.link}>
								<Link to="/" className={cl.actlink}>
									Аренда автомобиля
								</Link>
							</div>
						</span>
						<span className={cn([cl.footerContentDownload, 'd-none', 'd-sm-flex', 'flex-column'])}>
							<div className={cl.title}>Скачайте приложение Башавтоком</div>
							<div className={cn([cl.icons, 'd-flex', 'flex-column', 'flex-lg-row'])}>
								<img src={qr} alt="" className={cl.qr} />
								<div className={cn([cl.iconsLinks, 'd-flex', 'flex-column'])}>
									<Link to="/">
										<img src={appStore} alt="" />
									</Link>
									<Link to="/">
										<img src={googlePlay} alt="" />
									</Link>
									<Link to="/">
										<img src={ruStore} alt="" />
									</Link>
								</div>
							</div>
						</span>
					</div>
				</div>
			</div>
			<div className={cl.footer2}>
				<div className="container p-0">
					<div className={cn([cl.footer2Links, 'd-flex', 'justify-content-between', 'flex-column', 'flex-sm-row'])}>
						<p>
							<Link to="/privacy-policy">Политика конфиденциальности</Link>
						</p>
						<p>
							Разработка сайтка -{' '}
							<Link target="_blank" to="https://ambity.ru/">
								Амбити
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
