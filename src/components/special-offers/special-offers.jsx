import cn from 'classnames'
import React, { useState } from 'react'
import { A11y, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import Button from '../../ui/button/button.jsx'
import SpecialOffersCard from './special-offers-card/index.js'
import cl from './special-offers.module.scss'
import haval from '/assets/img/special-offer/haval.jpg'
import haval_logo from '/assets/img/special-offer/haval_logo.svg'
import moskvich from '/assets/img/special-offer/moskvich.jpg'
import moskvich_logo from '/assets/img/special-offer/moskvich_logo.svg'
import omoda from '/assets/img/special-offer/omoda.jpg'
import omoda_logo from '/assets/img/special-offer/omoda_logo.svg'

const SpecialOffers = () => {
	const [swiper, setSwiper] = useState(null)
	// const { isDesktop, isTablet, isTabletSmall } = useMatchMedia()

	const prevSwipeHandler = () => {
		swiper?.slidePrev()
	}
	const nextSwipeHandler = () => {
		swiper?.slideNext()
	}

	const cardList = [
		{
			bckgImg: haval,
			title: 'ВЫГОДА НА HAVAL M6 до 200 000 ₽',
			logo: haval_logo
		},
		{
			bckgImg: moskvich,
			title: 'МЕГА-ВЫГОДА\n' + 'НА МОСКВИЧ 3Е\n' + 'ДО 925 000 ₽',
			logo: moskvich_logo
		},
		{
			bckgImg: omoda,
			title: 'OMODA С5 AWD С ВЫГОДОЙ ДО 880 000 ₽',
			logo: omoda_logo
		},
		{
			bckgImg: haval,
			title: 'ВЫГОДА НА HAVAL M6 до 200 000 ₽',
			logo: haval_logo
		},
		{
			bckgImg: moskvich,
			title: 'МЕГА-ВЫГОДА\n' + 'НА МОСКВИЧ 3Е\n' + 'ДО 925 000 ₽',
			logo: moskvich_logo
		},
		{
			bckgImg: omoda,
			title: 'OMODA С5 AWD С ВЫГОДОЙ ДО 880 000 ₽',
			logo: omoda_logo
		}
	]

	return (
		<div className={cl.specialOffers}>
			<div className="container-fluid p-0">
				<div className={cn([cl.specialOffersInformation, 'd-flex', 'flex-column'])}>
					<h1 className={cn(['mb-0'])}>Специальные предложения</h1>
					<div className="d-flex flex-column gap-4">
						<div className="d-flex justify-content-between align-items-center">
							<div className="d-flex">
								<Button sizeStyle="sizeL">Все</Button>
								<Button sizeStyle="sizeL" colorStyle="Outlined">
									Продажа
								</Button>
								<Button sizeStyle="sizeL" colorStyle="Outlined">
									Сервис
								</Button>
								<Button sizeStyle="sizeL" colorStyle="Outlined">
									Детейлинг
								</Button>
							</div>
							<div>selector</div>
						</div>
						<div className={cl.otherGoodsSwiper}>
							<button onClick={prevSwipeHandler} />
							<button onClick={nextSwipeHandler} />
							<Swiper
								modules={[Navigation, Pagination]}
								spaceBetween={30}
								slidesPerView={3}
								onSwiper={(swiper) => setSwiper(swiper)}
								navigation
								pagination={{ el: 'swiper-pagination', clickable: true }}
								scrollbar={{ draggable: true }}
							>
								{cardList.map(({ bckgImg, title, logo }) => (
									<SwiperSlide>
										<SpecialOffersCard bckgImg={bckgImg} title={title} logo={logo} />
									</SwiperSlide>
								))}
								<div className="swiper-pagination"></div>
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SpecialOffers
