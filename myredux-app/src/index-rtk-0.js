import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector, useDispatch } from "react-redux";
import produce from "immer";
import { configureStore } from '@reduxjs/toolkit';

//redux
const initalState = {
    value: 100
}
const counterReducer = (state = initalState, action) => {
    //logic
    switch (action.type) {
        case 'counter/increment':
            console.log("Old state", state, "action", action)
            return produce(state, draft => {
                draft.value++;
            });
        case 'counter/incrementByAmount':
            console.log("Old state", state, "action", action)
            return produce(state, draft => {
                draft.value += action.payload;
            });
        default:
            return state;
    }
}
// const store = createStore(counterReducer)
const store = configureStore({
    reducer: counterReducer
})
/////////////////////////////////////////////////////////////////////////////////////

const Counter = props => {
    //mapStateToprops replacer
    const value = useSelector(state => state.value)
    const onIncrement = useDispatch();
    // const onIncrement = evt => {
    //     dispatch({ type: 'counter/increment' })
    // }
    return <>
        <h1>Counter-React-Redux</h1>
        <h2>Value {value}</h2>
        <button onClick={() => onIncrement({ type: 'counter/increment' })}>+</button>
    </>
}


const App = props => <div>
    <Provider store={store}>
        <Counter />
    </Provider>

</div>
ReactDOM.render(<App />, document.getElementById('root'))