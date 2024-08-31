import React from 'react'
import {TextField} from "@consta/uikit/TextField";

const Text = ({label, placeholder, value, setValue, name, caption, status, size}) => {
    return (
        <TextField label={label} placeholder={placeholder} size={size ?? 'l'} value={value} onChange={(newValue) => {setValue({name: name, value: newValue})}} caption={caption} status={status}/>
    )
}

export default Text;
