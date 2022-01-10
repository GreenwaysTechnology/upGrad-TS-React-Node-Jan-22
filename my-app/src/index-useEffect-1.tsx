import produce from 'immer';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';


const Counter = props => {
    const [count, setCount] = useState(0)
    const [like, setLike] = useState(10);

    //compoentDidMount
    useEffect(() => {
        document.title = `You have clicked ${count} times`
    })
    useEffect(() => {
        setTimeout(() => {
            document.body.style.backgroundColor = 'yellow'
        }, 1000)
    })
    return <>
        <h1>Likes {like}</h1>
        <button onClick={() => setCount(count + 1)}>Hit</button>
        <button onClick={() => setLike(like + 2)}>Like</button>
    </>
};
const App = () => {
    return <Counter />
}
ReactDOM.render(<App />, document.getElementById('root'));