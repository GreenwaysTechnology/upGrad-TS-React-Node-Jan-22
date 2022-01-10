import produce from 'immer';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

type CounterState = {
    value: number;
}

class Counter extends Component<any, any>{
    //state 
    state: CounterState = {
        value: 0
    }
    //listener
    onIncrement = evt => {
        this.setState((prevState: CounterState) => {
            //immutable pattern
            // return {
            //     value: prevState.value + 1
            // }
            //return Object.assign({}, prevState, { value: prevState.value + 1 })
           // return { ...prevState, value: prevState.value + 1 }
            //return  new State
            return produce(prevState, draft => {
                draft.value += 1
            });

        })
    }
    render() {
        return <div>
            <h1>Counter App</h1>
            <h2>Value {this.state.value}</h2>
            <button onClick={this.onIncrement}>+</button>
        </div>
    }
}

const App = props => <div>
    <Counter />
</div>;
ReactDOM.render(<App />, document.getElementById('root'))