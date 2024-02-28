import phones from '@assets/img/loyalty-program/phones.png'
import cn from 'classnames'
import React from 'react'

import Button from '@ui/button/index.js'

import cl from './loyalty-program.module.scss'

const LoyaltyProgram = () => {
	return (
		<div className={cl.loyaltyProgram}>
			<div className="container p-0">
				<div className={cn([cl.loyaltyProgramInformation, 'd-flex'])}>
					<img src={phones} alt="phones" />
					<div className={cn([cl.loyaltyProgramInformationBlock, 'd-flex', 'flex-column'])}>
						<h3 className="mb-0">Выгоднее с программой лояльности Башавтоком</h3>
						<h6 className="d-flex mb-0">Бонусная система 1 бонус = 1 рубль</h6>
						<span className={cl.ulList}>
							<p className="mb-0">Вы сможете:</p>
							<ul className="d-flex flex-column mb-0">
								<li>
									Накапливать бонусные баллы и оплачивать ими услуги сервиса, покупку запчастей в любом нашем дилерском
									центре
								</li>
								<li>Отслеживать историю посещений сервиса в личном кабинете</li>
								<li>Записываться в сервисный центр</li>
							</ul>
						</span>
						<Button sizeStyle="sizeL" colorStyle="Secondary" className={cn([cl.btn, 'd-flex'])}>
							Стать участником бонусной программы
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LoyaltyProgram
