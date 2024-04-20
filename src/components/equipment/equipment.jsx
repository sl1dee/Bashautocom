import arrDown from '@assets/img/used-car/arrow-down.svg'
import arrUp from '@assets/img/used-car/arrow-up.svg'
import cn from 'classnames'
import React, { useState } from 'react'

import cl from './equipment.module.scss'

const Equipment = ({ title, description }) => {
	const [equipmentOpen, setEquipmentOpen] = useState(false)

	return (
		<div className={cl.equipment}>
			<div
				onClick={() => setEquipmentOpen((prev) => !prev)}
				className={cn([cl.equipmentTitle, 'd-flex', 'align-items-center', 'justify-content-between'])}
			>
				{title} {equipmentOpen ? <img src={arrUp} alt="" /> : <img src={arrDown} alt="" />}
			</div>
			{equipmentOpen && <div className={cn([cl.equipmentDesc])}>{description}</div>}
		</div>

		// <div className="accordion accordion-flush" id="accordionFlushExample">
		// 	<div className="accordion-item">
		// 		<h2 className="accordion-header" id="flush-headingOne">
		// 			<button
		// 				className="accordion-button collapsed"
		// 				type="button"
		// 				data-bs-toggle="collapse"
		// 				data-bs-target="#flush-collapseOne"
		// 				aria-expanded="false"
		// 				aria-controls="flush-collapseOne"
		// 			>
		// 				{title}
		// 			</button>
		// 		</h2>
		// 		<div
		// 			id="flush-collapseOne"
		// 			className="accordion-collapse collapse"
		// 			aria-labelledby="flush-headingOne"
		// 			data-bs-parent="#accordionFlushExample"
		// 		>
		// 			<div className="accordion-body">{description}</div>
		// 		</div>
		// 	</div>
		// </div>
	)
}

export default Equipment
