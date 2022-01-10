/**
 * Layers
 * 1.redux
 *    reducer,actions,store.
 * 2.mapper functions
 * 3.react components
 *    -normal , hoc
 * 
 */
import { createStore, combineReducers } from "redux";
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux'
import produce from "immer";


//Step - redux
//redux
const initalState = {
    value: 500
}
const counterReducer = (state = initalState, action) => {
    //logic
    switch (action.type) {
        case 'counter/increment':
            //console.log("Old state", state, "action", action)
            return produce(state, draft => {
                draft.value++;
            });
        case 'counter/incrementByAmount':
            // console.log("Old state", state, "action", action)
            console.log(action.payload.text)
            return produce(state, draft => {
                draft.value += parseInt(action.payload.text);
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    counter: counterReducer
})

const store = createStore(counterReducer)
/////////////////////////////////////////////////////////////////////////////////////
//mapper functions : are used to filter data : redux state will be converted into react props. for every reducer there will be a mapper function
//application state
function mapStateToProps(state) {
    console.log(state)
    return {
        value: state.value
    }
}

////////////////////////////////////////////////////////////////////////////////////
//React 
const Counter = props => {
    const [text, setText] = useState(0)

    const onIncrement = evt => {
        props.dispatch({
            type: 'counter/increment'
        })
    }
    const onIncrementByAmount = evt => {
        //console.log(text)
        props.dispatch({
            type: 'counter/incrementByAmount',
            payload: text
        })
    }
    const onGetInput = evt => {
        setText({ text: evt.target.value })
    }
    return <>
        <h1>Counter-React-Redux</h1>
        <h2>Value : {props.value}</h2>
        <button onClick={onIncrement}>+</button>
        <input onChange={onGetInput} value={text.value} />
        <button onClick={onIncrementByAmount}>OnIncrementByAmount`</button>

    </>
}

//Higher order component : merged component : Component + Redux
const CounterApp = connect(mapStateToProps)(Counter)

const App = props => <div>
    <Provider store={store}>
        <CounterApp />
    </Provider>
</div>
ReactDOM.render(<App />, document.getElementById('root'))









