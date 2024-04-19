import cn from 'classnames'
import React, { useState } from 'react'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import cl from './our-works-detailing.module.scss'

const OurWorksDetailing = ({ title, ourWorksDetailingList }) => {
	const [swiper, setSwiper] = useState(null)

	// const ourWorksList = [
	// 	{
	// 		id: 0,
	// 		image: pic1
	// 	},
	// 	{
	// 		id: 1,
	// 		image: pic2
	// 	}
	// ]

	const prevSwipeHandler = () => {
		swiper?.slidePrev()
	}
	const nextSwipeHandler = () => {
		swiper?.slideNext()
	}

	return (
		<div className={cl.serviceSlider}>
			<div className="container p-0">
				<div className={cn([cl.serviceSliderContent, 'd-flex', 'flex-column'])}>
					<h2 className={cn([cl.serviceSliderContentTitle, 'mb-0'])}>{title}</h2>
					<div className={cl.serviceSliderContentSwiper}>
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
							modules={[Navigation, Pagination, Scrollbar, A11y]}
							spaceBetween={30}
							slidesPerView={1}
							onSwiper={(swiper) => setSwiper(swiper)}
							pagination={{ clickable: true }}
							scrollbar={{ draggable: true }}
							loop={true}
							breakpoints={{
								320: {
									spaceBetween: 8,
									slidesPerView: 1
								},
								576: {
									spaceBetween: 10,
									slidesPerView: 2
								},
								992: {
									spaceBetween: 20,
									slidesPerView: 2
								},
								1400: {
									spaceBetween: 20,
									slidesPerView: 3
								}
							}}
						>
							{ourWorksDetailingList.map(({ id, image }) => (
								<SwiperSlide>
									<img src={image} alt="" className={cl.banner} key={id} />
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</div>
		</div>
	)
}

export default OurWorksDetailing
