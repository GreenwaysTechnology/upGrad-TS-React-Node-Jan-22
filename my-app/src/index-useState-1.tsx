import produce from 'immer';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Counter = props => {
    const initalState = {
        values: {
            inc: 10
        }
    };
    const [counter, setCounter] = useState(initalState);

    const onIncrement = evt => {
        setCounter(produce(draft => {
            draft.values.inc += 1;
        }));
    };

    return <>
        <h1>Counter App-Using State and Hooks</h1>
        <h1>Value : {counter.values.inc}</h1>
        <button onClick={onIncrement}>+</button>
    </>

};
const App = () => {
    return <Counter />
}
ReactDOM.render(<App />, document.getElementById('root'));
