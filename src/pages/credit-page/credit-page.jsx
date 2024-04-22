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
import creditDesktop from '@assets/img/banner/credit/creditDesktop.jpg'
import creditMobile from '@assets/img/banner/credit/creditMobile.jpg'
import creditTablet from '@assets/img/banner/credit/creditTablet.jpg'
import credit from '@assets/img/fast-sign-up/credit.jpg'
import React from 'react'

import Banks from '@components/banks/banks.jsx'
import Banner from '@components/banner/banner.jsx'
import InOurShowrooms from '@components/in-our-showrooms/in-our-showrooms.jsx'
import Credit from '@components/sign-ups/credit/credit.jsx'

import MainLayout from '../../layout/main/main-layout.jsx'

const CreditPage = () => {
	const blocks = [
		{
			alias: 'Banner',
			value: [
				{
					bannerDesktop: creditDesktop,
					bannerTablet: creditTablet,
					bannerMobile: creditMobile
				}
			]
		},
		{
			alias: 'InOurShowrooms',
			title: 'В наших салонах',
			description: 'и всё это можно совместить с приятным выбором автомобиля мечты',
			value: [
				{
					id: 0,
					number: '1',
					text: 'Вас проконсультируют по поводу автокредитования'
				},
				{
					id: 1,
					number: '2',
					text: 'Получите условия предоставления кредитов от разных банков'
				},
				{
					id: 2,
					number: '3',
					text: 'Наши менеджеры помогут в оформлении документов, передадут полный пакет документов в банк'
				}
			]
		},
		{
			alias: 'Banks',
			title: 'Банки партнеры',
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
					title: 'Проконсультируем по автокредитованию',
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
					case 'InOurShowrooms':
						return <InOurShowrooms title={block.title} cardList={block.value} description={block.description} />
					case 'Banks':
						return <Banks title={block.title} banksList={block.value} />
					case 'Credit':
						return <Credit creditList={block.value} comboboxValues={block.brands} />
				}
			})}
		</MainLayout>
	)
}

export default CreditPage
