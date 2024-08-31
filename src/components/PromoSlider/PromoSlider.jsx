import cn from 'classnames'
import React, { useState } from 'react'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss/pagination'

import cl from './PromoSlider.module.scss'

export default function PromoSlider ({ bannerList }) {
	const [swiper, setSwiper] = useState(null)

	const prevSwipeHandler = () => {
		swiper?.slidePrev()
	}
	const nextSwipeHandler = () => {
		swiper?.slideNext()
	}

	return (
		<div className={cl.promoSlider}>
			<div className="container">
				<div className={cl.promoSliderSwiper}>
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
						pagination={{
							el: `.${cl.swiperPagination}`,
							clickable: true,
							renderBullet: (index, className) => {
								return `<div class='${className}'></div>`;
							},
						}}
						scrollbar={{ draggable: true }}
						loop={true}
					>
						{bannerList.map(({ bannerDesktop, bannerTablet, bannerMobile }) => (
							<SwiperSlide>
								<picture>
									<source srcSet={bannerMobile} media="(max-width: 576px)"/>
									<source srcSet={bannerTablet} media="(min-width: 576px) and (max-width: 992px)"/>
									<source srcSet={bannerDesktop} media="(min-width: 992)"/>
									<img src={bannerDesktop} className={cl.banner} />
								</picture>
							</SwiperSlide>
						))}
					</Swiper>
					<div className={cn([cl.swiperPagination])}/>
				</div>
			</div>
		</div>
	)
}