import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Parent extends Component<any, any> {

    state = {
        value: 0
    }
    //constructors
    constructor() {
        super("")
        console.log('Parent Constructor')
    }
    render() {
        console.log('Parent render is called')
        return <>
            <Child />
            <button onClick={() => {
                this.setState(state => {
                    return {
                        value: state.value + 1
                    }
                })
            }}>Increment</button>
        </>
    }
    componentDidMount() {
        console.log('Parent - componentDidMount  is called')

    }
    componentDidUpdate() {
        console.log('Parent - componentDidUpdate  is called')

    }

}
class Child extends Component<any, any> {
    //constructors
    constructor() {
        super("")
        console.log('Child Constructor')
    }
    render() {
        console.log('Child render is called')
        return <>
        </>
    }
    componentDidMount() {
        console.log('Child - componentDidMount  is called')

    }
    componentDidUpdate() {
        console.log('Child - componentDidUpdate  is called')

    }

}

const App = props => <div>
    <Parent />
</div>
ReactDOM.render(<Parent />, document.getElementById('root'))