//create dom element using plain js
import React from 'react';
import ReactDOM from 'react-dom';


// function Heading(){
//     return <h1>Hello React!</h1> // jsx
// }
//es 6 arrow
// const Heading = () => {
//     return <h1>Hello React!</h1> // jsx
// }
const Heading = () => <h1>Hello React!</h1>

//imperative style
// ReactDOM.render(Heading(), document.getElementById('root'))
//declarative style : tag style
ReactDOM.render(<Heading></Heading>, document.getElementById('root'))