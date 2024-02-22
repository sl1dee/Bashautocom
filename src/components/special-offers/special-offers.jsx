import cn from 'classnames'
import React from 'react'

import Button from '../../ui/button/button.jsx'
import cl from './special-offers.module.scss'

const SpecialOffers = () => {
	return (
		<div className={cl.specialOffers}>
			<div className="container-fluid p-0">
				<div className={cn([cl.specialOffersInformation, 'd-flex', 'flex-column'])}>
					<h1 className={cn(['mb-0'])}>Специальные предложения</h1>
					<div className="d-flex flex-column gap-4">
						<div className="d-flex justify-content-between align-items-center">
							<div className="d-flex">
								<Button sizeStyle="sizeL">Все</Button>
								<Button sizeStyle="sizeL" colorStyle="Outlined">
									Продажа
								</Button>
								<Button sizeStyle="sizeL" colorStyle="Outlined">
									Сервис
								</Button>
								<Button sizeStyle="sizeL" colorStyle="Outlined">
									Детейлинг
								</Button>
							</div>
							<div>selector</div>
						</div>
						<div>slider</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SpecialOffers
