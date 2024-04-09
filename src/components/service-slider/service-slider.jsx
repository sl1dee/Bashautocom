import cn from 'classnames'
import React, { useState } from 'react'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss/pagination'

import cl from './service-slider.module.scss'
import dueDiligence from '/assets/img/service-slider/dueDiligence.jpg'
import dueDiligenceMobile from '/assets/img/service-slider/dueDiligenceMobile.jpg'
import dueDiligenceTablet from '/assets/img/service-slider/dueDiligenceTablet.jpg'

const ServiceSlider = () => {
	const [swiper, setSwiper] = useState(null)

	const bannerList = [
		{
			banner: dueDiligence,
			bannerTablet: dueDiligenceTablet,
			bannerMobile: dueDiligenceMobile
		},
		{
			banner: dueDiligence,
			bannerTablet: dueDiligenceTablet,
			bannerMobile: dueDiligenceMobile
		},
		{
			banner: dueDiligence,
			bannerTablet: dueDiligenceTablet,
			bannerMobile: dueDiligenceMobile
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
					>
						{bannerList.map(({ banner, bannerTablet, bannerMobile }) => (
							<SwiperSlide>
								<img src={banner} alt="banner" className={cn([cl.banner, 'd-none', 'd-lg-flex'])} />
								<img src={bannerTablet} alt="banner" className={cn([cl.banner, 'd-none', 'd-sm-flex', 'd-lg-none'])} />
								<img src={bannerMobile} alt="banner" className={cn([cl.banner, 'd-xs-flex', 'd-sm-none'])} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	)
}

export default ServiceSlider
