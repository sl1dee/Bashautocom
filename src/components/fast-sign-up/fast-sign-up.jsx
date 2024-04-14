import close from '@assets/img/fast-sign-up/close.svg'
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

	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<div className={cl.signUp}>
				<div className="container p-o">
					<div className={cn([cl.signUpInformation, 'd-flex', 'flex-column', 'flex-lg-row'])}>
						<div className={cn([cl.signUpInformationModal, 'd-flex', 'flex-column'])}>
							<div className={cn([cl.signUpInformationModalBlock1, 'd-flex', 'flex-column'])}>
								<h3 className="mb-0">Быстрая запись в сервисный центр</h3>
								<p className="mb-0">Оставьте заявку через форму или позвоните по номеру +7 (ХХХ) ХХХ-ХХ-ХХ</p>
							</div>
							<div className={cn([cl.signUpInformationModalBlock2, 'd-none', 'd-sm-flex', 'flex-column'])}>
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
							<div className={cn([cl.signUpInformationModalBlock3, 'd-flex', 'flex-column'])}>
								<div>
									<Button sizeStyle="sizeL" className={cl.btn} onClick={() => setIsOpen(!isOpen)}>
										Записаться
									</Button>
								</div>
								<p className={cn([cl.policy, 'd-none', 'd-sm-flex', 'mb-0'])}>
									Нажимая на кнопку, вы соглашаетесь с Политикой конфиденциальности
								</p>
							</div>
						</div>
						<img src={mechanic} alt="mechanic" />
					</div>
				</div>
			</div>

			{isOpen && (
				<div className={cn([cl.modal, 'd-flex', 'flex-column', 'd-sm-none'])}>
					<div className={cn([cl.modalWrapper, 'd-flex', 'justify-content-center', 'align-items-center'])}>
						<div className={cn([cl.modalWrapperContent, 'd-flex', 'flex-column'])}>
							{/* <div className="d-flex align-items-center justify-content-between"> */}
							<div
								className={cn([
									cl.modalWrapperContentHeader,
									'd-flex',
									'align-items-center',
									'justify-content-between'
								])}
							>
								<div className={cl.modalWrapperContentHeaderTitle}>Запись в сервисный центр</div>
								<img src={close} alt="иконка" onClick={() => setIsOpen(!isOpen)} />
							</div>
							<div className={cn([cl.modalWrapperContentInputs, 'd-flex', 'flex-column'])}>
								<input type="text" className={cl.input} name="name" placeholder="Имя" />
								<input type="text" className={cl.input} placeholder="Телефон" />
								<div>
									<Combobox
										className={cl.combobox}
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
									Нажимая на кнопку, вы соглашаетесь с Политикой конфиденциальности
								</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default FastSignUp
