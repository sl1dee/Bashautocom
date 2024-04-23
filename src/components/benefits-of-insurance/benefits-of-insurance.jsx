import check from '@assets/img/insurance/check.svg'
import service from '@assets/img/insurance/service.svg'
import shield from '@assets/img/insurance/shield.svg'
import time from '@assets/img/insurance/time.svg'
import cn from 'classnames'

import Button from '@ui/button/index.js'

import cl from './benefits-of-insurance.module.scss'

const BenefitsOfInsurance = ({ benefitsList }) => {

	return (
		<div className={cl.benefits}>
			<div className="container">
				<div
					className={cn([
						cl.benefitsWrapper,
						'd-flex',
						'flex-column',
						'flex-lg-row',
						'align-items-center',
						'justify-content-center'
					])}
				>
					<div className={cn([cl.benefitsWrapperDescription, 'd-flex', 'flex-column'])}>
						<h1 className={cn([cl.benefitsWrapperDescriptionTitle, 'mb-0'])}>Преимущества страхования в Башавтоком</h1>
						<div className={cn([cl.benefitsWrapperDescriptionText])}>
							Автострахование – это надежный способ защиты автомобиля от различных неприятностей. Если вы приобретаете
							автомобиль в кредит, банки обычно требуют наличия полиса КАСКО на весь срок кредитования и применяют
							строгие санкции за непродление страхового договора.{' '}
						</div>
						<Button className={cn([cl.btn])} sizeStyle="sizeS">
							Оставить заявку на страхование
						</Button>
					</div>
					<div className={cn([cl.benefitsWrapperCards, 'd-grid'])}>
						{benefitsList.map(({ id, icon, title, text }) => (
							<div key={id} className={cn([cl.benefitsWrapperCardsCard, 'd-flex', 'flex-column'])}>
								<div className={cn([cl.group, 'd-flex', 'flex-row', 'flex-sm-column', 'align-items-center'])}>
									<img src={icon} alt="" className={cl.image} />
									<div className={cl.title}>{title}</div>
								</div>
								<div className={cl.text}>{text}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default BenefitsOfInsurance
