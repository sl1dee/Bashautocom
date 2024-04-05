import mechanic from '@assets/img/fast-sign-up/mechanic.jpg'
import { Combobox } from '@consta/uikit/Combobox'
import cn from 'classnames'
import React, { useState } from 'react'

import Button from '@ui/button/button.jsx'

import cl from './fast-sign-up.module.scss'

const FastSignUp = () => {
	const [comboboxValue, setComboboxValue] = useState(null)

	const comboboxValues = [
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

	return (
		<div className={cl.signUp}>
			<div className="container p-o">
				<div className={cn([cl.signUpInformation, 'd-flex'])}>
					<div className={cn([cl.signUpInformationModal, 'd-flex', 'flex-column'])}>
						<span className={cn([cl.signUpInformationModalBlock1, 'd-flex', 'flex-column'])}>
							<h3 className="mb-0">Быстрая запись в сервисный центр</h3>
							<p className="mb-0">Оставьте заявку через форму или позвоните по номеру +7 (ХХХ) ХХХ-ХХ-ХХ</p>
						</span>
						<span className={cn([cl.signUpInformationModalBlock2, 'd-flex', 'flex-column'])}>
							<input type="text" className={cl.input} name="name" placeholder="Имя" />
							<input type="text" className={cl.input} placeholder="Телефон" />
							<div className={cl.combobox}>
								<Combobox
									placeholder="Выберите бренд"
									size="l"
									items={comboboxValues}
									value={comboboxValue}
									onChange={({ value }) => setComboboxValue(value)}
									multiple
								/>
							</div>
						</span>
						<span className={cn([cl.signUpInformationModalBlock3, 'd-flex', 'flex-column'])}>
							<div>
								<Button sizeStyle="sizeL">Отправить вопрос</Button>
							</div>
							<p className={cn([cl.policy, 'd-flex', 'mb-0'])}>
								Нажимая на кнопку, вы соглашаетесь с Политикой конфиденциальности
							</p>
						</span>
					</div>
					<img src={mechanic} alt="mechanic" />
				</div>
			</div>
		</div>
	)
}

export default FastSignUp
