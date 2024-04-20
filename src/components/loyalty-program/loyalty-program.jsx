import cn from 'classnames'
import React from 'react'

import Button from '@ui/button/index.js'

import cl from './loyalty-program.module.scss'

const LoyaltyProgram = ({ textList }) => {
	// const textList = [
	// 	{
	// 		title: 'Выгоднее с программой лояльности Башавтоком',
	// 		bonusSystem: 'Бонусная система 1 бонус = 1 рубль',
	// 		li1: 'Накапливать бонусные баллы и оплачивать ими услуги сервиса, покупку запчастей в любом нашем дилерском центре',
	// 		li2: 'Отслеживать историю посещений сервиса в личном кабинете',
	// 		li3: 'Записываться в сервисный центр',
	// 		btnText: 'Стать участником бонусной программы',
	// 		smallBtnText: 'Стать участником программы'
	// 	}
	// ]

	return (
		<>
			{textList.map(({ title, bonusSystem, li1, li2, li3, btnText, smallBtnText, image }) => (
				<div className={cn([cl.loyaltyProgram, 'd-flex', 'justify-content-center'])}>
					{/* <div className="container p-0"> */}
					<div className={cn([cl.loyaltyProgramInformation, 'd-flex'])}>
						<img src={image} alt="phones" />
						<div className={cn([cl.loyaltyProgramInformationBlock, 'd-flex', 'flex-column'])}>
							<h3 className="mb-0">{title}</h3>
							<h6 className="d-flex mb-0">{bonusSystem}</h6>
							<span className={cl.ulList}>
								<p>Вы сможете:</p>
								<ul className="d-flex flex-column mb-0">
									<li>{li1}</li>
									<li>{li2}</li>
									<li>{li3}</li>
								</ul>
							</span>
							<div className="d-none d-sm-flex">
								<Button sizeStyle="sizeS" colorStyle="Secondary2" className={cn([cl.btn])}>
									{btnText}
								</Button>
							</div>
							<div className="d-xs-flex d-sm-none">
								<Button sizeStyle="sizeS" colorStyle="Secondary2" className={cn([cl.btn])}>
									{smallBtnText}
								</Button>
							</div>
						</div>
					</div>
					{/* </div> */}
				</div>
			))}
		</>
	)
}

export default LoyaltyProgram
