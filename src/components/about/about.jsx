import car from '@assets/img/about/car.jpg'
import mainEntrance from '@assets/img/about/mainEntrance.jpg'
import settingAbout from '@assets/img/about/setting.svg'
import shieldAbout from '@assets/img/about/shield.svg'
import usersAbout from '@assets/img/about/users.svg'
import cn from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../../ui/button/index.js'
import cl from './about.module.scss'

const About = ({ aboutText }) => {
	// const aboutText = [
	// 	{
	// 		title: 'Башавтоком - лидер на автомобильном рынке Башкирии',
	// 		points: [
	// 			{
	// 				id: 0,
	// 				image: shieldAbout,
	// 				text: 'Официальный дилер брендов Omoda, Changan Auto, Jaecoo, Exeed, Москвич, Lada, Haval.'
	// 			},
	// 			{
	// 				id: 1,
	// 				image: settingAbout,
	// 				text: 'Обслуживаем автомобили в нашем сервисном центре, обеспечивая безопасность и комфорт'
	// 			},
	// 			{
	// 				id: 2,
	// 				image: usersAbout,
	// 				text: '850 сотрудников Башавтоком — профессионалы своего дела, и каждый день делают всё для вашего удобства'
	// 			}
	// 		],
	// 		btn: 'Подробнее о компании',
	// 		achievements: [
	// 			{
	// 				title: '30 лет',
	// 				text: 'Продаём автомобили с 1992 года'
	// 			},
	// 			{
	// 				title: '100 000+',
	// 				text: 'Автомобилей продали за все время работы'
	// 			},
	// 			{
	// 				title: '4 города',
	// 				text: 'Уфа, Октябрьский, Стерлитамак, Белебей'
	// 			}
	// 		],
	// 		firstImg: mainEntrance,
	// 		secondImg: car
	// 	}
	// ]

	return (
		<>
			{aboutText.map(({ title, points, btn, achievements, firstImg, secondImg }) => (
				<div className={cl.about}>
					<div className="container p-0">
						<div className={cn([cl.aboutInformation, 'd-grid'])}>
							<img className={cl.firstImg} src={firstImg} alt="mainEntrance" />
							<span className={cn([cl.firstBlock, 'd-flex', 'flex-column'])}>
								<h1 className={cn([cl.firstBlockTitle, 'mb-0'])}>{title}</h1>
								<span className={cn([cl.firstBlockText, 'd-flex', 'flex-column'])}>
									{points.map(({ id, image, text }) => (
										<div className={cn([cl.pointGroup, 'd-flex', 'mb-0'])} key={id}>
											<img src={image} alt="" />
											<p className="mb-0">{text}</p>
										</div>
									))}
								</span>
								<div className="d-flex">
									<Link to="">
										<Button sizeStyle="sizeL" className={cl.btn}>
											{btn}
										</Button>
									</Link>
								</div>
							</span>
							<div className={cn([cl.secondBlock, 'd-none', 'd-sm-flex'])}>
								{achievements.map(({ title, text }) => (
									<span className={cn([cl.secondBlockCol, 'd-flex', 'flex-column'])}>
										<h1 className={cn([cl.secondBlockColTitle, 'd-flex', 'mb-0'])}>{title}</h1>
										<p className={cn([cl.secondBlockColText, 'd-flex', 'mb-0'])}>{text}</p>
									</span>
								))}
							</div>
							<img className={cn([cl.secondImg, 'd-none', 'd-sm-flex'])} src={secondImg} alt="car" />
						</div>
					</div>
				</div>
			))}
		</>
	)
}

export default About
