import car from '@assets/img/about/car.jpg'
import mainEntrance from '@assets/img/about/mainEntrance.jpg'
import cn from 'classnames'
import React from 'react'

import Button from '../../ui/button/index.js'
import cl from './about.module.scss'

const About = () => {
	return (
		<div className={cl.about}>
			<div className="container p-0">
				<div className={cn([cl.aboutInformation, 'd-grid'])}>
					<img className={cl.firstImg} src={mainEntrance} alt="mainEntrance" />
					<span className={cn([cl.firstBlock, 'd-flex', 'flex-column'])}>
						<h1 className={cn([cl.firstBlockTitle, 'mb-0'])}>Башавтоком - лидер на автомобильном рынке Башкирии</h1>
						<span className={cn([cl.firstBlockText, 'd-flex', 'flex-column'])}>
							<p className={cn([cl.firstIcon, 'd-flex', 'mb-0'])}>
								Официальный дилер брендов Omoda, Changan Auto, Jaecoo, Exeed, Москвич, Lada, Haval.
							</p>
							<p className={cn([cl.secondIcon, 'd-flex', 'mb-0'])}>
								Обслуживаем автомобили в нашем сервисном центре, обеспечивая безопасность и комфорт
							</p>
							<p className={cn([cl.thirdIcon, 'd-flex', 'mb-0'])}>
								850 сотрудников Башавтоком — профессионалы своего дела, и каждый день делают всё для вашего удобства
							</p>
						</span>
						<div className="d-flex">
							<Button sizeStyle="sizeL">Подробнее о компании</Button>
						</div>
					</span>
					<div className={cn([cl.secondBlock, 'd-flex'])}>
						<span className={cn([cl.secondBlockCol, 'd-flex', 'flex-column'])}>
							<h1 className={cn([cl.secondBlockColTitle, 'd-flex', 'mb-0'])}>30 лет</h1>
							<p className={cn([cl.secondBlockColText, 'd-flex', 'mb-0'])}>Продаём автомобили с 1992 года</p>
						</span>
						<span className={cn([cl.secondBlockCol, 'd-flex', 'flex-column'])}>
							<h1 className={cn([cl.secondBlockColTitle, 'd-flex', 'mb-0'])}>100 000+</h1>
							<p className={cn([cl.secondBlockColText, 'd-flex', 'mb-0'])}>Автомобилей продали за все время работы</p>
						</span>
						<span className={cn([cl.secondBlockCol, 'd-flex', 'flex-column'])}>
							<h1 className={cn([cl.secondBlockColTitle, 'd-flex', 'mb-0'])}>4 города</h1>
							<p className={cn([cl.secondBlockColText, 'd-flex', 'mb-0'])}>Уфа, Октябрьский, Стерлитамак, Белебей</p>
						</span>
					</div>
					<img className={cl.secondImg} src={car} alt="car" />
				</div>
			</div>
		</div>
	)
}

export default About
