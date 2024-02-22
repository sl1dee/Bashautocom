import cn from 'classnames'
import { Link } from 'react-router-dom'

import logo from '../../../assets/img/header/new_logo.svg'
import user from '../../../assets/img/header/user.svg'
import Button from '../../ui/button/index.js'
import cl from './header.module.scss'

const Header = () => {
	return (
		<header className={cn([cl.header])}>
			<div className="container-fluid d-flex flex-column p-0">
				<div className={cl.headerInformation}>
					<div className={cn([cl.headerInformationTopLinks], 'd-flex', 'justify-content-end')}>
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
					<div className={cn([cl.headerInformationLinks], 'd-flex', 'justify-content-between')}>
						<div className="d-flex align-items-center">
							<Link to="/">
								<img src={logo} alt="logo" />
							</Link>
						</div>
						<div className="d-flex align-items-center gap-4">
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
							<div>
								<Link to="/">
									<span>Корпоративным клиентам</span>
								</Link>
							</div>
							<div>
								<Link to="/">
									<span>Услуги</span>
								</Link>
							</div>
							<div>
								<Link to="/">
									<span>О компании</span>
								</Link>
							</div>
							<div>
								<Link to="/">
									<span>Контакты</span>
								</Link>
							</div>
						</div>
						<div className="d-flex gap-4">
							<Button sizeStyle="sizeL">Записаться</Button>
							<Button sizeStyle="sizeL" colorStyle="Outlined" className="d-flex gap-2">
								<img src={user} alt="" />
								Личный кабинет
							</Button>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
