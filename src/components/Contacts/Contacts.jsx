import React from 'react';

import cn from 'classnames';
import cl from './Contacts.module.scss';
import {Button} from "@consta/uikit/Button";
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';

export default function Contacts (){
    const map = {
        center: [54.750221623442954, 56.01457826856809],
        zoom: 17,
        controls: ['zoomControl', 'fullscreenControl']
    }

    return (
        <section className={cl.contactsWrap}>
                <div className='container'>
                    <div className={cn([cl.contacts, 'd-flex flex-column-reverse flex-lg-row align-items-lg-center justify-content-lg-center'])}>
                        <YMaps>
                            <Map defaultState={map}
                                 modules={['control.ZoomControl', 'control.FullscreenControl']}
                                 className={cn([cl.contactsMap, 'flex-grow-1'])}
                                 options={{autoFitToViewport: 'always'}}
                            >
                                <Placemark
                                    geometry={[54.750221623442954, 56.01457826856809]}
                                    options={{
                                        iconLayout: 'default#image',
                                        // iconImageHref: point,
                                        // iconImageSize: [94, 94],
                                        // iconImageOffset: [-47, -80]
                                    }}
                                />
                            </Map>
                        </YMaps>
                        <div className='flex-grow-1 d-flex'>
                            <div className={cn([cl.contactsText, 'd-flex flex-column'])}>
                                <h2 className={cn([cl.contactsHeader, 'mb-0'])}>Контакты</h2>
                                <div className={cn([cl.contactsContact, 'd-flex flex-column'])}>
                                    <a href="tel:+73471234567"><p className='mb-0'>+7 (347) 123-45-67</p></a>
                                    <p className='mb-0'>Уфа, ул. Первая, д.14 </p>
                                </div>
                                <Button label='Оставить заявку на бронирование' width='full' size='l' className='d-none d-sm-block'/>
                                <Button label='Оставить заявку на бронирование' width='full' size='s' className='d-sm-none'/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}
