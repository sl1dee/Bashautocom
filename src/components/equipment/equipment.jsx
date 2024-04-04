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
	)
}

export default Equipment
