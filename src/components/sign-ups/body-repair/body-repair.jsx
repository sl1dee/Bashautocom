import close from '@assets/img/fast-sign-up/close.svg'
import { Combobox } from '@consta/uikit/Combobox'
import cn from 'classnames'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '@ui/button/button.jsx'

import cl from './body-repair.module.scss'

const BodyRepair = ({ bodyRepairList, comboboxValues }) => {
	const [comboboxValue, setComboboxValue] = useState(null)

	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			{bodyRepairList.map(({ title, description, titleMobile, btn, policyText, policyLink, image }) => (
				<>
					<div className={cl.signUp}>
						<div className="container p-0">
							<div className={cn([cl.signUpInformation, 'd-flex', 'flex-column', 'flex-lg-row'])}>
								<form className={cn([cl.signUpInformationModal, 'd-flex', 'flex-column'])}>
									<div className={cn([cl.signUpInformationModalBlock1, 'd-flex', 'flex-column'])}>
										<h3 className="mb-0">{title}</h3>
										<p className="mb-0">{description}</p>
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
												{btn}
											</Button>
										</div>
										<p className={cn([cl.policy, 'd-none', 'd-sm-flex', 'flex-column', 'mb-0'])}>
											{policyText}
											<Link to="/privacy-policy" className={cl.link}>
												{policyLink}
											</Link>
										</p>
									</div>
								</form>
								<img src={image} alt="mechanic" />
							</div>
						</div>
					</div>

					{isOpen && (
						<div className={cn([cl.modal, 'd-flex', 'flex-column', 'd-sm-none'])} onClick={() => setIsOpen(!isOpen)}>
							<div className={cn([cl.modalWrapper, 'd-flex', 'justify-content-center', 'align-items-center'])}>
								<form
									className={cn([cl.modalWrapperContent, 'd-flex', 'flex-column'])}
									onClick={(e) => e.stopPropagation()}
								>
									{/* <div className="d-flex align-items-center justify-content-between"> */}
									<div
										className={cn([
											cl.modalWrapperContentHeader,
											'd-flex',
											'align-items-center',
											'justify-content-between'
										])}
									>
										<div className={cl.modalWrapperContentHeaderTitle}>{titleMobile}</div>
										<img src={close} alt="иконка" onClick={() => setIsOpen(!isOpen)} />
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
												{btn}
											</Button>
										</div>
										<p className={cn([cl.policy, 'd-flex', 'flex-column', 'd-sm-none', 'mb-0'])}>
											{policyText}
											<Link to="/privacy-policy" className={cl.link}>
												{policyLink}
											</Link>
										</p>
									</div>
								</form>
							</div>
						</div>
					)}
				</>
			))}
		</>
	)
}

export default BodyRepair
