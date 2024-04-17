import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'
import { Combobox } from '@consta/uikit/Combobox'
import cn from 'classnames'
import React, { useState } from 'react'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss/pagination'

import haval from '../../../assets/img/dealer-and-service-centers/haval.jpg'
import moskvich from '../../../assets/img/dealer-and-service-centers/moskvich.jpg'
import omoda from '../../../assets/img/dealer-and-service-centers/omoda.jpg'
import Button from '../../ui/button/button.jsx'
import SpecialOffersCard from '../special-offers/special-offers-card/index.js'
import DealerAndServiceCentersCard from './dealer-and-service-centers-card/index.js'
import cl from './dealer-and-service-centers.module.scss'

const DealerAndServiceCenters = ({ title }) => {
	const [swiper, setSwiper] = useState(null)
	const [comboboxValue, setComboboxValue] = useState(null)
	// const { isDesktop, isTablet, isTabletSmall } = useMatchMedia()

	const cardList = [
		{
			bckgImg: haval,
			street: 'Уфа, ул. Проспект Салавата Юлаева, 89',
			number: '+7 (347) 246-65-47',
			sale: '3',
			service: '7',
			saleBrands: ['Haval', 'Changan'],
			serviceBrands: ['Nissan', 'Honda', 'Infinity', 'Datsun', 'Suzuki', 'Haval', 'Changan']
		},
		{
			bckgImg: moskvich,
			street: 'Уфа, ул. Рубежная, 168',
			number: '+7 (347) 246-65-47',
			sale: '2',
			service: '7',
			saleBrands: ['Haval', 'Changan'],
			serviceBrands: ['Nissan', 'Honda', 'Infinity', 'Datsun', 'Suzuki', 'Haval', 'Changan']
		},
		{
			bckgImg: omoda,
			street: 'Уфа, ул. Адмирала Макарова, 32',
			number: '+7 (347) 246-65-47',
			sale: '2',
			service: '7',
			saleBrands: ['Haval', 'Changan'],
			serviceBrands: ['Nissan', 'Honda', 'Infinity', 'Datsun', 'Suzuki', 'Haval', 'Changan']
		},
		{
			bckgImg: haval,
			street: 'Уфа, ул. Проспект Салавата Юлаева, 89',
			number: '+7 (347) 246-65-47',
			sale: '3',
			service: '7',
			saleBrands: ['Haval', 'Changan'],
			serviceBrands: ['Nissan', 'Honda', 'Infinity', 'Datsun', 'Suzuki', 'Haval', 'Changan']
		},
		{
			bckgImg: moskvich,
			street: 'Уфа, ул. Рубежная, 168',
			number: '+7 (347) 246-65-47',
			sale: '2',
			service: '7',
			saleBrands: ['Haval', 'Changan'],
			serviceBrands: ['Nissan', 'Honda', 'Infinity', 'Datsun', 'Suzuki', 'Haval', 'Changan']
		},
		{
			bckgImg: omoda,
			street: 'Уфа, ул. Адмирала Макарова, 32',
			number: '+7 (347) 246-65-47',
			sale: '2',
			service: '7',
			saleBrands: ['Haval', 'Changan'],
			serviceBrands: ['Nissan', 'Honda', 'Infinity', 'Datsun', 'Suzuki', 'Haval', 'Changan']
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

	const prevSwipeHandler = () => {
		swiper?.slidePrev()
	}
	const nextSwipeHandler = () => {
		swiper?.slideNext()
	}

	const items = ['Все', 'Уфа', 'Стерлитамак', 'Октябрьский', 'Белебей']

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
								{cardList.map(({ bckgImg, street, number, sale, service, saleBrands, serviceBrands }) => (
									<SwiperSlide>
										<DealerAndServiceCentersCard
											bckgImg={bckgImg}
											street={street}
											number={number}
											sale={sale}
											service={service}
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
