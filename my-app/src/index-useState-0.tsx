//react hooks
import React, { useState } from 'react';
import ReactDOM from 'react-dom'

// const state = {
//     a:0,
//     b:0,
//     c:0
// }
// useState(a)
// useState(b);
//useState({a:0,b:0,c:0})
const Counter = props => {

    const [value, setValue] = useState(props.initalValue)

    const onIncrement = evt => {
        setValue(state => {
            return state + 1
        })
    }
    return <div>
        <h1>Hooks-UseState</h1>
        <h1>Value: {value}</h1>
        <button onClick={onIncrement}>-</button>
    </div>
}

const App = props => <div>
    <Counter initalValue={10} />
</div>
ReactDOM.render(<App />, document.getElementById('root'))