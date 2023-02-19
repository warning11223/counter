import React from 'react';

import s from './ButtonCounter.module.css'

type PropsType = {
    callback: () => void
    counter?: number
    children: React.ReactNode
    maxValue?: number
    minValue?: number
    disabled?: boolean
    info?: string
}

const ModuleCounter: React.FC<PropsType> = (
    {
        callback, children, counter,
        minValue,
        maxValue,
        disabled,
        info
    }) => {
    const onClickHandler = () => {
        callback()
    }

    return (
        <button
            disabled={counter === minValue && children === 'reset' ? true
                        : counter === maxValue && children === 'inc' ? true
                        : disabled ? true
                        : info ? true
                        : false}
            onClick={onClickHandler}
            className={s.btn}
        >{children}</button>
    );
};

export default ModuleCounter;
