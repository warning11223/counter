import React, {ChangeEvent} from 'react';

import s from './InputCounter.module.css'

type PropsType = {
    value: number
    onChange: (value: string) => void
    error: boolean
}

const InputCounter: React.FC<PropsType> = ({value, onChange, error}) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        onChange(value)
    }

    return (
        <input className={`${s.settingsInput} ${value < 0 && s.settingsInputError} ${error && s.settingsInputError}`} type="number" value={value} onChange={onChangeHandler}/>
    );
};

export default InputCounter;
