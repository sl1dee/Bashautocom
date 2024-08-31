import cn from 'classnames'
import React from 'react'

import cl from './LogoGrid.module.scss'

const LogoGrid = ({ title, logos }) => {

	return (
		<div className={cl.banks}>
			<div className="container">
				<div className={cn([cl.banksWrapper, 'd-flex', 'flex-column'])}>
					<h2 className={cn([cl.banksWrapperTitle, 'mb-0'])}>{title}</h2>
					<div className={cn([cl.banksWrapperCards, 'd-grid'])}>
						{logos.map(({ id, image }) => (
							<div
								className={cn([cl.banksWrapperCardsCard, 'd-flex', 'align-items-center', 'justify-content-center'])}
								key={id}
							>
								<img className={cl.image} src={image} alt="" />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default LogoGrid
