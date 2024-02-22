import cn from 'classnames'
import { Link } from 'react-router-dom'

import cl from './header.module.scss'

const Header = () => {
	return (
		<header className={cn([cl.header])}>
			<div className="container-fluid d-flex flex-column p-0">
				<div className={cn([cl.headerTopLinks], 'd-flex')}>
					<div>
						<Link to="#">Программа лояльности</Link>
					</div>
					<div>
						<Link to="#">Написать гендиректору</Link>
					</div>
					<div>
						<Link to="#">+7 (347) 123-45-67</Link>
					</div>
					<div>
						<Link to="#">Заказать звонок</Link>
					</div>
				</div>
				<div className={cn([cl.headerLinks], 'd-flex', 'justify-content-between')}>
					<div>logo</div>
					<div className="d-flex">
						<div>
							<Link to="#">Новые авто</Link>
						</div>
						<div>
							<Link to="#">Авто с пробегом</Link>
						</div>
						<div>
							<Link to="#">Корпоративным клиентам</Link>
						</div>
						<div>
							<Link to="#">Услуги</Link>
						</div>
						<div>
							<Link to="#">О компании</Link>
						</div>
						<div>
							<Link to="#">Контакты</Link>
						</div>
					</div>
					<div>buttons</div>
				</div>
			</div>
		</header>
	)
}

export default Header
