import kasko from '@assets/img/insurance/kasko.png'
import osago from '@assets/img/insurance/osago.png'
import prolongation from '@assets/img/insurance/prolongation.png'
import cn from 'classnames'
import React from 'react'

import Button from '@ui/button/index.js'

import cl from './types-of-insurance.module.scss'

const TypesOfInsurance = ({ typesList }) => {

	return (
		<div className={cl.types}>
			<div className="container">
				<div className={cn([cl.typesWrapper, 'd-flex', 'flex-column'])}>
					<h2 className={cn([cl.typesWrapperTitle])}>Виды страхования</h2>
					<div className={cn([cl.typesWrapperCards, 'd-grid'])}>
						{typesList.map(({ id, image, title, description, button, buttonMobile }) => (
							<div
								className={cn([
									cl.typesWrapperCardsCard,
									'd-flex',
									'flex-column',
									'flex-sm-row-reverse',
									'flex-lg-column',
									'justify-content-center',
									'align-items-center'
								])}
								key={id}
							>
								<img className={cl.image} src={image} alt="" />
								<div className={cn([cl.group, 'd-flex', 'flex-column', 'justify-content-between'])}>
									<div className={cn([cl.groupText, 'd-flex', 'flex-column'])}>
										<div className={cn(cl.groupTextTitle)}>{title}</div>
										<div className={cn(cl.groupTextDescription)}>{description}</div>
									</div>
									<Button className={cn([cl.btn, 'd-none', 'd-xxl-flex'])} sizeStyle="sizeS">
										{button}
									</Button>
									<Button className={cn([cl.btn, 'd-flex', 'd-xxl-none'])} sizeStyle="sizeS">
										{buttonMobile}
									</Button>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default TypesOfInsurance
