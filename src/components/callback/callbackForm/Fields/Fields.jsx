import React from 'react'
import Text from "./Text/Text";
import Phone from "./Phone/Phone";
import Select from "./Select/Select";
import DateRange from "./DateRange/DateRange";

const Fields = ({fieldData, value, setValue, size}) => {

    switch (fieldData.type){
        case 'text': {
            return (
                <Text label={fieldData?.label} placeholder={fieldData?.placeholder} value={value} setValue={setValue} name={fieldData.name} caption={fieldData.caption} status={fieldData.status} size={size}/>
            )
        }
        case 'phone': {
            return (
                <Phone label={fieldData?.label} placeholder={fieldData?.placeholder} value={value} setValue={setValue} name={fieldData.name} caption={fieldData.caption} status={fieldData.status} size={size}/>
            )
        }
        case 'select': {
            return (
                <Select label={fieldData?.label} placeholder={fieldData?.placeholder} value={value} setValue={setValue} name={fieldData.name} caption={fieldData.caption} status={fieldData.status} items={fieldData.values} size={size}/>
            )
        }
        case 'dateRange': {
            return (
                <DateRange labelFrom={fieldData?.labelFrom} labelTo={fieldData?.labelTo} enterValue={value} setValue={setValue} name={fieldData.name} caption={fieldData.caption} status={fieldData.status} items={fieldData.values} size={size}/>
            )
        }
    }

}

export default Fields;
