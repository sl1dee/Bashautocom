import alfa from '@assets/img/banks/alfa.png'
import autofinance from '@assets/img/banks/autofinance.png'
import driveclick from '@assets/img/banks/driveclick.png'
import ekspobank from '@assets/img/banks/ekspobank.png'
import evropabank from '@assets/img/banks/evropabank.png'
import fastbank from '@assets/img/banks/fastbank.png'
import lokobank from '@assets/img/banks/lokobank.png'
import otkrytie from '@assets/img/banks/otkrytie.png'
import otpbank from '@assets/img/banks/otpbank.png'
import rosbank from '@assets/img/banks/rosbank.png'
import sovkombank from '@assets/img/banks/sovkombank.png'
import tinkoff from '@assets/img/banks/tinkoff.png'
import uralsib from '@assets/img/banks/uralsib.png'
import vtb from '@assets/img/banks/vtb.png'
import insuranceDesktop from '@assets/img/banner/insurance/insuranceDesktop.jpg'
import insuranceMobile from '@assets/img/banner/insurance/insuranceMobile.jpg'
import insuranceTablet from '@assets/img/banner/insurance/insuranceTablet.jpg'
import credit from '@assets/img/fast-sign-up/credit.jpg'
import check from '@assets/img/insurance/check.svg'
import service from '@assets/img/insurance/service.svg'
import shield from '@assets/img/insurance/shield.svg'
import time from '@assets/img/insurance/time.svg'

import Banks from '@components/banks/banks.jsx'
import Banner from '@components/banner/banner.jsx'
import BenefitsOfInsurance from '@components/benefits-of-insurance/benefits-of-insurance.jsx'
import InOurShowrooms from '@components/in-our-showrooms/in-our-showrooms.jsx'
import Credit from '@components/sign-ups/credit/credit.jsx'

import MainLayout from '../../layout/main/main-layout.jsx'

const InsurancePage = () => {
	const blocks = [
		{
			alias: 'Banner',
			value: [
				{
					bannerDesktop: insuranceDesktop,
					bannerTablet: insuranceTablet,
					bannerMobile: insuranceMobile
				}
			]
		},
		{
			alias: 'BenefitsOfInsurance',
			value: [
				{
					id: 0,
					icon: check,
					title: 'Большой выбор страховых компаний',
					text: 'Более 10 самых крупных и надежных страховых компаний'
				},
				{
					id: 1,
					icon: service,
					title: 'Предложения сразу нескольких страховых ',
					text: 'С расчетом стоимости страхового полиса'
				},
				{
					id: 2,
					icon: time,
					title: 'Оформляем полис прямо в дилерском центре',
					text: 'В это время ваш автомобиль может пройти очередное ТО'
				},
				{
					id: 3,
					icon: shield,
					title: 'Нет дополнительных комиссий',
					text: 'Наша услуга бесплатна и мы работаем по тарифам СК'
				}
			]
		},
		{
			alias: 'Banks',
			value: [
				{
					id: 0,
					image: tinkoff
				},
				{
					id: 1,
					image: alfa
				},
				{
					id: 2,
					image: vtb
				},
				{
					id: 3,
					image: rosbank
				},
				{
					id: 4,
					image: uralsib
				},
				{
					id: 5,
					image: sovkombank
				},
				{
					id: 6,
					image: otkrytie
				},
				{
					id: 7,
					image: evropabank
				},
				{
					id: 8,
					image: otpbank
				},
				{
					id: 9,
					image: autofinance
				},
				{
					id: 10,
					image: fastbank
				},
				{
					id: 11,
					image: driveclick
				},
				{
					id: 12,
					image: lokobank
				},
				{
					id: 13,
					image: ekspobank
				}
			]
		},
		{
			alias: 'Credit',
			value: [
				{
					title: 'Оставьте заявку на страхование',
					description: 'Оставьте заявку через форму или позвоните по номеру +7 (ХХХ) ХХХ-ХХ-ХХ',
					btn: 'Записаться',
					policyText: 'Нажимая на кнопку, вы соглашаетесь с ',
					policyLink: 'Политикой конфиденциальности',
					image: credit,
					titleMobile: 'Оставить заявку на кредитование'
				}
			],
			brands: [
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
		}
	]

	return (
		<MainLayout>
			{blocks.map((block) => {
				switch (block.alias) {
					case 'Banner':
						return <Banner bannerList={block.value} />
					case 'BenefitsOfInsurance':
						return <BenefitsOfInsurance benefitsList={block.value} />
					case 'Banks':
						return <Banks banksList={block.value} />
					case 'Credit':
						return <Credit creditList={block.value} comboboxValues={block.brands} />
				}
			})}
		</MainLayout>
	)
}

export default InsurancePage
