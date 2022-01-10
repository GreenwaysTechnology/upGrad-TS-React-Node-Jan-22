//createSlice
import { combineReducer } from "redux";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector, useDispatch } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { value: 10 };

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        //biz logic
        increment(state) {
            state.value++;//immer logic
        },
        decrement(state) {
            state.value-- //immerlogic
        },
        incrementByAmount(state, action) {
            state.value += action.payload
        }
    }

})
console.log(counterSlice)
const store = configureStore({ reducer: counterSlice.reducer })
const { increment, decrement } = counterSlice.actions;

const Counter = props => {

    const incrementValue = useSelector(state => state.value);

    const onIncrement = useDispatch();
    const onDecrement = useDispatch();


    return <>
        <h1>Counter Increment Value : {incrementValue} </h1>
        <button onClick={() => {
            onIncrement(increment())
        }}>Increment</button>
        <button onClick={() => {
            onDecrement(decrement())
        }}>Decrement</button>
    </>
}

const App = props => {
    return <div>
        <Provider store={store}>
            <Counter />
        </Provider>
    </div>
};
ReactDOM.render(<App />, document.getElementById('root'));