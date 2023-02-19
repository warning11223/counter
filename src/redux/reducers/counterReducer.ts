
export type ActionsCounterType = SetMaxValueACType | SetMinValueACType | SetCounterType | SetInfoType | SetErrorType | SetSettingsType | IncrementCounterType | DecrementCounterType

export type InitialCounterStateType = {
    maxValue: number
    minValue: number
    counter: number
    info: string
    error: boolean
    visibleSettings: boolean
}

const initialState: InitialCounterStateType = {
    maxValue: 5,
    minValue: 0,
    counter: 0,
    info: '',
    error: false,
    visibleSettings: false
}

export const counterReducer = (state = initialState, action: ActionsCounterType): InitialCounterStateType => {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return {...state, counter: state.counter + 1};
        case 'DECREMENT_COUNTER':
            return {...state, counter: action.payload.value};
        case 'SET_SETTINGS':
            return {...state, visibleSettings: action.payload.value};
        case 'SET_COUNTER':
            return {...state, counter: action.payload.value};
        case 'SET_INFO':
            return {...state, info: action.payload.info};
        case 'SET_ERROR':
            return {...state, error: action.payload.error};
        case 'SET_MAX_VALUE':
            return {...state, maxValue: action.payload.maxValue};
        case 'SET_MIN_VALUE':
            return {...state, minValue: action.payload.minValue}
        default:
            return state;
    }
}

export type SetMaxValueACType = ReturnType<typeof setMaxValueAC>;
export type SetMinValueACType = ReturnType<typeof setMinValueAC>;
export type SetCounterType = ReturnType<typeof setCounterAC>;
export type SetInfoType = ReturnType<typeof setInfoAC>;
export type SetErrorType = ReturnType<typeof setErrorAC>;
export type SetSettingsType = ReturnType<typeof setSettingsAC>;
export type IncrementCounterType = ReturnType<typeof incrementCounterAC>;
export type DecrementCounterType = ReturnType<typeof decrementCounterAC>;

export const setMaxValueAC = (maxValue: number) => ({
    type: 'SET_MAX_VALUE', payload: { maxValue }
} as const);

export const setMinValueAC = (minValue: number) => ({
    type: 'SET_MIN_VALUE', payload: { minValue }
} as const)

export const setCounterAC = (value: number) => ({
    type: 'SET_COUNTER', payload: { value }
} as const)

export const setInfoAC = (info: string) => ({
    type: 'SET_INFO', payload: { info }
} as const)

export const setErrorAC = (error: boolean) => ({
    type: 'SET_ERROR', payload: { error }
} as const)

export const setSettingsAC = (value: boolean) => ({
    type: 'SET_SETTINGS', payload: { value }
} as const)

export const incrementCounterAC = () => ({
    type: 'INCREMENT_COUNTER'
} as const)

export const decrementCounterAC = (value: number) => ({
    type: 'DECREMENT_COUNTER', payload: { value }
} as const)
