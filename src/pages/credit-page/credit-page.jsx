import React from 'react'

import LogoGrid from '@components/LogoGrid/LogoGrid.jsx'
import Banner from '@components/banner/banner.jsx'
import InOurShowrooms from '@components/in-our-showrooms/in-our-showrooms.jsx'
import CallbackForm from "@components/callback/callbackForm/callbackForm";

const CreditPage = () => {
	const blocks = [
		{
			alias: 'Banner',
			value: [
				{
					bannerDesktop: '/assets/img/banner/credit/creditDesktop.jpg',
					bannerTablet: '/assets/img/banner/credit/creditMobile.jpg',
					bannerMobile: '/assets/img/banner/credit/creditMobile.jpg'
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
			alias: 'LogoGrid',
			title: 'Банки партнеры',
			value: [
				{
					id: 0,
					image: '/assets/img/banks/tinkoff.png'
				},
				{
					id: 1,
					image: '/assets/img/banks/alfa.png'
				},
				{
					id: 2,
					image: '/assets/img/banks/vtb.png'
				},
				{
					id: 3,
					image: '/assets/img/banks/rosbank.png'
				},
				{
					id: 4,
					image: '/assets/img/banks/uralsib.png'
				},
				{
					id: 5,
					image: '/assets/img/banks/sovkombank.png'
				},
				{
					id: 6,
					image: '/assets/img/banks/otkrytie.png'
				},
				{
					id: 7,
					image: '/assets/img/banks/evropabank.png'
				},
				{
					id: 8,
					image: '/assets/img/banks/otpbank.png'
				},
				{
					id: 9,
					image: '/assets/img/banks/autofinance.png'
				},
				{
					id: 10,
					image: '/assets/img/banks/fastbank.png'
				},
				{
					id: 11,
					image: '/assets/img/banks/driveclick.png'
				},
				{
					id: 12,
					image: '/assets/img/banks/lokobank.png'
				},
				{
					id: 13,
					image: '/assets/img/banks/ekspobank.png'
				}
			]
		},
		{
			alias: 'CallbackForm',
			title: 'Проконсультируем по автокредитованию',
			description: 'Оставьте заявку через форму или позвоните <br/>по номеру <a href="tel:+79051818768">+7 (905) 181-87-68</a>',
			buttonText: 'Записаться',
			image: '/assets/img/fast-sign-up/credit.jpg',
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
					name: 'brand',
					placeholder: 'Выберите бренд',
					values: [
						{
							label: 'Changan Auto'
						},
						{
							label: 'Omoda'
						},
						{
							label: 'Haval'
						},
						{
							label: 'Москвич'
						},
						{
							label: 'Exeed',
						}
					]
				},
			]
		},
	]

	return (
		<>
			{blocks.map((block) => {
				switch (block.alias) {
					case 'Banner':
						return <Banner bannerList={block.value} />
					case 'InOurShowrooms':
						return <InOurShowrooms title={block.title} cardList={block.value} description={block.description} />
					case 'LogoGrid':
						return <LogoGrid title={block.title} logos={block.value} />
					case 'CallbackForm':
						return <CallbackForm title={block.title}
											 description={block.description}
											 buttonText={block.buttonText}
											 image={block.image}
											 backround={block.background}
											 fields={block.fields}/>
				}
			})}
		</>
	)
}

export default CreditPage
