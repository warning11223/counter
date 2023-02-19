import React from 'react';

import s from './HeaderCounter.module.css'

type PropsType = {
    number: number
    maxValue: number
    minValue: number
    info: string
    error: boolean
}

const HeaderCounter: React.FC<PropsType> = ({
                                                number,
                                                maxValue,
                                                info,
                                                minValue,
                                                error}) => {
    return (
        <>
            {error && <span className={s.incorrect}>Incorrect value</span>}
            {info && !error && maxValue >= 0 && minValue >= 0 && <span className={s.info}>{info}</span>}
            {maxValue >= 0 && minValue >= 0 && !info && <span className={`${number === maxValue ? s.red : ''}`}>{number}</span>}
        </>
    );
};

export default HeaderCounter;
