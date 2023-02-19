import {combineReducers, createStore} from 'redux';
import {counterReducer} from './reducers/counterReducer';
import {loadState, saveState} from '../Counter/localStorage';

const rootReducer = combineReducers({
    counterReducer,
})
const persistedState = loadState('value');

export const store = createStore(rootReducer, persistedState);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

store.subscribe(() => {
    saveState({ counterReducer: {
            maxValue: store.getState().counterReducer.maxValue,
            minValue: store.getState().counterReducer.minValue,
            counter: store.getState().counterReducer.counter,
            info: store.getState().counterReducer.info,
            error: store.getState().counterReducer.error,
            visibleSettings: store.getState().counterReducer.visibleSettings,
        }
    }, 'value');
});
