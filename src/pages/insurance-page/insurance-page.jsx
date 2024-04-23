import Banks from '@components/banks/banks.jsx'
import Banner from '@components/banner/banner.jsx'
import BenefitsOfInsurance from '@components/benefits-of-insurance/benefits-of-insurance.jsx'
import Insurance from '@components/sign-ups/insurance/insurance.jsx'
import TypesOfInsurance from '@components/types-of-insurance/types-of-insurance.jsx'

import MainLayout from '../../layout/main/main-layout.jsx'

const InsurancePage = () => {
	const blocks = [
		{
			alias: 'Banner',
			value: [
				{
					bannerDesktop: './assets/img/banner/insurance/insuranceDesktop.jpg',
					bannerTablet: './assets/img/banner/insurance/insuranceTablet.jpg',
					bannerMobile: './assets/img/banner/insurance/insuranceMobile.jpg'
				}
			]
		},
		{
			alias: 'BenefitsOfInsurance',
			value: [
				{
					id: 0,
					icon: './assets/img/insurance/check.svg',
					title: 'Большой выбор страховых компаний',
					text: 'Более 10 самых крупных и надежных страховых компаний'
				},
				{
					id: 1,
					icon: './assets/img/insurance/service.svg',
					title: 'Предложения сразу нескольких страховых ',
					text: 'С расчетом стоимости страхового полиса'
				},
				{
					id: 2,
					icon: './assets/img/insurance/time.svg',
					title: 'Оформляем полис прямо в дилерском центре',
					text: 'В это время ваш автомобиль может пройти очередное ТО'
				},
				{
					id: 3,
					icon: './assets/img/insurance/shield.svg',
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
					image: './assets/img/insurance/kasko.png',
					title: 'Автострахование КАСКО',
					description:
						'Добровольное страхование каско обеспечит финансовую защиту в случае угона, ущерба и полной гибели вашего автомобиля.',
					button: 'Оставить заявку на страхование',
					buttonMobile: 'Оставить заявку'
				},
				{
					id: 1,
					image: './assets/img/insurance/osago.png',
					title: 'Автострахование ОСАГО',
					description:
						'Обязательное страхование автогражданской ответственности. Покрывает ущерб имуществу, здоровью и жизни пострадавшей стороне в ДТП.',
					button: 'Оставить заявку на страхование',
					buttonMobile: 'Оставить заявку'
				},
				{
					id: 2,
					image: './assets/img/insurance/prolongation.png',
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
					image: './assets/img/insurance/alfa.png'
				},
				{
					id: 1,
					image: './assets/img/insurance/sber.png'
				},
				{
					id: 2,
					image: './assets/img/insurance/sogaz.png'
				},
				{
					id: 3,
					image: './assets/img/insurance/rosgosstrah.png'
				},
				{
					id: 4,
					image: './assets/img/insurance/ugory.png'
				},
				{
					id: 5,
					image: './assets/img/insurance/energogarant.png'
				},
				{
					id: 6,
					image: './assets/img/insurance/soglasie.png'
				},
				{
					id: 7,
					image: './assets/img/insurance/peco.png'
				},
				{
					id: 8,
					image: './assets/img/insurance/megaruss.png'
				},
				{
					id: 9,
					image: './assets/img/insurance/max.png'
				},
				{
					id: 10,
					image: './assets/img/insurance/ingosstrah.png'
				},
				{
					id: 11,
					image: './assets/img/insurance/vsk.png'
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
					image: './assets/img/fast-sign-up/insurance.jpg',
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
		<>
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
		</>
	)
}

export default InsurancePage
