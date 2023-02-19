import React, {useEffect, useState} from 'react';

import HeaderCounter from '../HeaderCounter/HeaderCounter';
import ButtonCounter from '../ButtonCounter/ButtonCounter';
import SettingsCounter from '../SettingsCounter/SettingsCounter';

import s from './Counter.module.css'

const Counter = () => {
    const [maxValue, setMaxValue] = useState(4)
    const [minValue, setMinValue] = useState(0)
    const [counter, setCounter] = useState(0)
    const [info, setInfo] = useState('')
    const [error, setError] = useState(false)
    const [visibleSettings, setVisibleSettings] = useState(false)

    useEffect(() => {
        const max = localStorage.getItem('maxValue');
        const start = localStorage.getItem('startValue');

        if (max && start) {
            const newMax = JSON.parse(max);
            const newStart = JSON.parse(start);
            setMaxValue(newMax);
            setMinValue(newStart);
            setCounter(newStart);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(minValue))
    }, [maxValue, minValue]);

    const incrementBtn = () => {
        setCounter(counter => counter + 1)
    }
    const decrementBtn = () => {
        setCounter(minValue)
    }
    const setHandler = () => {
        setVisibleSettings(true)
    }

    return (
        <div className={s.container}>
            <SettingsCounter
                maxValue={maxValue}
                minValue={minValue}
                setMaxValue={setMaxValue}
                setMinValue={setMinValue}
                setInfo={setInfo}
                setError={setError}
                setCounter={setCounter}
                error={error}
                visibleSettings={visibleSettings}
                setVisibleSettings={setVisibleSettings}
            />

            <div className={s.counterContainer} style={{display: `${visibleSettings ? 'none' : 'flex'}`}}>
                <div className={s.headerCounter}>
                    <HeaderCounter
                        info={info}
                        minValue={minValue}
                        maxValue={maxValue}
                        number={counter}
                        error={error}
                    />
                </div>
                <div className={s.btnContainer}>
                    <ButtonCounter
                        maxValue={maxValue}
                        minValue={minValue}
                        counter={counter}
                        callback={incrementBtn}
                        info={info}
                    >inc</ButtonCounter>
                    <ButtonCounter
                        counter={counter}
                        callback={decrementBtn}
                        minValue={minValue}
                        maxValue={maxValue}
                        info={info}
                    >reset</ButtonCounter>
                    <ButtonCounter callback={setHandler}>set</ButtonCounter>
                </div>
            </div>
        </div>
    );
};

export default Counter;
