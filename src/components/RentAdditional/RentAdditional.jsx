import React from 'react';

import cn from 'classnames';
import cl from './RentAdditional.module.scss';

export default function RentAdditional () {
    const rentAdditionalList = [
        {
            image: '/assets/img/rent-car/rentAdditional/1.webp',
            name: 'Детское кресло',
            description: 'Для безопасной поездки с маленькими пассажирами'
        },
        {
            image: '/assets/img/rent-car/rentAdditional/2.webp',
            name: 'Багажник на крышу',
            description: 'Дополнительное место для багажа или спортивного снаряжения'
        },
        {
            image: '/assets/img/rent-car/rentAdditional/3.webp',
            name: 'Антирадар',
            description: 'Помогает избежать штрафы за превышение скорости'
        },
        {
            image: '/assets/img/rent-car/rentAdditional/4.webp',
            name: 'Видеорегистратор',
            description: 'Для безопасности и защиты в случае  спорных ситуаций на дороге'
        },
    ]
    return (
        <section className={cl.rentAdditionalWrap}>
                <div className={cl.rentAdditional}>
                    <div className='d-flex flex-column container'>
                        <h2 className={cn([cl.rentAdditionalHeader, 'mb-0'])}>Дополнительные услуги</h2>
                        <div className={cn([cl.rentAdditionalGrid, 'd-grid'])}>
                            {
                                rentAdditionalList.map(({ image, name, description}, index) => (
                                    <section className={cn([cl.rentAdditionalGridEl, 'd-flex', 'flex-sm-column', 'align-items-center', 'h-100', 'w-100'])} key={index}>
                                        <img className={cl.image} src={image} alt=""/>
                                        <div className={cn([cl.text, 'd-flex', 'flex-column', 'justify-content-start'])}>
                                            <h3 className='text-sm-center text-start mb-0'>{name}</h3>
                                            <p className='text-sm-center text-start mb-0'>{description}</p>
                                        </div>
                                    </section>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
    )
}
