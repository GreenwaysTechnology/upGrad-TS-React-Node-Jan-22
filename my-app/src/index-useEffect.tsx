import produce from 'immer';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';


const Page = props => {
    const [count, setCount] = useState(0)
    //compoentDidMount
    useEffect(() => {
        document.title = `You have clicked ${count} times`
    })
    return <>
        <button onClick={() => setCount(count + 1)}>Hit</button>
    </>
};
const App = () => {
    return <Page />
}
ReactDOM.render(<App />, document.getElementById('root'));