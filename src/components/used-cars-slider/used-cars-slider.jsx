import cn from 'classnames'
import React, { useState } from 'react'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import cl from './used-cars-slider.module.scss'

const UsedCarsSlider = () => {
	const [swiper, setSwiper] = useState(null)

	const bannerList = [
		{
			id: 0,
			banner: './assets/img/used-cars-slider/autoCredit.jpg',
			bannerTablet: './assets/img/used-cars-slider/autoCreditTablet.jpg',
			bannerMobile: './assets/img/used-cars-slider/autoCreditMobile.jpg'
		},
		{
			id: 1,
			banner: './assets/img/used-cars-slider/autoCredit.jpg',
			bannerTablet: './assets/img/used-cars-slider/autoCreditTablet.jpg',
			bannerMobile: './assets/img/used-cars-slider/autoCreditMobile.jpg'
		},
		{
			id: 2,
			banner: './assets/img/used-cars-slider/autoCredit.jpg',
			bannerTablet: './assets/img/used-cars-slider/autoCreditTablet.jpg',
			bannerMobile: './assets/img/used-cars-slider/autoCreditMobile.jpg'
		}
	]

	const prevSwipeHandler = () => {
		swiper?.slidePrev()
	}
	const nextSwipeHandler = () => {
		swiper?.slideNext()
	}

	return (
		<div className={cl.usedCarsSlider}>
			<div className="container">
				<div className={cl.usedCarsSliderSwiper}>
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
						{bannerList.map(({ id, banner, bannerTablet, bannerMobile }) => (
							<SwiperSlide>
								<div key={id}>
									<img src={banner} alt="banner" className={cn([cl.banner, 'd-none', 'd-lg-flex'])} />
									<img src={bannerTablet} alt="banner" className={cn([cl.banner, 'd-none', 'd-sm-flex', 'd-lg-none'])} />
									<img src={bannerMobile} alt="banner" className={cn([cl.banner, 'd-xs-flex', 'd-sm-none'])} />
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	)
}

export default UsedCarsSlider
