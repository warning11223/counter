import React, {useState} from 'react';

import ButtonCounter from '../ButtonCounter/ButtonCounter';

import s from './SettingsCounter.module.css'
import InputCounter from '../InputCounter/InputCounter';

type PropsType = {
    maxValue: number
    minValue: number
    setMaxValue: (num: number) => void
    setMinValue: (num: number) => void
    setInfo: (value: string) => void
    setError: (value: boolean) => void
    setCounter: (num: number) => void
    error: boolean
    visibleSettings: boolean
    setVisibleSettings: (value: boolean) => void
}

const SettingsCounter: React.FC<PropsType> = (
    {
        maxValue,
        setMaxValue,
        setMinValue,
        minValue,
        setInfo,
        setCounter,
        setError,
        error,
        visibleSettings,
        setVisibleSettings
    }) => {
    const [disabled, setDisabled] = useState(true)

    const onClickHandler = () => {
        setDisabled(true)
        setInfo('')
        setCounter(minValue)
        setVisibleSettings(false)
    }
    const maxValueHandler = (inputValue: string) => {
        if (+inputValue === minValue || +inputValue < minValue || +inputValue < 0) {
            setError(true)
            setDisabled(true)
        } else {
            setDisabled(false)
            setError(false)
        }

        setInfo('Enter values and press "set"')

        const value = Number(inputValue)

        setMaxValue(value)
    }
    const minValueHandler = (inputValue: string) => {
        if (+inputValue === maxValue || +inputValue > maxValue || +inputValue < 0) {
            setError(true)
            setDisabled(true)
        } else {
            setDisabled(false)
            setError(false)
        }
        setInfo('Enter values and press "set"')

        const value = Number(inputValue)

        setMinValue(value)
    }

    return (
        <div className={`${s.settingsContainer}`} style={{display: `${visibleSettings ? 'flex' : 'none'}`}}>
            <div className={s.settingWrapperInner}>
                <div className={s.settingsTop}>
                    <div className={s.maxValueDiv}>
                        <span className={s.settingsSpan}>max value:</span>
                        <InputCounter error={error} value={maxValue} onChange={maxValueHandler}/>
                    </div>
                    <div className={s.startValueDiv}>
                        <span className={s.settingsSpan}>start value:</span>
                        <InputCounter error={error} value={minValue} onChange={minValueHandler}/>
                    </div>
                </div>
                <div className={s.settingsBottom}>
                    <ButtonCounter
                        disabled={disabled || minValue < 0 || maxValue < 0 || error}
                        callback={onClickHandler}
                    >set</ButtonCounter>
                </div>
            </div>
        </div>
    );
};

export default SettingsCounter;
