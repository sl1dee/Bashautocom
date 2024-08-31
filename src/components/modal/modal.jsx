import { Combobox } from '@consta/uikit/Combobox'
import cn from 'classnames'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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

	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={cn([cl.modal, 'd-flex', 'flex-column', 'd-sm-none'])}>
			<div className={cn([cl.modalWrapper, 'd-flex', 'justify-content-center', 'align-items-center'])}>
				<div className={cl.modalWrapperContent}>
					<div className="d-flex align-items-center justify-content-between">
						<div className={cl.modalWrapperContentTitle}>Запись в сервисный центр</div>
						<img src="" alt="иконка" />
					</div>
					<div className={cn([cl.modalWrapperContentInputs, 'd-flex', 'flex-column'])}>
						<input type="text" className={cl.input} name="name" placeholder="Имя" />
						<input type="text" className={cl.input} placeholder="Телефон" />
						<div className={cl.combobox}>
							<Combobox
								placeholder="Выберите бренд"
								size="s"
								items={comboboxValues}
								value={comboboxValue}
								onChange={({ value }) => setComboboxValue(value)}
								multiple
							/>
						</div>
					</div>
					<div className={cn([cl.modalWrapperContentGroup, 'd-flex', 'flex-column'])}>
						<div>
							<Button sizeStyle="sizeL" className={cl.btn}>
								Записаться
							</Button>
						</div>
						<p className={cn([cl.policy, 'd-flex', 'd-sm-none', 'mb-0'])}>
							Нажимая на кнопку, вы соглашаетесь с{' '}
							<Link to="/privacy-policy" className={cl.link}>
								Политикой конфиденциальности
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal
