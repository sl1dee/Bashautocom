import cn from 'classnames'
import React, { useState } from 'react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import ReviewsCard from '@components/reviews/reviews-card/reviews-card.jsx'
import Card from '@components/used-car-slider/card/card.jsx'

import cl from './used-car-slider.module.scss'

const UsedCarSlider = () => {
	const [swiper, setSwiper] = useState(null)
	// const { isDesktop, isTablet, isTabletSmall } = useMatchMedia()

	const carsList = [
		{
			image: './assets/img/used-cars/KiaRioX.png',
			name: 'Kia Rio X',
			year: '2020',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '1 850 000 ₽'
		},
		{
			image: './assets/img/used-cars/JetourX90Plus.jpg',
			name: 'Jetour X90 Plus',
			year: '2023',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '3 490 000 ₽'
		},
		{
			image: './assets/img/used-cars/KiaRio.jpg',
			name: 'Kia Rio',
			year: '2020',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '1 850 000 ₽'
		},
		{
			image: './assets/img/used-cars/JetourDashing.jpg',
			name: 'Jetour Dashing',
			year: '2020',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '3 200 000 ₽'
		},
		{
			image: './assets/img/used-cars/LadaVesta.jpg',
			name: 'ВАЗ (LADA) Vesta',
			year: '2020',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '1 150 000 ₽'
		},
		{
			image: './assets/img/used-cars/KiaPicanto.jpg',
			name: 'KIA Picanto',
			year: '2009',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '580 000 ₽'
		},
		{
			image: './assets/img/used-cars/KiaRioX.png',
			name: 'Kia Rio X',
			year: '2020',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '1 850 000 ₽'
		},
		{
			image: './assets/img/used-cars/JetourX90Plus.jpg',
			name: 'Jetour X90 Plus',
			year: '2023',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '3 490 000 ₽'
		},
		{
			image: './assets/img/used-cars/KiaRio.jpg',
			name: 'Kia Rio',
			year: '2020',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '1 850 000 ₽'
		},
		{
			image: './assets/img/used-cars/JetourDashing.jpg',
			name: 'Jetour Dashing',
			year: '2020',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '3 200 000 ₽'
		},
		{
			image: './assets/img/used-cars/LadaVesta.jpg',
			name: 'ВАЗ (LADA) Vesta',
			year: '2020',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '1 150 000 ₽'
		},
		{
			image: './assets/img/used-cars/KiaPicanto.jpg',
			name: 'KIA Picanto',
			year: '2009',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '580 000 ₽'
		}
	]

	const prevSwipeHandler = () => {
		swiper?.slidePrev()
	}
	const nextSwipeHandler = () => {
		swiper?.slideNext()
	}

	return (
		<div className={cl.reviews}>
			<div className="container p-0">
				<div className={cn([cl.reviewsInformation, 'd-flex', 'flex-column'])}>
					<h2 className={cn([cl.reviewsInformationTitle, 'mb-0'])}>Похожие автомобили с пробегом</h2>
					<div className="d-flex flex-column gap-4">
						<div className={cl.reviewsSwiper}>
							<button
								onClick={prevSwipeHandler}
								className={cn([cl.swiperArrow, cl.swiperArrowLeft, 'd-none', 'd-xxl-flex'])}
							/>
							<button
								onClick={nextSwipeHandler}
								className={cn([cl.swiperArrow, cl.swiperArrowRight, 'd-none', 'd-xxl-flex'])}
							/>
							<Swiper
								className={cl.swiper}
								modules={[Navigation, Pagination]}
								spaceBetween={30}
								slidesPerView={4}
								onSwiper={(swiper) => setSwiper(swiper)}
								// pagination={{ clickable: true }}
								scrollbar={{ draggable: true }}
								loop={true}
								breakpoints={{
									// // when window width is >= 640px
									320: {
										spaceBetween: 10,
										slidesPerView: 2.1
									},
									// // when window width is >= 576px
									576: {
										spaceBetween: 20,
										slidesPerView: 2.1
									},
									// when window width is >= 992px
									992: {
										spaceBetween: 20,
										slidesPerView: 3.1
									},
									1400: {
										spaceBetween: 30,
										slidesPerView: 3
									},
									1920: {
										spaceBetween: 30,
										slidesPerView: 4
									}
								}}
							>
								{carsList.map(({ image, name, year, owner, mileage, gearbox, drive, price }) => (
									<SwiperSlide>
										<Card
											image={image}
											name={name}
											year={year}
											owner={owner}
											mileage={mileage}
											gearbox={gearbox}
											drive={drive}
											price={price}
										/>
									</SwiperSlide>
								))}
								{/*<div className="swiper-pagination"></div>*/}
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UsedCarSlider
