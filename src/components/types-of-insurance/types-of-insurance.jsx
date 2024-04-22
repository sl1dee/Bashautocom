import cn from 'classnames'
import React from 'react'

import Button from '@ui/button/index.js'

import cl from './types-of-insurance.module.scss'

const TypesOfInsurance = () => {
	return (
		<div className={cl.types}>
			<div className="container">
				<div className={cn([cl.typesWrapper])}>
					<h2 className={cn([cl.typesWrapperTitle])}>Виды страхования</h2>
					<div className={cn([cl.typesWrapperCards])}>
						<div className={cn([cl.typesWrapperCardsCard])}>
							<img className={cl.image} src="" alt="" />
							<div className={cn(cl.group)}>
								<div className={cn(cl.groupTitle)}>тайтл</div>
								<div className={cn(cl.groupText)}>текст</div>
								<Button className={cl.btn}>Оставить заявку на страхование</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TypesOfInsurance
