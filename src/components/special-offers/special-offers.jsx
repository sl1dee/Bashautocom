import close from '@assets/img/new-cars-filter/close.svg'
import funnel from '@assets/img/new-cars-filter/funnel.svg'
import { CheckboxGroup } from '@consta/uikit/CheckboxGroup'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'
import { Combobox } from '@consta/uikit/Combobox'
import { RadioGroup } from '@consta/uikit/RadioGroup'
import { Select } from '@consta/uikit/Select'
import { Slider } from '@consta/uikit/Slider'
import cn from 'classnames'
import React, { useState } from 'react'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss/pagination'

import Button from '../../ui/button/button.jsx'
import SpecialOffersCard from './special-offers-card/special-offers-card.jsx'
import cl from './special-offers.module.scss'
import haval from '/assets/img/special-offer/haval.jpg'
import haval_logo from '/assets/img/special-offer/haval_logo.svg'
import moskvich from '/assets/img/special-offer/moskvich.jpg'
import moskvich_logo from '/assets/img/special-offer/moskvich_logo.svg'
import omoda from '/assets/img/special-offer/omoda.jpg'
import omoda_logo from '/assets/img/special-offer/omoda_logo.svg'

const SpecialOffers = ({ specialOffersText, specialOffersCards, comboboxValues, items }) => {
	const [swiper, setSwiper] = useState(null)
	const [comboboxValue, setComboboxValue] = useState(null)
	const [brand, setBrand] = useState(null)
	const [service, setService] = useState(null)
	// const { isDesktop, isTablet, isTabletSmall } = useMatchMedia()

	const [value, setValue] = useState(items[0])

	const prevSwipeHandler = () => {
		swiper?.slidePrev()
	}
	const nextSwipeHandler = () => {
		swiper?.slideNext()
	}

	const brands = [
		{ name: 'Audi' },
		{ name: 'BAIC' },
		{ name: 'BMW' },
		{ name: 'Cadillac' },
		{ name: 'Changan' },
		{ name: 'BAIC' },
		{ name: 'BMW' },
		{ name: 'Cadillac' },
		{ name: 'Changan' },
		{ name: 'BAIC' },
		{ name: 'BMW' },
		{ name: 'Cadillac' },
		{ name: 'Changan' },
		{ name: 'Chery' }
	]

	const services = [{ name: 'Все' }, { name: 'Продажа' }, { name: 'Сервис' }, { name: 'Cadillac' }]

	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			{specialOffersText.map(({ title, titleMobile }) => (
				<>
					<div className={`${cl.sidebar} ${isOpen ? '' : cl.active}`}>
						<div className={`${isOpen ? cl.sidebarBckg : ''}`} title="Закрыть" onClick={() => setIsOpen(!isOpen)} />
						<div className={cn(cl.group)}>
							<div className={cn([cl.groupFilter, 'd-flex', 'd-xxl-none', 'flex-column'])}>
								<div className={cn([cl.groupFilterHead, 'd-flex', 'align-items-center', 'justify-content-between'])}>
									<h5 className={cn([cl.groupFilterHeadTitle, 'mb-0'])}>Фильтры</h5>
									<img className={cl.groupFilterHeadClose} src={close} alt="close" onClick={() => setIsOpen(!isOpen)} />
								</div>
								<div className={cn([cl.filter, 'd-flex', 'flex-column'])}>
									<div className={cl.filterTitle}>Выберите тип услуги</div>
									<div>
										<CheckboxGroup
											value={service}
											items={services}
											getItemLabel={(item) => item.name}
											getItemDisabled={(item) => item.disabled}
											onChange={({ value }) => setService(value)}
											name="CheckboxGroup"
										/>
									</div>
									<div onClick={() => setService(null)}>Сбросить все</div>
								</div>
								<div className={cn([cl.filter, 'd-flex', 'flex-column'])}>
									<div className={cl.filterTitle}>Выберите бренд</div>
									<input className={cl.filterInput} type="text" placeholder="Поиск по названию" />
									<div>
										<CheckboxGroup
											value={brand}
											items={brands}
											getItemLabel={(item) => item.name}
											getItemDisabled={(item) => item.disabled}
											onChange={({ value }) => setBrand(value)}
											name="CheckboxGroup"
										/>
									</div>
									<div onClick={() => setBrand(null)}>Сбросить все</div>
								</div>
								{/*<div className={cn([cl.btn, 'd-flex'])}>*/}
								<Button
									className={cn([cl.btn, 'd-flex'])}
									colorStyle="primary"
									sizeStyle="sizeS"
									onClick={() => setIsOpen(!isOpen)}
								>
									Принять
								</Button>
								{/*</div>*/}
							</div>
						</div>
					</div>

					<div className={cl.specialOffers}>
						<div className="container p-0">
							<div className={cn([cl.specialOffersInformation, 'd-flex', 'flex-column'])}>
								<h1 className={cn([cl.specialOffersInformationTitle, 'mb-0', 'd-none', 'd-sm-flex'])}>{title}</h1>
								<div
									className={cn([
										cl.specialOffersInformationGroup,
										'd-flex',
										'd-sm-none',
										'align-items-center',
										'justify-content-between'
									])}
								>
									<h1 className={cn([cl.specialOffersInformationGroupTitle, 'mb-0'])}>{titleMobile}</h1>
									<div>
										<Button
											sizeStyle="sizeContent"
											colorStyle="Secondary"
											className={cn([cl.btn, 'd-flex'])}
											onClick={() => setIsOpen(!isOpen)}
										>
											<img src={funnel} alt="" />
											<div>Фильтры</div>
										</Button>
									</div>
								</div>
								<div className="d-flex flex-column gap-4">
									<div
										className={cn([
											cl.specialOffersBtngroup,
											'd-none',
											'd-sm-flex',
											'justify-content-between',
											'align-items-center'
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
												name="ChoiceGroupExampleOne"
												multiple={false}
											/>
										</div>
										<div className="d-sm-flex d-lg-none">
											<ChoiceGroup
												value={value}
												onChange={({ value }) => setValue(value)}
												items={items}
												getItemLabel={(item) => item}
												form="default"
												size="m"
												view="primary"
												name="ChoiceGroupExampleOne"
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
										<div className="d-flex d-lg-none">
											<Button
												sizeStyle="sizeContent"
												colorStyle="Secondary"
												className={cn([cl.btn, 'd-flex', 'align-items-center'])}
												onClick={() => setIsOpen(!isOpen)}
											>
												<img src={funnel} alt="" />
												<div>Бренд</div>
											</Button>
										</div>
									</div>
									<div className={cl.specialOffersSwiper}>
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
											slidesPerView={3}
											onSwiper={(swiper) => setSwiper(swiper)}
											pagination={{ clickable: true }}
											scrollbar={{ draggable: true }}
											loop={true}
											breakpoints={{
												// when window width is >= 640px
												320: {
													spaceBetween: 8,
													slidesPerView: 1.3
												},
												// when window width is >= 576px
												576: {
													spaceBetween: 10,
													slidesPerView: 2
												},
												// when window width is >= 992px
												1000: {
													spaceBetween: 20,
													slidesPerView: 3
												}
											}}
										>
											{specialOffersCards.map(({ image, link }) => (
												<SwiperSlide>
													<SpecialOffersCard image={image} link={link} />
												</SwiperSlide>
											))}
										</Swiper>
									</div>
								</div>
							</div>
						</div>
					</div>
				</>
			))}
		</>
	)
}

export default SpecialOffers
