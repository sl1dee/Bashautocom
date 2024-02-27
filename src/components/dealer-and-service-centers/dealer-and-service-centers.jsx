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

const DealerAndServiceCenters = () => {
	const [swiper, setSwiper] = useState(null)
	const [comboboxValue, setComboboxValue] = useState(null)
	// const { isDesktop, isTablet, isTabletSmall } = useMatchMedia()

	const cardList = [
		{
			bckgImg: haval,
			street: 'Уфа, ул. Проспект Салавата Юлаева, 89',
			number: '+7 (347) 246-65-47',
			sale: '3',
			service: '7'
		},
		{
			bckgImg: moskvich,
			street: 'Уфа, ул. Рубежная, 168',
			number: '+7 (347) 246-65-47',
			sale: '2',
			service: '7'
		},
		{
			bckgImg: omoda,
			street: 'Уфа, ул. Адмирала Макарова, 32',
			number: '+7 (347) 246-65-47',
			sale: '2',
			service: '7'
		},
		{
			bckgImg: haval,
			street: 'Уфа, ул. Проспект Салавата Юлаева, 89',
			number: '+7 (347) 246-65-47',
			sale: '3',
			service: '7'
		},
		{
			bckgImg: moskvich,
			street: 'Уфа, ул. Рубежная, 168',
			number: '+7 (347) 246-65-47',
			sale: '2',
			service: '7'
		},
		{
			bckgImg: omoda,
			street: 'Уфа, ул. Адмирала Макарова, 32',
			number: '+7 (347) 246-65-47',
			sale: '2',
			service: '7'
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
		<div className={cl.centers}>
			<div className="container p-0">
				<div className={cn([cl.centersInformation, 'd-flex', 'flex-column'])}>
					<h1 className={cn([cl.centersInformationTitle, 'mb-0'])}>Дилерские и сервисные центры</h1>
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
						<div className={cl.centersSwiper}>
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
								{cardList.map(({ bckgImg, street, number, sale, service }) => (
									<SwiperSlide>
										<DealerAndServiceCentersCard
											bckgImg={bckgImg}
											street={street}
											number={number}
											sale={sale}
											service={service}
										/>
									</SwiperSlide>
								))}
								{/* <div className="swiper-pagination"></div> */}
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DealerAndServiceCenters
