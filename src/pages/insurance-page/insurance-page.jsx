import React from "react";

import LogoGrid from '@components/LogoGrid/LogoGrid.jsx'
import Banner from '@components/banner/banner.jsx'
import BenefitsOfInsurance from '@components/benefits-of-insurance/benefits-of-insurance.jsx'
import TypesOfInsurance from '@components/types-of-insurance/types-of-insurance.jsx'
import CallbackForm from "@components/callback/callbackForm/callbackForm";

const InsurancePage = () => {
	const blocks = [
		{
			alias: 'Banner',
			value: [
				{
					bannerDesktop: '/assets/img/banner/insurance/insuranceDesktop.jpg',
					bannerTablet: '/assets/img/banner/insurance/insuranceTablet.jpg',
					bannerMobile: '/assets/img/banner/insurance/insuranceMobile.jpg'
				}
			]
		},
		{
			alias: 'BenefitsOfInsurance',
			value: [
				{
					id: 0,
					icon: '/assets/img/insurance/check.svg',
					title: 'Большой выбор страховых компаний',
					text: 'Более 10 самых крупных и надежных страховых компаний'
				},
				{
					id: 1,
					icon: '/assets/img/insurance/service.svg',
					title: 'Предложения сразу нескольких страховых ',
					text: 'С расчетом стоимости страхового полиса'
				},
				{
					id: 2,
					icon: '/assets/img/insurance/time.svg',
					title: 'Оформляем полис прямо в дилерском центре',
					text: 'В это время ваш автомобиль может пройти очередное ТО'
				},
				{
					id: 3,
					icon: '/assets/img/insurance/shield.svg',
					title: 'Нет дополнительных комиссий',
					text: 'Наша услуга бесплатна и мы работаем по тарифам СК'
				}
			]
		},
		{
			alias: 'TypesOfInsurance',
			value: [
				{
					id: 0,
					image: '/assets/img/insurance/kasko.png',
					title: 'Автострахование КАСКО',
					description:
						'Добровольное страхование каско обеспечит финансовую защиту в случае угона, ущерба и полной гибели вашего автомобиля.',
					button: 'Оставить заявку на страхование',
					buttonMobile: 'Оставить заявку'
				},
				{
					id: 1,
					image: '/assets/img/insurance/osago.png',
					title: 'Автострахование ОСАГО',
					description:
						'Обязательное страхование автогражданской ответственности. Покрывает ущерб имуществу, здоровью и жизни пострадавшей стороне в ДТП.',
					button: 'Оставить заявку на страхование',
					buttonMobile: 'Оставить заявку'
				},
				{
					id: 2,
					image: '/assets/img/insurance/prolongation.png',
					title: 'Пролонгация',
					description: 'Повторное заключение договора страхования на новый период страхования',
					button: 'Оставить заявку на пролонгацию',
					buttonMobile: 'Оставить заявку'
				}
			]
		},
		{
			alias: 'LogoGrid',
			title: 'Страховые компании',
			value: [
				{
					id: 0,
					image: '/assets/img/insurance/alfa.png'
				},
				{
					id: 1,
					image: '/assets/img/insurance/sber.png'
				},
				{
					id: 2,
					image: '/assets/img/insurance/sogaz.png'
				},
				{
					id: 3,
					image: '/assets/img/insurance/rosgosstrah.png'
				},
				{
					id: 4,
					image: '/assets/img/insurance/ugory.png'
				},
				{
					id: 5,
					image: '/assets/img/insurance/energogarant.png'
				},
				{
					id: 6,
					image: '/assets/img/insurance/soglasie.png'
				},
				{
					id: 7,
					image: '/assets/img/insurance/peco.png'
				},
				{
					id: 8,
					image: '/assets/img/insurance/megaruss.png'
				},
				{
					id: 9,
					image: '/assets/img/insurance/max.png'
				},
				{
					id: 10,
					image: '/assets/img/insurance/ingosstrah.png'
				},
				{
					id: 11,
					image: '/assets/img/insurance/vsk.png'
				}
			]
		},
		{
			alias: 'CallbackForm',
			title: 'Оставьте заявку <br/>на страхование',
			description: 'Оставьте заявку через форму или позвоните <br/>по номеру <a href="tel:+79051818768">+7 (905) 181-87-68</a>',
			buttonText: 'Записаться',
			image: '/assets/img/fast-sign-up/insurance.jpg',
			background: 'dark',
			fields: [
				{
					type: 'text',
					name: 'name',
					placeholder: 'Имя',
				},
				{
					type: 'phone',
					name: 'phone',
					placeholder: 'Телефон',
					required: 1
				},
				{
					type: 'select',
					name: 'insuranceType',
					placeholder: 'Выберите вид страхования',
					values: [
						{
							label: 'ОСАГО'
						},
						{
							label: 'КАСКО'
						},
					]
				},
			]
		}
	]

	return (
		<>
			{
				blocks.map((block) => {
					switch (block.alias) {
						case 'Banner':
							return <Banner bannerList={block.value} />
						case 'BenefitsOfInsurance':
							return <BenefitsOfInsurance benefitsList={block.value} />
						case 'TypesOfInsurance':
							return <TypesOfInsurance typesList={block.value} />
						case 'LogoGrid':
							return <LogoGrid title={block.title} logos={block.value} />
						case 'CallbackForm':
							return <CallbackForm title={block.title}
												 description={block.description}
												 buttonText={block.buttonText}
												 image={block.image}
												 background={block.background}
												 fields={block.fields}/>
					}
				})
			}
		</>
	)
}

export default InsurancePage
