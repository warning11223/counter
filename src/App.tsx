import React from 'react';
import './App.css';
import Counter from './Counter/Counter/Counter';
import SecondTask from './SecondTask/SecondTask';
import CounterContainer from './Counter/Counter/CounterContainer';

function App() {
    return (
        <div className="App">
            <CounterContainer />
            {/*<SecondTask />*/}
        </div>
    );
}

export default App;
