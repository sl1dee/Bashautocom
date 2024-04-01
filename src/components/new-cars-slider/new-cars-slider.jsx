import moskvich from '@assets/img/new-cars-slider/moskvich.jpg'
import cn from 'classnames'
import React, { useState } from 'react'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import cl from '@components/new-cars-slider/new-cars-slider.module.scss'

const NewCarsSlider = () => {
	const [swiper, setSwiper] = useState(null)

	const bannerList = [
		{
			banner: moskvich
		},
		{
			banner: moskvich
		},
		{
			banner: moskvich
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
								<img src={banner} alt="banner" className={cl.banner} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	)
}

export default NewCarsSlider
