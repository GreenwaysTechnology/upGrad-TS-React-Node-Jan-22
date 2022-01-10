import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector, useDispatch } from "react-redux";
import { configureStore, createReducer, createAction } from '@reduxjs/toolkit';

//redux
const initalState = {
    value: 100
}

//actions
const increment = createAction('counter/increment')
const decrement = createAction('counter/decrement')
const incrementByAmount = createAction('counter/incrementByAmount')


//builder pattern
const counterReducer = createReducer(initalState, builder => {
    builder.addCase(increment, (state, action) => {
        state.value++ //immer code is bydefault
    }).addCase(decrement, (state, action) => {
        state.value--
    }).addCase(incrementByAmount, (state, action) => {
        //immutable logic
        state.value += action.payload;
    }).addDefaultCase((state, action) => {
        console.log(action)
    })
})


// const store = createStore(counterReducer)
const store = configureStore({
    reducer: counterReducer
})
/////////////////////////////////////////////////////////////////////////////////////

const Counter = props => {
    //mapStateToprops replacer
    const value = useSelector(state => state.value)
    const onIncrement = useDispatch();
    return <>
        <h1>Counter-React-Redux</h1>
        <h2>Value {value}</h2>
        <button onClick={() => onIncrement(increment())}>+</button>
    </>
}


const App = props => <div>
    <Provider store={store}>
        <Counter />
    </Provider>

</div>
ReactDOM.render(<App />, document.getElementById('root'))