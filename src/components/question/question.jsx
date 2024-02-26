import car from '@assets/img/question/car.png'
import cn from 'classnames'
import React from 'react'

import Button from '../../ui/button/button.jsx'
import cl from './question.module.scss'

const Question = () => {
	return (
		<div className={cl.question}>
			<div className="container p-0">
				<div className={cn([cl.questionInformation, 'd-flex'])}>
					<div className={cn([cl.questionInformationText, 'd-flex', 'flex-column'])}>
						<div className={cn([cl.yourQuestion, 'd-flex', 'flex-column'])}>
							<h1 className={cn([cl.title, 'mb-0'])}>У вас возник вопрос?</h1>
							<p className={cn([cl.text, 'mb-0'])}>
								Задайте свой вопрос в форме, выбрав тему Покупка, Сервис или Услуги. Мы свяжемся с вами в течении дня,
								{/* eslint-disable-next-line no-irregular-whitespace */}
								ответим на все вопросы, запишем на тест-драйв, сервис или ремонт при необходимости.
							</p>
						</div>
						<div className={cn([cl.socialNetwork, 'd-flex', 'flex-column'])}>
							<p className={cn([cl.secondTitle, 'mb-0'])}>Или напишите нам в социальных сетях</p>
							<div className={cn([cl.btns, 'mb-0'])}>buttons</div>
						</div>
						<img src={car} alt="" />
					</div>
					<div className={cn([cl.questionInformationModal])}>
						<div>
							<h6>Выберите тему вопроса</h6>
							<div className="d-flex">
								<Button sizeStyle="sizeL">Покупка</Button>
								<Button sizeStyle="sizeL" colorStyle="Outlined">
									Сервис
								</Button>
								<Button sizeStyle="sizeL" colorStyle="Outlined">
									Услуги
								</Button>
							</div>
						</div>
						<div>
							<div>input</div>
							<div>input</div>
							<div>select</div>
						</div>
						<div>
							<div>
								<Button sizeStyle="sizeL">Отправить вопрос</Button>
							</div>
							<p>Нажимая на кнопку, вы соглашаетесь с Политикой конфиденциальности</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Question
