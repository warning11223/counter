import React from 'react';
import Counter from './Counter';
import {connect} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/store';
import {
    decrementCounterAC,
    incrementCounterAC,
    InitialCounterStateType,
    setCounterAC,
    setErrorAC,
    setInfoAC,
    setMaxValueAC,
    setMinValueAC,
    setSettingsAC
} from '../../redux/reducers/counterReducer';

type CounterContainerProps = {
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

const CounterContainer: React.FC<CounterContainerProps> = ({
                                                               state,
                                                               setMaxValue,
                                                               setMinValue,
                                                               setVisibleSettings,
                                                               setCounter,
                                                               setError,
                                                               setInfo,
                                                               incrementCounter,
                                                               decrementCounter
                                                           }) => {
    return <Counter
        state={state}
        setMaxValue={setMaxValue}
        setMinValue={setMinValue}
        setVisibleSettings={setVisibleSettings}
        setCounter={setCounter}
        setError={setError}
        setInfo={setInfo}
        incrementCounter={incrementCounter}
        decrementCounter={decrementCounter}
    />
};

const mapStateToProps = (state: RootState) => {
    return {
        state: state.counterReducer
    }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        setMaxValue: (maxValue: number) => dispatch(setMaxValueAC(maxValue)),
        setMinValue: (minValue: number) => dispatch(setMinValueAC(minValue)),
        setCounter: (value: number) => dispatch(setCounterAC(value)),
        setInfo: (info: string) => dispatch(setInfoAC(info)),
        setError: (error: boolean) => dispatch(setErrorAC(error)),
        setVisibleSettings: (value: boolean) => dispatch(setSettingsAC(value)),
        incrementCounter: () => dispatch(incrementCounterAC()),
        decrementCounter: (value: number) => dispatch(decrementCounterAC(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
