
import React from 'react';
import ReactDOM from 'react-dom';


class Heading extends React.Component {
    render() {
        return <h1>React!!</h1>
    }
}


ReactDOM.render(<Heading></Heading>, document.getElementById('root'))