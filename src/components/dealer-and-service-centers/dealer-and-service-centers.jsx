import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'
import { Combobox } from '@consta/uikit/Combobox'
import cn from 'classnames'
import React, { useState } from 'react'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss/pagination'

import DealerAndServiceCentersCard from './dealer-and-service-centers-card/dealer-and-service-centers-card.jsx'
import cl from './dealer-and-service-centers.module.scss'

const DealerAndServiceCenters = ({ title, cardList, comboboxValues, items }) => {
	const [swiper, setSwiper] = useState(null)
	const [comboboxValue, setComboboxValue] = useState(null)
	// const { isDesktop, isTablet, isTabletSmall } = useMatchMedia()

	const prevSwipeHandler = () => {
		swiper?.slidePrev()
	}
	const nextSwipeHandler = () => {
		swiper?.slideNext()
	}

	// const items = ['Все', 'Уфа', 'Стерлитамак', 'Октябрьский', 'Белебей']

	const [value, setValue] = useState(items[0])

	return (
		<div className={cn[(cl.centers, 'd-xs-none', 'd-sm-flex')]}>
			<div className="container p-0">
				<div className={cn([cl.centersInformation, 'd-flex', 'flex-column'])}>
					<h1 className={cn([cl.centersInformationTitle, 'mb-0'])}>{title}</h1>
					<div className={cn([cl.centersInformationBlock, 'd-flex', 'flex-column'])}>
						{/*<div className="d-flex flex-column flex-lg-row justify-content-lg-between align-items-lg-center">*/}
						<div
							className={cn([
								cl.centersInformationBlockFilters,
								'd-none',
								'd-sm-flex',
								'flex-column',
								'flex-lg-row',
								'justify-content-lg-between',
								'align-items-lg-center'
							])}
						>
							<div className="d-none d-lg-flex">
								<ChoiceGroup
									value={value}
									onChange={({ value }) => setValue(value)}
									items={items}
									getItemLabel={(item) => item}
									form="default"
									size="l"
									view="primary"
									name="ChoiceGroupExampleForm"
									multiple={false}
								/>
							</div>
							<div className="d-none d-sm-flex d-lg-none">
								<ChoiceGroup
									value={value}
									onChange={({ value }) => setValue(value)}
									items={items}
									getItemLabel={(item) => item}
									form="default"
									size="m"
									view="primary"
									name="ChoiceGroupExampleForm"
									multiple={false}
								/>
							</div>
							<div className={cn([cl.combobox, 'd-none', 'd-lg-flex'])}>
								<Combobox
									placeholder="Выберите бренд"
									size="l"
									items={comboboxValues}
									value={comboboxValue}
									onChange={({ value }) => setComboboxValue(value)}
									multiple
								/>
							</div>
							<div className={cn([cl.combobox, 'd-none', 'd-sm-flex', 'd-lg-none'])}>
								<Combobox
									placeholder="Выберите бренд"
									size="m"
									items={comboboxValues}
									value={comboboxValue}
									onChange={({ value }) => setComboboxValue(value)}
									multiple
								/>
							</div>
						</div>
						<div className={cl.centersSwiper}>
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
								slidesPerView={2}
								onSwiper={(swiper) => setSwiper(swiper)}
								pagination={{ clickable: true }}
								scrollbar={{ draggable: true }}
								loop={true}
								breakpoints={{
									// when window width is >= 640px
									320: {
										spaceBetween: 20,
										slidesPerView: 1
									},
									// when window width is >= 576px
									576: {
										spaceBetween: 20,
										slidesPerView: 2
									},
									// when window width is >= 992px
									1000: {
										spaceBetween: 20,
										slidesPerView: 3
									}
								}}
							>
								{cardList.map(({ bckgImg, street, number, saleCount, serviceCount, saleBrands, serviceBrands }) => (
									<SwiperSlide>
										<DealerAndServiceCentersCard
											bckgImg={bckgImg}
											street={street}
											number={number}
											saleCount={saleCount}
											serviceCount={serviceCount}
											saleBrands={saleBrands}
											serviceBrands={serviceBrands}
										/>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DealerAndServiceCenters
