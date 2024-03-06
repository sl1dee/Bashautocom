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
						<span className={cn([cl.footerContentContacts, 'd-flex', 'flex-column'])}>
							<img src={logo} alt="" className={cl.logo} />
							<div className={cn([cl.phone, 'd-flex', 'flex-column'])}>
								<div className={cl.phoneNumber}>+7 (347) 123-45-67</div>
								<Link to="/" className={cn([cl.phoneLink, 'd-flex'])}>
									Заказать звонок
								</Link>
							</div>
							<div className="d-flex gap-4">
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
							<p className={cl.text}>Сайт носит информационный характер и предложения не являются публичной офертой.</p>
						</span>
						<span className={cn([cl.footerContentBuy, 'd-flex', 'flex-column'])}>
							<div className={cl.title}>Купить автомобиль</div>
							<div className={cl.link}>
								<Link to="/">Новые автомобили</Link>
							</div>
							<div className={cl.link}>
								<Link to="/">Авто с пробегом</Link>
							</div>
							<div className={cl.link}>
								<Link to="/">Специальные предложения</Link>
							</div>
						</span>
						<span className={cn([cl.footerContentCompany, 'd-flex', 'flex-column'])}>
							<div className={cl.title}>Компания</div>
							<div className={cl.link}>
								<Link to="/">О компании</Link>
							</div>
							<div className={cl.link}>
								<Link to="/">Карьера</Link>
							</div>
							<div className={cl.link}>
								<Link to="/">Программа лояльности</Link>
							</div>
							<div className={cl.link}>
								<Link to="/">Новости</Link>
							</div>
							<div className={cl.link}>
								<Link to="/">История компании</Link>
							</div>
							<div className={cl.link}>
								<Link to="/">Контакты</Link>
							</div>
						</span>
						<span className={cn([cl.footerContentServices, 'd-flex', 'flex-column'])}>
							<div className={cl.title}>Услуги</div>
							<div className={cl.link}>
								<Link to="/">Корпоративным клиентам</Link>
							</div>
							<div className={cl.link}>
								<Link to="/">Сервисный центр</Link>
							</div>
							<div className={cl.link}>
								<Link to="/">Кузовной ремонт</Link>
							</div>
							<div className={cl.link}>
								<Link to="/">Детейлинг</Link>
							</div>
							<div className={cl.link}>
								<Link to="/">Выкуп и Trade-In</Link>
							</div>
							<div className={cl.link}>
								<Link to="/">Страхование</Link>
							</div>
							<div className={cl.link}>
								<Link to="/">Кредитование</Link>
							</div>
							<div className={cl.link}>
								<Link to="/">Аренда автомобиля</Link>
							</div>
						</span>
						<span className={cn([cl.footerContentDownload, 'd-flex', 'flex-column'])}>
							<div className={cl.title}>Скачайте приложение Башавтоком</div>
							<div className={cn([cl.icons, 'd-flex'])}>
								<img src={qr} alt="" />
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
					<div className={cn([cl.footer2Links, 'd-flex', 'justify-content-between'])}>
						<p>
							<Link to="/">Политика конфиденциальности</Link>
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
