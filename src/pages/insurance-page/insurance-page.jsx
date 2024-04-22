import insuranceDesktop from '@assets/img/banner/insurance/insuranceDesktop.jpg'
import insuranceMobile from '@assets/img/banner/insurance/insuranceMobile.jpg'
import insuranceTablet from '@assets/img/banner/insurance/insuranceTablet.jpg'
import insurance from '@assets/img/fast-sign-up/insurance.jpg'
import alfa from '@assets/img/insurance/alfa.png'
import check from '@assets/img/insurance/check.svg'
import energogarant from '@assets/img/insurance/energogarant.png'
import ingosstrah from '@assets/img/insurance/ingosstrah.png'
import kasko from '@assets/img/insurance/kasko.png'
import max from '@assets/img/insurance/max.png'
import megaruss from '@assets/img/insurance/megaruss.png'
import osago from '@assets/img/insurance/osago.png'
import peco from '@assets/img/insurance/peco.png'
import prolongation from '@assets/img/insurance/prolongation.png'
import rosgosstrah from '@assets/img/insurance/rosgosstrah.png'
import sber from '@assets/img/insurance/sber.png'
import service from '@assets/img/insurance/service.svg'
import shield from '@assets/img/insurance/shield.svg'
import sogaz from '@assets/img/insurance/sogaz.png'
import soglasie from '@assets/img/insurance/soglasie.png'
import time from '@assets/img/insurance/time.svg'
import ugory from '@assets/img/insurance/ugory.png'
import vsk from '@assets/img/insurance/vsk.png'

import Banks from '@components/banks/banks.jsx'
import Banner from '@components/banner/banner.jsx'
import BenefitsOfInsurance from '@components/benefits-of-insurance/benefits-of-insurance.jsx'
import InOurShowrooms from '@components/in-our-showrooms/in-our-showrooms.jsx'
import Credit from '@components/sign-ups/credit/credit.jsx'
import Insurance from '@components/sign-ups/insurance/insurance.jsx'
import TypesOfInsurance from '@components/types-of-insurance/types-of-insurance.jsx'

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
			alias: 'TypesOfInsurance',
			value: [
				{
					id: 0,
					image: kasko,
					title: 'Автострахование КАСКО',
					description:
						'Добровольное страхование каско обеспечит финансовую защиту в случае угона, ущерба и полной гибели вашего автомобиля.',
					button: 'Оставить заявку на страхование',
					buttonMobile: 'Оставить заявку'
				},
				{
					id: 1,
					image: osago,
					title: 'Автострахование ОСАГО',
					description:
						'Обязательное страхование автогражданской ответственности. Покрывает ущерб имуществу, здоровью и жизни пострадавшей стороне в ДТП.',
					button: 'Оставить заявку на страхование',
					buttonMobile: 'Оставить заявку'
				},
				{
					id: 2,
					image: prolongation,
					title: 'Пролонгация',
					description: 'Повторное заключение договора страхования на новый период страхования',
					button: 'Оставить заявку на пролонгацию',
					buttonMobile: 'Оставить заявку'
				}
			]
		},
		{
			alias: 'Banks',
			title: 'Страховые компании',
			value: [
				{
					id: 0,
					image: alfa
				},
				{
					id: 1,
					image: sber
				},
				{
					id: 2,
					image: sogaz
				},
				{
					id: 3,
					image: rosgosstrah
				},
				{
					id: 4,
					image: ugory
				},
				{
					id: 5,
					image: energogarant
				},
				{
					id: 6,
					image: soglasie
				},
				{
					id: 7,
					image: peco
				},
				{
					id: 8,
					image: megaruss
				},
				{
					id: 9,
					image: max
				},
				{
					id: 10,
					image: ingosstrah
				},
				{
					id: 11,
					image: vsk
				}
			]
		},
		{
			alias: 'Insurance',
			value: [
				{
					title: 'Оставьте заявку на страхование',
					description: 'Оставьте заявку через форму или позвоните по номеру +7 (905) 181-87-68',
					btn: 'Записаться',
					policyText: 'Нажимая на кнопку, вы соглашаетесь с ',
					policyLink: 'Политикой конфиденциальности',
					image: insurance,
					titleMobile: 'Оставьте заявку на страхование'
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
					case 'TypesOfInsurance':
						return <TypesOfInsurance typesList={block.value} />
					case 'Banks':
						return <Banks title={block.title} banksList={block.value} />
					case 'Insurance':
						return <Insurance insuranceList={block.value} comboboxValues={block.brands} />
				}
			})}
		</MainLayout>
	)
}

export default InsurancePage
