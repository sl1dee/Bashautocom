import React, {useState} from 'react';
import cn from "classnames";
import cl from "@components/used-cars/used-cars.module.scss";
import {Slider} from "@consta/uikit/Slider";
import {Select} from "@consta/uikit/Select";
import {CheckboxGroup} from "@consta/uikit/CheckboxGroup";
import {RadioGroup} from "@consta/uikit/RadioGroup";

const Filters = () => {

    // const [minPrice, setMinPrice] = useState(0);
    // const [maxPrice, setMaxPrice] = useState(1000000);
    // const [minMileage, setMinMileage] = useState(0);
    // const [maxMileage, setMaxMileage] = useState(100000);

    const [filterValues, setFilterValues] = useState({checkFilters: {}, rangeFilters: {}, dateFilters: {}, comboboxFilters: {}})

    const filters = [
        {
            alias: 'Price',
            label: 'Цена, руб',
            value1: 0,
            value2: 1000000
        },
        {
            alias: 'Mileage',
            label: 'Пробег, км',
            value1: 0,
            value2: 100000
        },
        {
            alias: 'Years',
            label: 'Год',
            value1: [
                {
                    label: '2017',
                    id: 1
                },
                {
                    label: '2016',
                    id: 2
                },
                {
                    label: '2015',
                    id: 3
                }
            ],
            value2: [
                {
                    label: '2023',
                    id: 1
                },
                {
                    label: '2022',
                    id: 2
                },
                {
                    label: '2021',
                    id: 3
                }
            ]
        },
        {
            alias: 'Brands',
            label: 'Марка',
            value: [
                { name: 'Audi' },
                { name: 'BAIC' },
                { name: 'BMW' },
                { name: 'Cadillac' },
                { name: 'Changan' },
                { name: 'Chery' }
            ]
        },
        {
            alias: 'Bodies',
            label: 'Кузов',
            value: [
                { name: 'Седан' },
                { name: 'Кроссовер' },
                { name: 'Хетчбэк' },
                { name: 'Внедорожник' },
                { name: 'Купе' },
                { name: 'Лифтбэк' },
                { name: 'Универсал' },
                { name: 'Пикап' }
            ]
        },
        {
            alias: 'Owners',
            label: 'Количество владельцев',
            value: ['Один владелец', 'Не более 2 владельцев', 'Не более 3 владельцев'
                // { name: 'Один владелец' },
                // { name: 'Не более 2 владельцев' },
                // { name: 'Не более 3 владельцев' }
            ]
        },
        {
            alias: 'Drivers',
            label: 'Привод',
            value: [
                { name: 'Любой' },
                { name: 'Передний' },
                { name: 'Задний' },
                { name: 'Полный' }
            ]
        },
        {
            alias: 'Gearboxes',
            label: 'Коробка',
            value: [
                { name: 'Автоматическая' },
                { name: 'Робот' },
                { name: 'Вариатор' },
                { name: 'Механическая' }
            ]
        }
    ]

    const handleSliderChange = (newPrice) => {
        setMinPrice(newPrice[0]);
        setMaxPrice(newPrice[1]);
    };

    const handleMinPriceChange = (e) => {
        let newMinPrice = parseInt(e.target.value);
        let newMaxPrice = maxPrice;
        if (!isNaN(newMinPrice)) {
            if (newMinPrice > newMaxPrice) {
                setMinPrice(newMaxPrice);
                setMaxPrice(newMinPrice);
            } else {
                setMinPrice(newMinPrice);
            }
        }
    };

    const handleMaxPriceChange = (e) => {
        let newMaxPrice = parseInt(e.target.value);
        let newMinPrice = minPrice;
        if (!isNaN(newMaxPrice)) {
            if (newMaxPrice < newMinPrice) {
                setMaxPrice(newMinPrice);
                setMinPrice(newMaxPrice);
            } else {
                setMaxPrice(newMaxPrice);
            }
        }
    };

    const handleSliderMileageChange = (newMileage) => {
        setMinMileage(newMileage[0]);
        setMaxMileage(newMileage[1]);
    };

    const handleMinMileageChange = (e) => {
        let newMinMileage = parseInt(e.target.value);
        let newMaxMileage = maxMileage;
        if (!isNaN(newMinMileage)) {
            if (newMinMileage > newMaxMileage) {
                setMinMileage(newMaxMileage);
                setMaxMileage(newMinMileage);
            } else {
                setMinMileage(newMinMileage);
            }
        }
    };

    const handleMaxMileageChange = (e) => {
        let newMaxMileage = parseInt(e.target.value);
        let newMinMileage = minMileage;
        if (!isNaN(newMaxMileage)) {
            if (newMaxMileage < newMinMileage) {
                setMaxMileage(newMinMileage);
                setMinMileage(newMaxMileage);
            } else {
                setMaxMileage(newMaxMileage);
            }
        }
    };

    return (
        <>
            {filters.map((filter) => {
                switch (filter.alias) {
                    case 'Price':
                        return (
                            <div className={cn([cl.block, 'd-flex', 'flex-column'])}>
                                <span>{filter.label}</span>
                                <div>
                                    <Slider
                                        min={0}
                                        max={10000000}
                                        step={5}
                                        range={true}
                                        value={[filter.value1, filter.value2]}
                                        onChange={({value}) => handleSliderChange(value)}
                                    />
                                </div>
                                <div className={cn([cl.inputs, 'd-flex', 'justify-content-between'])}>
                                    <input type="text" value={minPrice} onChange={handleMinPriceChange} placeholder="от" />
                                    <input type="text" value={maxPrice} onChange={handleMaxPriceChange} placeholder="до" />
                                </div>
                            </div>
                        )

                    case 'Mileage':
                        return (
                            <div className={cn([cl.block, 'd-flex', 'flex-column'])}>
                                <span>{filter.label}</span>
                                <div>
                                    <Slider
                                        min={0}
                                        max={200000}
                                        step={5}
                                        range={true}
                                        value={[minMileage, maxMileage]}
                                        onChange={({value}) => handleSliderMileageChange(value)}
                                    />
                                </div>
                                <div className={cn([cl.inputs, 'd-flex', 'justify-content-between'])}>
                                    <input type="text" value={minMileage} onChange={handleMinMileageChange} placeholder="от" />
                                    <input type="text" value={maxMileage} onChange={handleMaxMileageChange} placeholder="до" />
                                </div>
                            </div>
                        )
                    case 'Years':
                        return (
                            <div className={cn([cl.block, 'd-flex', 'flex-column'])}>
                                <span>{filter.label}</span>
                                <div className={cn([cl.selectors, 'd-flex'])}>
                                    <div className={cl.select}>
                                        <Select
                                            placeholder="от"
                                            items={filter.value1}
                                            value={yearFrom}
                                            onChange={({ value }) => setYearFrom(value)}
                                        />
                                    </div>
                                    <div className={cl.select}>
                                        <Select
                                            placeholder="до"
                                            items={filter.value2}
                                            value={yearBefore}
                                            onChange={({ value }) => setYearBefore(value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    case 'Brands':
                        return (
                            <div className={cn([cl.block, 'd-flex', 'flex-column'])}>
                                <span>Марка</span>
                                <div>
                                    <CheckboxGroup
                                        items={filter.value}
                                        value={brand}
                                        getItemLabel={(item) => item.name}
                                        getItemDisabled={(item) => item.disabled}
                                        onChange={({ value }) => setBrand(value)}
                                        name="CheckboxGroup"
                                    />
                                </div>
                            </div>
                        )
                    case 'Bodies':
                        return  (
                            <div className={cn([cl.block, 'd-flex', 'flex-column'])}>
                                <span>Кузов</span>
                                <div>
                                    <CheckboxGroup
                                        items={filter.value}
                                        value={body}
                                        getItemLabel={(item) => item.name}
                                        getItemDisabled={(item) => item.disabled}
                                        onChange={({ value }) => setBody(value)}
                                        name="CheckboxGroup"
                                    />
                                </div>
                            </div>
                        )
                    case 'Owners':
                        return (
                            <div className={cn([cl.block, 'd-flex', 'flex-column'])}>
                                <span>Количество владельцев</span>
                                <div>
                                    <RadioGroup
                                        items={filter.value}
                                        value={owner}
                                        getItemLabel={(item) => item}
                                        onChange={({ value }) => setOwner(value)}
                                        direction="column"
                                    />
                                </div>
                            </div>
                        )
                    case 'Drivers':
                        return (
                            <div className={cn([cl.block, 'd-flex', 'flex-column'])}>
                                <span>Привод</span>
                                <div>
                                    <CheckboxGroup
                                        items={filter.value}
                                        value={drive}
                                        getItemLabel={(item) => item.name}
                                        getItemDisabled={(item) => item.disabled}
                                        onChange={({ value }) => setDrive(value)}
                                        name="CheckboxGroup"
                                    />
                                </div>
                            </div>
                        )
                    case 'Gearboxes':
                        return (
                            <div className={cn([cl.block, 'd-flex', 'flex-column'])}>
                                <span>Коробка</span>
                                <div>
                                    <CheckboxGroup
                                        items={filter.value}
                                        value={gearbox}
                                        getItemLabel={(item) => item.name}
                                        getItemDisabled={(item) => item.disabled}
                                        onChange={({ value }) => setGearbox(value)}
                                        name="CheckboxGroup"
                                    />
                                </div>
                            </div>
                        )
                }
            })}
        </>
    );
};

export default Filters;