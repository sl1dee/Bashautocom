import React from 'react'
import {DatePicker} from "@consta/uikit/DatePicker";
import cn from "classnames";
import cl from "./DateRange.module.scss";

const DateRange = ({labelFrom, labelTo, enterValue, setValue, name, caption, status, size}) => {
    return (
        <div className={cn([cl.DateRangeWrap, 'd-flex flex-column flex-sm-row'])}>
            <div>
                <DatePicker label={labelFrom}
                            value={enterValue?.from ?? null}
                            size={size ?? 'l'}
                            onChange={(newValue)=>{setValue({name: name, value:{from:newValue, to: enterValue?.to ?? null}})}}
                            caption={caption}
                            status={status}/>
            </div>
            <div>
                <DatePicker label={labelTo}
                            value={enterValue?.to ?? null}
                            size={size ?? 'l'}
                            onChange={(newValue)=>{setValue({name: name, value:{from:enterValue?.from ?? null, to: newValue}})}}
                            caption={caption}
                            status={status}/>
            </div>
        </div>
    )
}

export default DateRange;
