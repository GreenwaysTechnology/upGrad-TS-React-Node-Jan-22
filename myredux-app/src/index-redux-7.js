import produce from "immer";
import { combineReducers, createStore } from "redux";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector, useDispatch } from "react-redux";

//redux
const initalState = {
    value: 10
}
const incrementReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'counter/increment':
            return produce(state, draft => {
                draft.value++;
            });
        case 'counter/incrementByAmount':
            return produce(state, draft => {
                draft.value += action.payload;
            })
        default:
            return state;
    }
}

const decrementReducer = (state = {
    value: 100
}, action) => {
    switch (action.type) {
        case 'counter/decrement':
            return produce(state, draft => {
                draft.value--;
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    increment: incrementReducer,
    decrement: decrementReducer
})

//create store
const store = createStore(rootReducer);

const Counter = props => {
    //should selected state based on reducer
    // const value = useSelector(state => state.reducer.reducerstatevariable);
    const incrementValue = useSelector(state => state.increment.value);
    const decrementValue = useSelector(state => state.decrement.value);

    const onIncrement = useDispatch();
    const onDecrement = useDispatch();

    //action creators
    const increment = () => ({
        type: 'counter/increment',
        payload: undefined
    });
    const decrement = () => ({
        type: 'counter/decrement',
        payload: undefined
    });

    return <>
        <h1>Counter Increment Value : {incrementValue}  Counter Decrement Value {decrementValue}</h1>
        {/* <button onClick={onIncrement}>Increment</button> */}
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