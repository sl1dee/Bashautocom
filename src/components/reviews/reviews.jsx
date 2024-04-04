import cn from 'classnames'
import React, { useState } from 'react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss/pagination'

import Button from '../../ui/button/button.jsx'
import SpecialOffersCard from '../special-offers/special-offers-card/index.js'
import ReviewsCard from './reviews-card/index.js'
import cl from './reviews.module.scss'
import jaecoo from '/assets/img/reviews/jaecoo.jpg'
import moskvich from '/assets/img/reviews/moskvich.jpg'
import omoda from '/assets/img/reviews/omoda.jpg'

const Reviews = () => {
	const [swiper, setSwiper] = useState(null)
	// const { isDesktop, isTablet, isTabletSmall } = useMatchMedia()

	const cardList = [
		{
			video: omoda,
			text: '2024 Chery Omoda 5 — Великолепный компактный внедорожник!'
		},
		{
			video: moskvich,
			text: 'МОСКВИЧ 3 — лучше Лады! Двигатель, вариатор, подвеска, бензин и цена / тест и обзор'
		},
		{
			video: jaecoo,
			text: 'JAECOO J7 ТЕСТ ДРАЙВ У ДИЛЕРА, обзор jaecoo j7, лучший китайский кроссовер за 3 миллиона рублей'
		},
		{
			video: omoda,
			text: '2024 Chery Omoda 5 — Великолепный компактный внедорожник!'
		},
		{
			video: moskvich,
			text: 'МОСКВИЧ 3 — лучше Лады! Двигатель, вариатор, подвеска, бензин и цена / тест и обзор'
		},
		{
			video: jaecoo,
			text: 'JAECOO J7 ТЕСТ ДРАЙВ У ДИЛЕРА, обзор jaecoo j7, лучший китайский кроссовер за 3 миллиона рублей'
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
					<h2 className={cn([cl.reviewsInformationTitle, 'mb-0'])}>Узнайте больше в наших обзорах</h2>
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
								slidesPerView={2}
								onSwiper={(swiper) => setSwiper(swiper)}
								pagination={{ clickable: true }}
								scrollbar={{ draggable: true }}
								breakpoints={{
									// when window width is >= 640px
									320: {
										spaceBetween: 8,
										slidesPerView: 'auto'
									},
									// when window width is >= 576px
									576: {
										spaceBetween: 20,
										slidesPerView: 2
									},
									// when window width is >= 992px
									1000: {
										spaceBetween: 20,
										slidesPerView: 3
									}
								}}
							>
								{cardList.map(({ video, text }) => (
									<SwiperSlide>
										<ReviewsCard text={text} video={video} />
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

export default Reviews
