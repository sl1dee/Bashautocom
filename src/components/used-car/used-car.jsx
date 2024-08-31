import credit from '@assets/img/used-car/credit.svg'
import exchange from '@assets/img/used-car/exchange.svg'
import refresh from '@assets/img/used-car/refresh.svg'
import cn from 'classnames'
import React, { useState } from 'react'
import swiper, { FreeMode, Navigation, Thumbs } from 'swiper'
// import { FreeMode, Navigation, Thumbs } from 'swiper';
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Button } from '@consta/uikit/Button';
import cl from './used-car.module.scss'
import {Collapse} from "@consta/uikit/Collapse";
import {createIcon} from "@consta/icons/Icon";

const UsedCar = () => {
	const [swiper, setSwiper] = useState(null)
	const [thumbsSwiper, setThumbsSwiper] = useState(null)
	const [isOpen, setOpen] = useState(false);

	const cardInformation = [
		{
			id: 0,
			name: 'Kia Rio X',
			price: '1 840 000 ₽',
			characteristicsName: [
				{
					id: 0,
					name: 'Владельцы',
				},
				{
					id: 1,
					name: 'Год выпуска',
				},
				{
					id: 2,
					name: 'Пробег',
				},
				{
					id: 3,
					name: 'Двигатель',
				},
				{
					id: 4,
					name: 'Коробка',
				},
				{
					id: 5,
					name: 'Привод',
				},
				{
					id: 6,
					name: 'Кузов',
				},
				{
					id: 7,
					name: 'Цвет',
				}
			],
			characteristics: [
				// {
				// 	owners: '1 владелец',
				// 	year: '2020',
				// 	mileage: '56 200 км',
				// 	engine: '1.6 л/ 123 л.с. / Бензин',
				// 	gearbox: 'Автомат',
				// 	drive: 'Передний',
				// 	body: 'Хетчбэк',
				// 	color: 'Серый'
				// }
				{
					id: 0,
					name: '1 владелец',
				},
				{
					id: 1,
					name: '2020',
				},
				{
					id: 2,
					name: '56 200 км',
				},
				{
					id: 3,
					name: '1.6 л/ 123 л.с. / Бензин',
				},
				{
					id: 4,
					name: 'Автомат',
				},
				{
					id: 5,
					name: 'Передний',
				},
				{
					id: 6,
					name: 'Хетчбэк',
				},
				{
					id: 7,
					name: 'Серый',
				}
			],
			report: [
				{
					icon: './assets/img/used-car/shield.svg',
					text: 'Зеленая Автотека'
				},
				{
					icon: './assets/img/used-car/tick.svg',
					text: 'Оригинальный ПТС'
				},
				{
					icon: './assets/img/used-car/owner.svg',
					text: '1 Собственник в ПТС'
				},
				{
					icon: './assets/img/used-car/clipboard.svg',
					text: 'На заводской гарантии'
				},
				{
					icon: './assets/img/used-car/brush.svg',
					text: 'Полностью заводской окрас'
				},
				{
					icon: './assets/img/used-car/key.svg',
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
			mainImage: './assets/img/used-car/1.jpg'
		},
		{
			mainImage: './assets/img/used-car/2.jpg'
		},
		{
			mainImage: './assets/img/used-car/3.jpg'
		},
		{
			mainImage: './assets/img/used-car/4.jpg'
		},
		{
			mainImage: './assets/img/used-car/5.jpg'
		}
	]

	const smallCards = [
		{
			smallImage: './assets/img/used-car/1.jpg'
		},
		{
			smallImage: './assets/img/used-car/2.jpg'
		},
		{
			smallImage: './assets/img/used-car/3.jpg'
		},
		{
			smallImage: './assets/img/used-car/4.jpg'
		},
		{
			smallImage: './assets/img/used-car/5.jpg'
		}
	]


	const [openCollapseIndex, setOpenCollapseIndex] = useState(null);

	const handleCollapseClick = (index) => {
		setOpenCollapseIndex((prevIndex) => (prevIndex === index ? null : index));
	};

	const IconExamplePlusSizeM = () => (
		<svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M19.9181 8.94995L13.3981 15.47C12.6281 16.24 11.3681 16.24 10.5981 15.47L4.07812 8.94995" stroke="#2F3140" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
	);
	const IconAdd = createIcon({
		m: IconExamplePlusSizeM,
		s: IconExamplePlusSizeM,
		xs: IconExamplePlusSizeM,
		name: 'IconAdd',
	});

	const refresh = () => (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 3.11 16.44 3.11 16.44M3.11 16.44H7.63M3.11 16.44V21.44M2 12C2 6.48 6.44 2 12 2C18.67 2 22 7.56 22 7.56M22 7.56V2.56M22 7.56H17.56" stroke="#2F3140" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
	);

	const IconRefresh = createIcon({
		m: refresh,
		s: refresh,
		xs: refresh,
		name: 'IconRefresh',
	});

	return (
		<div className={cn([cl.usedCar, 'container'])}>
			{cardInformation.map(({ id, name, price, characteristicsName, characteristics, report, comment, address, number, equipment }) => (
				<div className={cn([cl.usedCarGrid, 'd-grid'])}>
					<div className={cl.usedCarGridImage}>
						<Swiper
							className={cl.swiperTop}
							modules={[FreeMode, Navigation, Thumbs]}
							thumbs={{ swiper: thumbsSwiper , slideThumbActiveClass: cl.activeSlide}} // Устанавливаем нижний слайдер как thumbs для верхнего
							spaceBetween={10}
							onSwiper={setSwiper}
							loop={true}
						>
							{mainCards.map(({ mainImage }) => (
								<SwiperSlide key={mainImage}>
									<div className={cl.wrapper}>
										<img src={mainImage} alt="" />
									</div>
								</SwiperSlide>
							))}
						</Swiper>

						<Swiper className={cl.swiperBottom}
							onSwiper={setThumbsSwiper}
							spaceBetween={6}
							slidesPerView={5}
							freeMode={true}
							loop={true}
							modules={[Thumbs]}
							watchSlidesProgress
						>
							{smallCards.map(({ smallImage }, index) => (
								<SwiperSlide key={index}>
									<div className={cl.wrapper}>
										<img src={smallImage} alt="" />
									</div>
								</SwiperSlide>
							))}
						</Swiper>
						<div
							onClick={()=>swiper.slidePrev()}
							className={cn([cl.swiperArrow, cl.swiperArrowLeft, 'd-none', 'd-sm-flex'])}
						/>
						<div
							onClick={()=>swiper.slideNext()}
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
							<Button className={cn([cl.btn, 'd-none', 'd-sm-flex', 'justify-content-center', 'align-items-center'])} label='Оставить заявку' size='l'/>
							<Button className={cn([cl.btn, 'd-none', 'd-sm-flex', 'justify-content-center', 'align-items-center'])} label='Обменять' size='l' iconLeft={IconRefresh} view='secondary'/>
							<Button className={cn([cl.btn, 'd-xs-flex', 'd-sm-none', 'justify-content-center', 'align-items-center'])} label='Оставить заявку' size='s'/>
							<Button className={cn([cl.btn, 'd-xs-flex', 'd-sm-none', 'justify-content-center', 'align-items-center'])} label='Обменять' size='s' iconLeft={IconRefresh} view='secondary'/>
						</div>
					</div>
					<div className={cn([cl.cardCharacteristics, 'd-flex', 'flex-column'])}>
						<h6 className={cl.name}>Основные характеристики</h6>
						<div className={cn([cl.columns, 'd-grid'])}>
							<div className={cn([cl.column1, 'd-flex', 'flex-column'])}>
								{characteristicsName.map(({ id, name}) => (
									<div className={cl.col1} key={id}>{name}</div>
								))}
							</div>
							<div className={cn([cl.column2, 'd-flex', 'flex-column'])}>
								{characteristics.map(({id, name}) => (
									<h6 className={cl.col2} key={id}>{name}</h6>
								))}
							</div>
						</div>
					</div>
					<div className={cn([cl.cardReport, 'd-flex', 'flex-column'])}>
						<h6 className={cl.name}>Отчет о проверке</h6>
						<div className={cn([cl.cards, 'd-flex'])}>
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
						<div className={cl.collapses}>
							{equipment.map(({ title, description }, index) => (
								<Collapse
									className={cl.collapse}
									key={index}
									label={title}
									isOpen={openCollapseIndex === index} // Устанавливаем isOpen в true, если текущий Collapse должен быть открыт
									onClick={() => handleCollapseClick(index)} // Передаем индекс Collapse для обработки нажатия
									iconPosition="right"
									divider={true}
									icon={IconAdd}
									// closeIcon={IconRemove}
								>
									{description}
								</Collapse>
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
							<Button className={cn([cl.btn, 'd-none', 'd-sm-flex', 'justify-content-center', 'align-items-center'])} label='Оставить заявку' size='l'/>
							<Button className={cn([cl.btn, 'd-xs-flex', 'd-sm-none', 'justify-content-center', 'align-items-center'])} label='Оставить заявку' size='s'/>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default UsedCar
