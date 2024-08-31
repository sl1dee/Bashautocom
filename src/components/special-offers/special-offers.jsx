import close from '@assets/img/new-cars-filter/close.svg'
import funnel from '@assets/img/new-cars-filter/funnel.svg'
import { CheckboxGroup } from '@consta/uikit/CheckboxGroup'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'
import { Combobox } from '@consta/uikit/Combobox'
import { RadioGroup } from '@consta/uikit/RadioGroup'
import { Select } from '@consta/uikit/Select'
import { Slider } from '@consta/uikit/Slider'
import cn from 'classnames'
import React, {useEffect, useState} from 'react'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss/pagination'

import { Button } from '@consta/uikit/Button';
import SpecialOffersCard from './special-offers-card/special-offers-card.jsx'
import cl from './special-offers.module.scss'
import haval from '/assets/img/special-offer/haval.jpg'
import haval_logo from '/assets/img/special-offer/haval_logo.svg'
import moskvich from '/assets/img/special-offer/moskvich.jpg'
import moskvich_logo from '/assets/img/special-offer/moskvich_logo.svg'
import omoda from '/assets/img/special-offer/omoda.jpg'
import omoda_logo from '/assets/img/special-offer/omoda_logo.svg'
import {createIcon} from "@consta/icons/Icon";

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

	if (isOpen) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = '';
	}

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 992) {
				setIsOpen(false);
			}
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const IconExamplePlusSizeM = () => (
		<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M4.05078 1.57495H13.9508C14.7758 1.57495 15.4508 2.24995 15.4508 3.07495V4.72495C15.4508 5.32495 15.0758 6.07495 14.7008 6.44995L11.4758 9.29995C11.0258 9.67495 10.7258 10.425 10.7258 11.025V14.25C10.7258 14.7 10.4258 15.3 10.0508 15.525L9.00078 16.2C8.02578 16.8 6.67578 16.125 6.67578 14.925V10.95C6.67578 10.425 6.37578 9.74995 6.07578 9.37495L3.22578 6.37495C2.85078 5.99995 2.55078 5.32495 2.55078 4.87495V3.14995C2.55078 2.24995 3.22578 1.57495 4.05078 1.57495Z" stroke="#2F3140" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M8.1975 1.57495L4.5 7.49995" stroke="#2F3140" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>


	);
	const IconAdd = createIcon({
		m: IconExamplePlusSizeM,
		s: IconExamplePlusSizeM,
		xs: IconExamplePlusSizeM,
		name: 'IconAdd',
	});

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
								<div className={cn([cl.filter, 'd-flex', 'flex-column', 'd-sm-none'])}>
									<div className={cl.filterTitle}>Выберите тип услуги</div>
									<div>
										<CheckboxGroup
											value={service}
											items={services}
											getItemLabel={(item) => item.name}
											getItemDisabled={(item) => item.disabled}
											onChange={( value ) => setService(value)}
											name="CheckboxGroup"
										/>
									</div>
									{service === null ? (<div></div>) : (<div onClick={() => setService(null)}>Сбросить все</div>)}
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
											onChange={( value ) => setBrand(value)}
											name="CheckboxGroup"
										/>
									</div>
									{brand === null ? (<div></div>) : (<div onClick={() => setBrand(null)}>Сбросить все</div>)}
								</div>
								{/*<div className={cn([cl.btn, 'd-flex'])}>*/}
								<Button
									className={cn([cl.btn, 'd-flex'])}
									colorStyle="primary"
									sizeStyle="sizeS"
									onClick={() => setIsOpen(!isOpen)}
								>
									Применить
								</Button>
								{/*</div>*/}
							</div>
						</div>
					</div>

					<div className={cl.specialOffers}>
						<div className="container">
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
										<Button className={cn([cl.buttonsAccount, 'justify-content-center', 'align-items-center'])} label='Фильтр' size='s' view="secondary" iconLeft={IconAdd}/>
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
												onChange={( value ) => setValue(value)}
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
												onChange={( value ) => setValue(value)}
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
												onChange={( value ) => setComboboxValue(value)}
												multiple
											/>
										</div>
										<div className="d-flex d-lg-none">
											<Button className={cn([cl.buttonsAccount, 'justify-content-center', 'align-items-center'])} label='Бренд' size='m' view="secondary" iconLeft={IconAdd}/>
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
											pagination={{
												el: `.${cl.swiperPagination}`,
												clickable: true,
												renderBullet: (index, className) => {
													return `<div class='${className}'></div>`;
												},
											}}
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
										<div className={cn([cl.swiperPagination, 'd-none', 'd-sm-flex'])}/>
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
