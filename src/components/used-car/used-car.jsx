import user from '@assets/img/header/user.svg'
import first from '@assets/img/used-car/1.jpg'
import second from '@assets/img/used-car/2.jpg'
import third from '@assets/img/used-car/3.jpg'
import fourth from '@assets/img/used-car/4.jpg'
import fifth from '@assets/img/used-car/5.jpg'
import brush from '@assets/img/used-car/brush.svg'
import clipboard from '@assets/img/used-car/clipboard.svg'
import credit from '@assets/img/used-car/credit.svg'
import exchange from '@assets/img/used-car/exchange.svg'
import key from '@assets/img/used-car/key.svg'
import owner from '@assets/img/used-car/owner.svg'
import refresh from '@assets/img/used-car/refresh.svg'
import shield from '@assets/img/used-car/shield.svg'
import tick from '@assets/img/used-car/tick.svg'
import cn from 'classnames'
import React, { useState } from 'react'
import swiper, { FreeMode, Navigation, Thumbs } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { Swiper, SwiperSlide } from 'swiper/react'

import Button from '@ui/button/index.js'

import Equipment from '@components/equipment/equipment.jsx'

import cl from './used-car.module.scss'

const UsedCar = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null)
	const [swiper, setSwiper] = useState(null)
	// const [equipmentOpen, setEquipmentOpen] = useState(false)

	const cardInformation = [
		{
			id: 0,
			name: 'Kia Rio X',
			price: '1 840 000 ₽',
			characteristics: [
				{
					owners: '1 владелец',
					year: '2020',
					mileage: '56 200 км',
					engine: '1.6 л/ 123 л.с. / Бензин',
					gearbox: 'Автомат',
					drive: 'Передний',
					body: 'Хетчбэк',
					color: 'Серый'
				}
			],
			report: [
				{
					icon: shield,
					text: 'Зеленая Автотека'
				},
				{
					icon: tick,
					text: 'Оригинальный ПТС'
				},
				{
					icon: owner,
					text: '1 Собственник в ПТС'
				},
				{
					icon: clipboard,
					text: 'На заводской гарантии'
				},
				{
					icon: brush,
					text: 'Полностью заводской окрас'
				},
				{
					icon: key,
					text: 'Полный комплект ключей'
				}
			],
			comment: 'Небольшой комментарий об автомобиле, примечания и описания. Не комплектация.',
			address: 'г. Уфа, ул. Адмирала Макарова, 32',
			number: '+7 (965) 923-98-79',
			equipment: [
				{
					id: 0,
					title: 'Безопасность',
					description: 'Фронтальные подушки безопасности, пассажирская - с отключением Антиблокировочная система (ABS)'
				},
				{
					id: 1,
					title: 'Интерьер',
					description: 'Фронтальные подушки безопасности, пассажирская - с отключением Антиблокировочная система (ABS)'
				},
				{
					id: 2,
					title: 'Экстерьер',
					description: 'Фронтальные подушки безопасности, пассажирская - с отключением Антиблокировочная система (ABS)'
				},
				{
					id: 3,
					title: 'Комфорт',
					description: 'Фронтальные подушки безопасности, пассажирская - с отключением Антиблокировочная система (ABS)'
				},
				{
					title: 'Мультимедиа',
					description: 'Фронтальные подушки безопасности, пассажирская - с отключением Антиблокировочная система (ABS)'
				},
				{
					title: 'Освещение',
					description: 'Фронтальные подушки безопасности, пассажирская - с отключением Антиблокировочная система (ABS)'
				},
				{
					title: 'Охранные системы',
					description: 'Фронтальные подушки безопасности, пассажирская - с отключением Антиблокировочная система (ABS)'
				},
				{
					title: 'Регулировки',
					description: 'Фронтальные подушки безопасности, пассажирская - с отключением Антиблокировочная система (ABS)'
				},
				{
					title: 'Дополнительно',
					description: 'Фронтальные подушки безопасности, пассажирская - с отключением Антиблокировочная система (ABS)'
				}
			]
		}
	]

	const mainCards = [
		{
			mainImage: first
		},
		{
			mainImage: second
		},
		{
			mainImage: third
		},
		{
			mainImage: fourth
		},
		{
			mainImage: fifth
		}
	]

	const smallCards = [
		{
			smallImage: first
		},
		{
			smallImage: second
		},
		{
			smallImage: third
		},
		{
			smallImage: fourth
		},
		{
			smallImage: fifth
		}
	]

	const prevSwipeHandler = () => {
		swiper?.slidePrev()
	}
	const nextSwipeHandler = () => {
		swiper?.slideNext()
	}

	return (
		<div className={cn([cl.usedCar, 'container', 'p-0'])}>
			{cardInformation.map(({ id, name, price, characteristics, report, comment, address, number, equipment }) => (
				<div className={cn([cl.usedCarGrid, 'd-grid'])}>
					<div className={cl.usedCarGridImage}>
						<Swiper
							className={cl.swiperTop}
							modules={[FreeMode, Navigation, Thumbs]}
							thumbs={{ swiper: thumbsSwiper }}
							onSwiper={setSwiper}
							// navigation={true}
							spaceBetween={10}
						>
							{mainCards.map(({ mainImage }) => (
								<SwiperSlide>
									<div className={cl.wrapper}>
										<img src={mainImage} alt="" />
									</div>
								</SwiperSlide>
							))}
						</Swiper>

						{/* Thumbs Swiper -> store swiper instance */}
						{/* It is also required to set watchSlidesProgress prop */}
						<Swiper
							className={cl.swiperBottom}
							modules={[FreeMode, Navigation, Thumbs]}
							// modules={[Thumbs]}
							onSwiper={setThumbsSwiper}
							spaceBetween={6}
							slidesPerView={5}
							freeMode={true}
							// loop={true}
							watchSlidesProgress={true}
						>
							{smallCards.map(({ smallImage }) => (
								<SwiperSlide>
									<div className={cl.wrapper}>
										<img src={smallImage} alt="" />
									</div>
								</SwiperSlide>
							))}
						</Swiper>
						<div
							onClick={prevSwipeHandler}
							className={cn([cl.swiperArrow, cl.swiperArrowLeft, 'd-none', 'd-sm-flex'])}
						/>
						<div
							onClick={nextSwipeHandler}
							className={cn([cl.swiperArrow, cl.swiperArrowRight, 'd-none', 'd-sm-flex'])}
						/>
					</div>

					<div className={cn([cl.cardPrice, 'd-flex', 'flex-column'])}>
						<h2 className={cl.name}>{name}</h2>
						<div className={cn([cl.priceBlock, 'd-flex', 'align-items-center'])}>
							<h4 className={cl.priceBlockPrice}>{price}</h4>
							<div className={cl.priceBlockCard}>Хорошая цена</div>
						</div>
						<div className={cn([cl.buttons, 'd-flex'])}>
							<Button sizeStyle="sizeContent" className={cn([cl.btn, 'd-flex', 'align-items-center'])}>
								Оставить заявку
							</Button>
							<Button
								sizeStyle="sizeContent"
								colorStyle="Secondary"
								className={cn([cl.btn, 'd-flex', 'align-items-center'])}
							>
								<img src={refresh} alt="userIcon" className={cl.buttonsAccountIcon} />
								<span className={cl.buttonsAccountName}>Обменять</span>
							</Button>
						</div>
					</div>
					<div className={cn([cl.cardCharacteristics, 'd-flex', 'flex-column'])}>
						<h6 className={cl.name}>Основные характеристики</h6>
						{characteristics.map(({ owners, year, mileage, engine, gearbox, drive, body, color }) => (
							<div className={cn([cl.columns, 'd-grid'])}>
								<div className={cn([cl.column1, 'd-flex', 'flex-column'])}>
									<div className={cl.col1}>Владельцы</div>
									<div className={cl.col1}>Год выпуска</div>
									<div className={cl.col1}>Пробег</div>
									<div className={cl.col1}>Двигатель</div>
									<div className={cl.col1}>Коробка</div>
									<div className={cl.col1}>Привод</div>
									<div className={cl.col1}>Кузов</div>
									<div className={cl.col1}>Цвет</div>
								</div>
								<div className={cn([cl.column2, 'd-flex', 'flex-column'])}>
									<h6 className={cl.col2}>{owners}</h6>
									<h6 className={cl.col2}>{year}</h6>
									<h6 className={cl.col2}>{mileage}</h6>
									<h6 className={cl.col2}>{engine}</h6>
									<h6 className={cl.col2}>{gearbox}</h6>
									<h6 className={cl.col2}>{drive}</h6>
									<h6 className={cl.col2}>{body}</h6>
									<h6 className={cl.col2}>{color}</h6>
								</div>
							</div>
						))}
					</div>
					<div className={cn([cl.cardReport, 'd-flex', 'flex-column'])}>
						<h6 className={cl.name}>Отчет о проверке</h6>
						<div className={cn([cl.cards, 'd-flex', 'flex-column'])}>
							{report.map(({ icon, text }) => (
								<div className={cn([cl.card, 'd-flex', 'align-items-center'])}>
									<img src={icon} alt="" className={cl.icon} />
									<div className={cl.text}>{text}</div>
								</div>
							))}
						</div>
					</div>
					<div className={cn([cl.cardComment, 'd-flex', 'flex-column'])}>
						<h6 className={cl.name}>Комментарий</h6>
						<div className={cl.comment}>{comment}</div>
					</div>
					<div className={cn([cl.cardContacts, 'd-flex', 'flex-column'])}>
						<h6 className={cl.name}>Адрес и контакты</h6>
						<div className={cn([cl.group, 'd-flex', 'flex-column'])}>
							<div className={cn([cl.address, 'd-flex', 'align-items-center'])}>{address}</div>
							<div className={cl.number}>{number}</div>
						</div>
					</div>
					<div className={cn([cl.cardEquipment, 'd-flex', 'flex-column'])}>
						<h3 className={cl.name}>Комплектация</h3>
						<div>
							{equipment.map(({ title, description }) => (
								// <div key={id}>
								// 	<div onClick={() => setEquipmentOpen((prev) => !prev)}>{title}</div>
								// 	{equipmentOpen && <div>{description}</div>}
								// </div>
								<Equipment title={title} description={description} />
							))}
						</div>
					</div>
					<div className={cn([cl.cardBenefit, 'd-flex', 'flex-column'])}>
						<h3 className={cl.name}>Купите выгодно</h3>
						<div className={cn([cl.content, 'd-flex', 'flex-column'])}>
							<div className={cn([cl.cardsGroup, 'd-flex'])}>
								<div
									className={cn([cl.credit, 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center'])}
								>
									<img src={credit} alt="" />
									<h6 className={cl.text}>Выгодные ставки по автокредиту от 0,1 %</h6>
								</div>
								<div
									className={cn([cl.exchange, 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center'])}
								>
									<img src={exchange} alt="" />
									<h6 className={cl.text}>Обменяйте старый авто на новый </h6>
								</div>
							</div>
							<Button>Оставить заявку</Button>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default UsedCar
