import jaecoo from '@assets/img/reviews/jaecoo.jpg'
import moskvich from '@assets/img/reviews/moskvich.jpg'
import omoda from '@assets/img/reviews/omoda.jpg'
import JetourDashing from '@assets/img/used-cars/JetourDashing.jpg'
import JetourX90Plus from '@assets/img/used-cars/JetourX90Plus.jpg'
import KiaPicanto from '@assets/img/used-cars/KiaPicanto.jpg'
import KiaRio from '@assets/img/used-cars/KiaRio.jpg'
import KiaRioX from '@assets/img/used-cars/KiaRioX.png'
import LadaVesta from '@assets/img/used-cars/LadaVesta.jpg'
import cn from 'classnames'
import React, { useState } from 'react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import ReviewsCard from '@components/reviews/reviews-card/index.js'
import Card from '@components/used-car-slider/card/card.jsx'

import cl from './used-car-slider.module.scss'

const UsedCarSlider = () => {
	const [swiper, setSwiper] = useState(null)
	// const { isDesktop, isTablet, isTabletSmall } = useMatchMedia()

	const carsList = [
		{
			image: KiaRioX,
			name: 'Kia Rio X',
			year: '2020',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '1 850 000 ₽'
		},
		{
			image: JetourX90Plus,
			name: 'Jetour X90 Plus',
			year: '2023',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '3 490 000 ₽'
		},
		{
			image: KiaRio,
			name: 'Kia Rio',
			year: '2020',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '1 850 000 ₽'
		},
		{
			image: JetourDashing,
			name: 'Jetour Dashing',
			year: '2020',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '3 200 000 ₽'
		},
		{
			image: LadaVesta,
			name: 'ВАЗ (LADA) Vesta',
			year: '2020',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '1 150 000 ₽'
		},
		{
			image: KiaPicanto,
			name: 'KIA Picanto',
			year: '2009',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '580 000 ₽'
		},
		{
			image: KiaRioX,
			name: 'Kia Rio X',
			year: '2020',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '1 850 000 ₽'
		},
		{
			image: JetourX90Plus,
			name: 'Jetour X90 Plus',
			year: '2023',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '3 490 000 ₽'
		},
		{
			image: KiaRio,
			name: 'Kia Rio',
			year: '2020',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '1 850 000 ₽'
		},
		{
			image: JetourDashing,
			name: 'Jetour Dashing',
			year: '2020',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '3 200 000 ₽'
		},
		{
			image: LadaVesta,
			name: 'ВАЗ (LADA) Vesta',
			year: '2020',
			owner: '1 владелец',
			mileage: '56 200 км',
			gearbox: 'Автомат',
			drive: 'Полный',
			price: '1 150 000 ₽'
		},
		{
			image: KiaPicanto,
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
								breakpoints={{
									// // when window width is >= 640px
									320: {
										spaceBetween: 10,
										slidesPerView: 2
									},
									// // when window width is >= 576px
									576: {
										spaceBetween: 20,
										slidesPerView: 2
									},
									// when window width is >= 992px
									992: {
										spaceBetween: 20,
										slidesPerView: 3
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
