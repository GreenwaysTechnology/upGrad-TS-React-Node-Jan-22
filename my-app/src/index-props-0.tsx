import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

//props = {name:'',message:''} 
// function Greeter(props) {
//     console.log(props);
//     return <div>
//          <h1>{props.message} {props.name}</h1>
//     </div>
// }
const Greeter = (props) => {
    console.log(props);
    return <div>
        <h1>{props.message} {props.name}</h1>
    </div>
}
const App = () => {
    // Greeter("hello");
    return <div className="container">
        <h1>Property Binding</h1>
        <Greeter name="Subramanian" message="Hello" />
        <Greeter name="Ram" message="Hello" />

    </div>
}
ReactDOM.render(<App />, document.getElementById('root'))
