import moskvich from '@assets/img/new-cars-slider/moskvich.jpg'
import moskvichMobile from '@assets/img/new-cars-slider/moskvichMobile.jpg'
import moskvichTablet from '@assets/img/new-cars-slider/moskvichTablet.jpg'
import cn from 'classnames'
import React, { useState } from 'react'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import cl from '@components/new-cars-slider/new-cars-slider.module.scss'

const NewCarsSlider = () => {
	const [swiper, setSwiper] = useState(null)

	const bannerList = [
		{
			banner: moskvich,
			bannerTablet: moskvichTablet,
			bannerMobile: moskvichMobile
		},
		{
			banner: moskvich,
			bannerTablet: moskvichTablet,
			bannerMobile: moskvichMobile
		},
		{
			banner: moskvich,
			bannerTablet: moskvichTablet,
			bannerMobile: moskvichMobile
		}
	]

	const prevSwipeHandler = () => {
		swiper?.slidePrev()
	}
	const nextSwipeHandler = () => {
		swiper?.slideNext()
	}

	return (
		<div className={cl.newCarsSlider}>
			<div className="container p-0">
				<div className={cl.newCarsSliderSwiper}>
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
								<img src={banner} alt="banner" className={cn([cl.banner, 'd-none', 'd-lg-flex'])} />
								<img
									src={moskvichTablet}
									alt="banner"
									className={cn([cl.banner, 'd-none', 'd-sm-flex', 'd-lg-none'])}
								/>
								<img src={moskvichMobile} alt="banner" className={cn([cl.banner, 'd-xs-flex', 'd-sm-none'])} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	)
}

export default NewCarsSlider
