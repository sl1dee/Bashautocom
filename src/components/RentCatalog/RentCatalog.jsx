import React from 'react';

import cn from 'classnames';
import cl from './RentCatalog.module.scss';

export default function RentCatalog () {
    const rentCatalogLIst = [
        {
            image: '/assets/img/rent-car/rentCatalog/1.webp',
            name: 'LADA Granta',
            description: '2022, 89 л.с., 1.6 л.',
            gearbox: 'Автомат',
            gas: 'Бензин',
            price: 'от 2 000 ₽/сутки'
        },
        {
            image: '/assets/img/rent-car/rentCatalog/2.webp',
            name: 'Toyota RAV4',
            description: '2021, 197 л.с., 2.5 л.',
            gearbox: 'Автомат',
            gas: 'Бензин',
            price: 'от 6 000 ₽/сутки'
        },
        {
            image: '/assets/img/rent-car/rentCatalog/3.webp',
            name: 'Hyundai Solaris',
            description: '2021, 123 л.с., 1.6 л.',
            gearbox: 'Механика',
            gas: 'Пропан',
            price: 'от 2 000 ₽/сутки'
        },
        {
            image: '/assets/img/rent-car/rentCatalog/4.webp',
            name: 'LADA Granta',
            description: '2023, 89 л.с., 1.6 л.',
            gearbox: 'Механика',
            gas: 'Пропан',
            price: 'от 1 800 ₽/сутки'
        }
    ]

    return (
        <section className={cl.rentCatalog}>
            <div className={cn([cl.rentCatalogWrapper, 'd-flex', 'flex-column', 'container'])}>
                <h2 className={cn([cl.rentCatalogWrapperTitle, 'mb-0'])}>Автомобили в аренду</h2>
                <div className={cn([cl.rentCatalogWrapperCards, 'd-grid'])}>
                    {
                        rentCatalogLIst.map(({ id, image, name, description, gearbox, gas, price }, index) => (
                            <section className={cn([cl.rentCatalogWrapperCardsCard, 'd-flex', 'flex-column', 'w-100', 'h-100'])} key={index}>
                                <img src={image} alt="" />
                                <div className={cn([cl.information, 'd-flex', 'flex-grow-1', 'flex-column', 'justify-content-between'])}>
                                    <div className={cn([cl.chars, 'd-flex', 'flex-column'])}>
                                        <div className={cn([cl.firstBlock, 'd-flex', 'flex-column'])}>
                                            <h5 className={cn([cl.name, 'mb-0'])}>{name}</h5>
                                            <div className={cl.description}>{description}</div>
                                        </div>
                                        <div className={cn([cl.secondBlock, 'd-none', 'd-sm-flex', 'flex-column'])}>
                                            <div className={cn(['d-flex'])}>
                                                <div className={cn([cl.gearbox, 'd-flex', 'align-items-center'])}>{gearbox}</div>
                                                <div className={cn([cl.gas, 'd-flex', 'align-items-center'])}>{gas}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className={cn([cl.price, 'mb-0'])}>{price}</p>
                                </div>
                            </section>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}