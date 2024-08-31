import React from 'react'
import {Select} from "@consta/uikit/Select";

const SelectInput = ({label, placeholder, items, value, setValue, name, caption, status, size}) => {
    return (
        <Select items={items}
                label={label}
                placeholder={placeholder}
                value={value}
                size={size ?? 'l'}
                caption={caption}
                status={status}
                onChange={(newValue) => setValue({name: name, value: newValue})}/>
    );
}

export default SelectInput;
