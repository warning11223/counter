import React from 'react';

import HeaderCounter from '../HeaderCounter/HeaderCounter';
import ButtonCounter from '../ButtonCounter/ButtonCounter';
import SettingsCounter from '../SettingsCounter/SettingsCounter';

import s from './Counter.module.css'
import {InitialCounterStateType} from '../../redux/reducers/counterReducer';

type CounterProps = {
    state: InitialCounterStateType
    setMaxValue: (maxValue: number) => void
    setMinValue: (minValue: number) => void
    setCounter: (value: number) => void
    setInfo: (info: string) => void
    setError: (error: boolean) => void
    setVisibleSettings: (value: boolean) => void
    incrementCounter: () => void
    decrementCounter: (value: number) => void
}

const Counter: React.FC<CounterProps> = ({
                                             state,
                                             setMinValue,
                                             setVisibleSettings,
                                             setCounter,
                                             setError,
                                             setMaxValue,
                                             setInfo,
                                             incrementCounter,
                                             decrementCounter
                                         }) => {
    /*useEffect(() => {
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
        localStorage.setItem('maxValue', JSON.stringify(state.maxValue))
        localStorage.setItem('startValue', JSON.stringify(state.minValue))
    }, [state.maxValue, state.minValue]);*/

    const incrementBtn = () => {
        incrementCounter();
    }
    const decrementBtn = () => {
        decrementCounter(state.minValue);
    }
    const setHandler = () => {
        setVisibleSettings(true);
    }

    return (
        <div className={s.container}>
            <SettingsCounter
                maxValue={state.maxValue}
                minValue={state.minValue}
                setMaxValue={setMaxValue}
                setMinValue={setMinValue}
                setInfo={setInfo}
                setError={setError}
                setCounter={setCounter}
                error={state.error}
                visibleSettings={state.visibleSettings}
                setVisibleSettings={setVisibleSettings}
            />

            <div className={s.counterContainer} style={{display: `${state.visibleSettings ? 'none' : 'flex'}`}}>
                <div className={s.headerCounter}>
                    <HeaderCounter
                        info={state.info}
                        minValue={state.minValue}
                        maxValue={state.maxValue}
                        number={state.counter}
                        error={state.error}
                    />
                </div>
                <div className={s.btnContainer}>
                    <ButtonCounter
                        maxValue={state.maxValue}
                        minValue={state.minValue}
                        counter={state.counter}
                        callback={incrementBtn}
                        info={state.info}
                    >inc</ButtonCounter>
                    <ButtonCounter
                        counter={state.counter}
                        callback={decrementBtn}
                        minValue={state.minValue}
                        maxValue={state.maxValue}
                        info={state.info}
                    >reset</ButtonCounter>
                    <ButtonCounter callback={setHandler}>set</ButtonCounter>
                </div>
            </div>
        </div>
    );
};

export default Counter;
