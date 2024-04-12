import { Combobox } from '@consta/uikit/Combobox'
import cn from 'classnames'
import { useState } from 'react'

import Button from '@ui/button/button.jsx'

import cl from './modal.module.scss'

const Modal = () => {
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
		<div className={cn([cl.modal, 'd-flex', 'flex-column', 'd-sm-none'])}>
			<div className={cl.modalTitle}>Запись в сервисный центр</div>
			<div className={cn([cl.modalInputs, 'd-flex', 'flex-column'])}>
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
			</div>
			<div className={cn([cl.modalGroup, 'd-flex', 'flex-column'])}>
				<div>
					<Button sizeStyle="sizeL" className={cl.btn}>
						Записаться
					</Button>
				</div>
				<p className={cn([cl.policy, 'd-flex', 'd-sm-none', 'mb-0'])}>
					Нажимая на кнопку, вы соглашаетесь с Политикой конфиденциальности
				</p>
			</div>
		</div>
	)
}

export default Modal
