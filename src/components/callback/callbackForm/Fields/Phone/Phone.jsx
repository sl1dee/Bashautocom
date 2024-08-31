import React from 'react'
import {TextField} from "@consta/uikit/TextField";
import { useIMask } from 'react-imask';

const Phone = ({label, placeholder, value, setValue, name, caption, status, size}) => {

    const {ref} = useIMask({
        mask: '{0} (000) 000-00-00',
    }, {
        onAccept: (newValue) => setValue({name: name, value: newValue})
    });

    return (<TextField label={label} placeholder={placeholder} inputRef={ref} size={size ?? 'l'} caption={caption} status={status}/>)
}

export default Phone;
