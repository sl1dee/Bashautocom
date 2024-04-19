import cn from 'classnames'
import React, { useState } from 'react'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss/pagination'

import cl from './service-slider.module.scss'

const ServiceSlider = ({ bannerList }) => {
	const [swiper, setSwiper] = useState(null)

	// const bannerList = [
	// 	{
	// 		banner: dueDiligence,
	// 		bannerTablet: dueDiligenceTablet,
	// 		bannerMobile: dueDiligenceMobile
	// 	},
	// 	{
	// 		banner: dueDiligence,
	// 		bannerTablet: dueDiligenceTablet,
	// 		bannerMobile: dueDiligenceMobile
	// 	},
	// 	{
	// 		banner: dueDiligence,
	// 		bannerTablet: dueDiligenceTablet,
	// 		bannerMobile: dueDiligenceMobile
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
						loop={true}
					>
						{bannerList.map(({ bannerDesktop, bannerSmallDesktop, bannerTablet, bannerMobile }) => (
							<SwiperSlide>
								<picture>
									<source srcSet={bannerMobile} media="(max-width: 575px)" className={cl.banner} />
									<source
										srcSet={bannerTablet}
										media="(min-width: 567px) and (max-width: 991px)"
										className={cl.banner}
									/>
									<source srcSet={bannerDesktop} media="(min-width: 992)" className={cl.banner} />
									<img src={bannerDesktop} className={cl.banner} />
								</picture>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	)
}

export default ServiceSlider
