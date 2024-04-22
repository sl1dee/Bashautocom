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
	// const banksList = [
	// 	{
	// 		id: 0,
	// 		image: tinkoff
	// 	},
	// 	{
	// 		id: 1,
	// 		image: alfa
	// 	},
	// 	{
	// 		id: 2,
	// 		image: vtb
	// 	},
	// 	{
	// 		id: 3,
	// 		image: rosbank
	// 	},
	// 	{
	// 		id: 4,
	// 		image: uralsib
	// 	},
	// 	{
	// 		id: 5,
	// 		image: sovkombank
	// 	},
	// 	{
	// 		id: 6,
	// 		image: otkrytie
	// 	},
	// 	{
	// 		id: 7,
	// 		image: evropabank
	// 	},
	// 	{
	// 		id: 8,
	// 		image: otpbank
	// 	},
	// 	{
	// 		id: 9,
	// 		image: autofinance
	// 	},
	// 	{
	// 		id: 10,
	// 		image: fastbank
	// 	},
	// 	{
	// 		id: 11,
	// 		image: driveclick
	// 	},
	// 	{
	// 		id: 12,
	// 		image: lokobank
	// 	},
	// 	{
	// 		id: 13,
	// 		image: ekspobank
	// 	}
	// ]

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
