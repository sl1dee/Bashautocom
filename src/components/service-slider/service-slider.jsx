import cn from 'classnames'
import React, { useState } from 'react'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss/pagination'

import cl from './service-slider.module.scss'
import dueDiligence from '/assets/img/service-slider/dueDiligence.jpg'

const ServiceSlider = () => {
	const [swiper, setSwiper] = useState(null)

	const bannerList = [
		{
			banner: dueDiligence
		},
		{
			banner: dueDiligence
		},
		{
			banner: dueDiligence
		}
	]

	const prevSwipeHandler = () => {
		swiper?.slidePrev()
	}
	const nextSwipeHandler = () => {
		swiper?.slideNext()
	}

	return (
		<div className={cl.serviceSlider}>
			<div className="container p-0">
				<div className={cl.serviceSliderSwiper}>
					<button onClick={prevSwipeHandler} className={cn([cl.swiperArrow, cl.swiperArrowLeft])} />
					<button onClick={nextSwipeHandler} className={cn([cl.swiperArrow, cl.swiperArrowRight])} />
					<Swiper
						className={cl.swiper}
						modules={[Navigation, Pagination, Scrollbar, A11y]}
						spaceBetween={30}
						slidesPerView={1}
						onSwiper={(swiper) => setSwiper(swiper)}
						pagination={{ clickable: true }}
						scrollbar={{ draggable: true }}
					>
						{bannerList.map(({ banner }) => (
							<SwiperSlide>
								<img src={banner} alt="banner" className={cl.banner} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	)
}

export default ServiceSlider
