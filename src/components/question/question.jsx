import car from '@assets/img/question/car.png'
import tg from '@assets/img/question/tg.svg'
import vk from '@assets/img/question/vk.svg'
import wa from '@assets/img/question/wa.svg'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'
import { Combobox } from '@consta/uikit/Combobox'
import cn from 'classnames'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import getRawPhoneFromParsedPhone from '@helpers/getRawPhoneFromParsedPhone.js'
import parseRawPhone from '@helpers/parseRawPhone.js'

import { Button } from '@consta/uikit/Button';
import cl from './question.module.scss'

const Question = ({ questionText, comboboxValues, items }) => {
	const [comboboxValue, setComboboxValue] = useState(null)

	const [value, setValue] = useState(items[0])

	const [viewPhone, setViewPhone] = useState('')
	const [phone, setPhone] = useState('')

	const changePhoneHandler = (event) => {
		const rawPhone = getRawPhoneFromParsedPhone(event.target.value, viewPhone)
		const newViewPhone = parseRawPhone(rawPhone)

		setViewPhone(newViewPhone)
		setPhone(rawPhone)
	}

	return (
		<>
			{questionText.map(
				({ question, description, descriptionMobile, socialNetworkText, policyText, policyLink, btn, btnMobile }) => (
					<div className={cl.question}>
						<div className="container">
							<div className={cn([cl.questionInformation, 'd-flex', 'flex-column', 'flex-lg-row'])}>
								<div className={cn([cl.questionInformationText, 'd-flex', 'flex-column'])}>
									<div className={cn([cl.yourQuestion, 'd-flex', 'flex-column'])}>
										<h1 className={cn([cl.title, 'mb-0'])}>{question}</h1>
										<p className={cn([cl.text, 'mb-0', 'd-none', 'd-sm-flex'])}>{description}</p>
										<p className={cn([cl.text, 'mb-0', 'd-xs-flex', 'd-sm-none'])}>{descriptionMobile}</p>
									</div>
									<div className={cn([cl.socialNetwork, 'd-none', 'd-sm-flex', 'flex-column'])}>
										<p className={cn([cl.secondTitle, 'mb-0'])}>{socialNetworkText}</p>
										<div className={cn([cl.btns, 'd-flex', 'mb-0'])}>
											<Link to="/" className={cn([cl.btn, 'd-flex', 'align-items-center'])}>
												<img src={vk} alt="" />
												<p className="mb-0">Вконтакте</p>
											</Link>
											<Link to="/" className={cn([cl.btn, 'd-flex', 'align-items-center'])}>
												<img src={wa} alt="" />
												<p className="mb-0">WhatsApp</p>
											</Link>
											<Link to="/" className={cn([cl.btn, 'd-flex', 'align-items-center'])}>
												<img src={tg} alt="" />
												<p className="mb-0">Telegram</p>
											</Link>
										</div>
									</div>
									<img src={car} alt="" className={cn([cl.image, 'd-none', 'd-lg-flex'])} />
								</div>
								<div className={cn([cl.btn, 'd-xs-flex', 'd-sm-none'])}>
									{/*<Button sizeStyle="sizeS" className={cl.button}>*/}
									{/*	{btnMobile}*/}
									{/*</Button>*/}
									<Button className={cn([cl.button, 'd-xs-flex', 'd-sm-none', 'justify-content-center', 'align-items-center'])} label={btnMobile} size='s'/>
								</div>
								<div className={cn([cl.questionInformationModal, 'd-none', 'd-sm-flex', 'flex-column'])}>
									<div className={cn([cl.questionInformationModalBlock1, 'd-flex', 'flex-column'])}>
										<h6 className={cn([cl.theme, 'mb-0'])}>Выберите тему вопроса</h6>
										<div className={cn([cl.tabs, 'd-none', 'd-lg-flex', 'mb-0'])}>
											<ChoiceGroup
												value={value}
												onChange={( value ) => setValue(value)}
												items={items}
												getItemLabel={(item) => item}
												form="default"
												size="l"
												view="primary"
												width="full"
												name="ChoiceGroupExampleForm"
												multiple={false}
											/>
										</div>
										<div className={cn([cl.tabs, 'd-none', 'd-sm-flex', 'd-lg-none', 'mb-0'])}>
											<ChoiceGroup
												value={value}
												onChange={( value ) => setValue(value)}
												items={items}
												getItemLabel={(item) => item}
												form="default"
												size="m"
												view="primary"
												width="full"
												name="ChoiceGroupExampleForm"
												multiple={false}
											/>
										</div>
									</div>
									<div className={cn([cl.questionInformationModalBlock2, 'd-flex', 'flex-column'])}>
										<input type="text" className={cl.input} name="name" placeholder="Имя" />
										<input
											className={cl.input}
											onChange={changePhoneHandler}
											value={viewPhone}
											type="text"
											size="16"
											placeholder="Телефон"
											required
										/>
										<input className={cl.input} name="phone" type="hidden" tabIndex={-1} readOnly value={phone} />
										<div className={cn([cl.combobox, 'd-none', 'd-lg-flex'])}>
											<Combobox
												placeholder="Выберите бренд"
												size="l"
												items={comboboxValues}
												value={comboboxValue}
												onChange={( value ) => setComboboxValue(value)}
												multiple
											/>
										</div>
										<div className={cn([cl.combobox, 'd-none', 'd-sm-flex', 'd-lg-none'])}>
											<Combobox
												placeholder="Выберите бренд"
												size="m"
												items={comboboxValues}
												value={comboboxValue}
												onChange={( value ) => setComboboxValue(value)}
												multiple
											/>
										</div>
									</div>
									<div className={cn([cl.questionInformationModalBlock3, 'd-flex', 'flex-column'])}>
										<div>
											{/*<Button sizeStyle="sizeContent" className={cl.btn}>*/}
											{/*	{btn}*/}
											{/*</Button>*/}
											<Button className={cn([cl.btn, 'd-none', 'd-lg-flex', 'justify-content-center', 'align-items-center'])} label={btn} size='l'/>
											<Button className={cn([cl.btn, 'd-none', 'd-sm-flex', 'd-lg-none', 'justify-content-center', 'align-items-center'])} label={btn} size='m'/>
										</div>
										<p className={cn([cl.policy, 'd-flex', 'flex-column', 'mb-0'])}>
											{policyText}
											<Link to="/privacy-policy" className={cl.link}>
												{policyLink}
											</Link>
										</p>
									</div>
								</div>
								<img src={car} alt="" className={cn([cl.image, 'd-flex', 'd-lg-none'])} />
							</div>
						</div>
					</div>
				)
			)}
		</>
	)
}

export default Question
