import alfa from '@assets/img/banks/alfa.png'
import autofinance from '@assets/img/banks/autofinance.png'
import driveclick from '@assets/img/banks/driveclick.png'
import ekspobank from '@assets/img/banks/ekspobank.png'
import evropabank from '@assets/img/banks/evropabank.png'
import fastbank from '@assets/img/banks/fastbank.png'
import lokobank from '@assets/img/banks/lokobank.png'
import otkrytie from '@assets/img/banks/otkrytie.png'
import otpbank from '@assets/img/banks/otpbank.png'
import rosbank from '@assets/img/banks/rosbank.png'
import sovkombank from '@assets/img/banks/sovkombank.png'
import tinkoff from '@assets/img/banks/tinkoff.png'
import uralsib from '@assets/img/banks/uralsib.png'
import vtb from '@assets/img/banks/vtb.png'
import cn from 'classnames'
import React from 'react'

import cl from './banks.module.scss'

const Banks = ({ title, banksList }) => {

	return (
		<div className={cl.banks}>
			<div className="container">
				<div className={cn([cl.banksWrapper, 'd-flex', 'flex-column'])}>
					<h2 className={cn([cl.banksWrapperTitle, 'mb-0'])}>{title}</h2>
					<div className={cn([cl.banksWrapperCards, 'd-grid'])}>
						{banksList.map(({ id, image }) => (
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

export default Banks
