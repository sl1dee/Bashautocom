import first from '@assets/img/used-car/1.jpg'
import second from '@assets/img/used-car/2.jpg'
import third from '@assets/img/used-car/3.jpg'
import fourth from '@assets/img/used-car/4.jpg'
import fifth from '@assets/img/used-car/5.jpg'
import brush from '@assets/img/used-car/brush.svg'
import clipboard from '@assets/img/used-car/clipboard.svg'
import key from '@assets/img/used-car/key.svg'
import owner from '@assets/img/used-car/owner.svg'
import shield from '@assets/img/used-car/shield.svg'
import tick from '@assets/img/used-car/tick.svg'
import cn from 'classnames'
import React, { useState } from 'react'
import swiper, { Thumbs } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import Button from '@ui/button/index.js'

import UsedCarMainCard from '@components/used-car/used-car-main-card/used-car-main-card.jsx'
import UsedCarSmallCard from '@components/used-car/used-car-small-card/used-car-small-card.jsx'

import cl from './used-car.module.scss'

const UsedCar = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null)
	const [swiper, setSwiper] = useState(null)

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
					title: 'Безопасность',
					description: ''
				},
				{
					title: 'Интерьер',
					description: ''
				},
				{
					title: 'Экстерьер',
					description: ''
				},
				{
					title: 'Комфорт',
					description: ''
				},
				{
					title: 'Мультимедиа',
					description: ''
				},
				{
					title: 'Освещение',
					description: ''
				},
				{
					title: 'Охранные системы',
					description: ''
				},
				{
					title: 'Регулировки',
					description: ''
				},
				{
					title: 'Дополнительно',
					description: ''
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
		thumbsSwiper?.slidePrev()
	}
	const nextSwipeHandler = () => {
		thumbsSwiper?.slideNext()
	}

	return (
		<div className={cn([cl.usedCar, 'container', 'p-0', 'd-flex'])}>
			<div className={cl.usedCarImage}>
				<Swiper modules={[Thumbs]} thumbs={{ swiper: thumbsSwiper }}>
					{mainCards.map(({ mainImage }) => (
						<SwiperSlide>
							<UsedCarMainCard mainImage={mainImage} />
						</SwiperSlide>
					))}

					{/* <SwiperSlide>2</SwiperSlide> */}
					{/* <SwiperSlide>3</SwiperSlide> */}
				</Swiper>

				{/* Thumbs Swiper -> store swiper instance */}
				{/* It is also required to set watchSlidesProgress prop */}
				<Swiper
					// className={cl.swiper}
					modules={[Thumbs]}
					watchSlidesProgress
					onSwiper={setThumbsSwiper}
					spaceBetween={6}
					slidesPerView={5}
				>
					{smallCards.map(({ smallImage }) => (
						<SwiperSlide>
							<UsedCarSmallCard smallImage={smallImage} />
						</SwiperSlide>
					))}
				</Swiper>
				{/*<button*/}
				{/*	onClick={prevSwipeHandler}*/}
				{/*	className={cn([cl.swiperArrow, cl.swiperArrowLeft, 'd-none', 'd-xxl-flex'])}*/}
				{/*/>*/}
				{/*<button*/}
				{/*	onClick={nextSwipeHandler}*/}
				{/*	className={cn([cl.swiperArrow, cl.swiperArrowRight, 'd-none', 'd-xxl-flex'])}*/}
				{/*/>*/}
			</div>
			<div className={cl.usedCarDescription}>
				{cardInformation.map(({ id, name, price, characteristics, report, comment, address, number, equipment }) => (
					<div key={id} className={cn([cl.card, 'd-flex', 'flex-column'])}>
						<div className={cn([cl.cardPrice])}>
							<h2 className={cl.name}>{name}</h2>
							<div className={cn([cl.priceBlock, 'd-flex', 'align-items-center'])}>
								<h4 className={cl.priceBlockPrice}>{price}</h4>
								<div className={cl.priceBlockCard}>плашка хорошая цена</div>
							</div>
							<div className={cn([cl.buttons, 'd-flex'])}>
								<Button>Оставить заявку</Button>
								<Button>Обменять</Button>
							</div>
						</div>
						<div className={cn([cl.cardCharacteristics])}>
							<h6 className={cl.name}>Основные характеристики</h6>
							{characteristics.map(({ owners, year, mileage, engine, gearbox, drive, body, color }) => (
								<div className={cn([cl.columns, 'd-grid'])}>
									<div className={cl.column1}>
										<div className={cl.col1}>Владельцы</div>
										<div className={cl.col1}>Год выпуска</div>
										<div className={cl.col1}>Пробег</div>
										<div className={cl.col1}>Двигатель</div>
										<div className={cl.col1}>Коробка</div>
										<div className={cl.col1}>Привод</div>
										<div className={cl.col1}>Кузов</div>
										<div className={cl.col1}>Цвет</div>
									</div>
									<div className={cl.column2}>
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
						<div className={cn([cl.cardReport])}>
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
						<div>
							<h6>Комментарий</h6>
							<div>{comment}</div>
						</div>
						<div>
							<h6>Адрес и контакты</h6>
							<div>{address}</div>
							<div>{number}</div>
						</div>
						<div>
							<h3>Комплектация</h3>
							{equipment.map(({ title, description }) => (
								<div>
									<div>{title}</div>
									<div>{description}</div>
								</div>
							))}
						</div>
						<div>
							<h3>Купите выгодно</h3>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default UsedCar
