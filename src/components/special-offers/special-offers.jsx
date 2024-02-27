import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'
import { Combobox } from '@consta/uikit/Combobox'
import cn from 'classnames'
import React, { useState } from 'react'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss/pagination'

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
	const [comboboxValue, setComboboxValue] = useState(null)
	// const { isDesktop, isTablet, isTabletSmall } = useMatchMedia()

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
			title: 'OMODA С5 AWD С ВЫГОДОЙ ДО 880 000 ₽',
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
			title: 'OMODA С5 AWD С ВЫГОДОЙ ДО 880 000 ₽',
			logo: omoda_logo
		}
	]

	const comboboxValues = [
		{
			label: 'Changan Auto',
			id: 1
		},
		{
			label: 'Omoda',
			id: 2
		},
		{
			label: 'Haval',
			id: 3
		},
		{
			label: 'Москвич',
			id: 4
		},
		{
			label: 'Exeed',
			id: 5
		}
	]

	const items = ['Все', 'Продажа', 'Сервис', 'Детейлинг']

	const [value, setValue] = useState(items[0])

	const prevSwipeHandler = () => {
		swiper?.slidePrev()
	}
	const nextSwipeHandler = () => {
		swiper?.slideNext()
	}

	return (
		<div className={cl.specialOffers}>
			<div className="container p-0">
				<div className={cn([cl.specialOffersInformation, 'd-flex', 'flex-column'])}>
					<h1 className={cn([cl.specialOffersInformationTitle, 'mb-0'])}>Специальные предложения</h1>
					<div className="d-flex flex-column gap-4">
						<div className="d-flex justify-content-between align-items-center">
							<div className="d-flex">
								<ChoiceGroup
									value={value}
									onChange={setValue}
									items={items}
									getItemLabel={(item) => item}
									form="default"
									size="l"
									view="primary"
									name="ChoiceGroupExampleForm"
									multiple={false}
								/>
							</div>
							<div className={cl.combobox}>
								<Combobox
									placeholder="Выберите бренд"
									size="l"
									items={comboboxValues}
									value={comboboxValue}
									onChange={setComboboxValue}
									multiple
								/>
							</div>
						</div>
						<div className={cl.specialOffersSwiper}>
							<button onClick={prevSwipeHandler} className={cn([cl.swiperArrow, cl.swiperArrowLeft])} />
							<button onClick={nextSwipeHandler} className={cn([cl.swiperArrow, cl.swiperArrowRight])} />
							<Swiper
								className={cl.swiper}
								modules={[Navigation, Pagination, Scrollbar, A11y]}
								spaceBetween={30}
								slidesPerView={3}
								onSwiper={(swiper) => setSwiper(swiper)}
								pagination={{ clickable: true }}
								scrollbar={{ draggable: true }}
							>
								{cardList.map(({ bckgImg, title, logo }) => (
									<SwiperSlide>
										<SpecialOffersCard bckgImg={bckgImg} title={title} logo={logo} />
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

export default SpecialOffers
