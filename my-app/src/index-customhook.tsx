//Custom Hooks : Reusable feature.
//features 

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useWindowTitle } from './hooks/usewindowtitlehook';
import { useWindowWidth } from './hooks/usewindowwidth';

//features;

const Customer = props => {
    const { screen, setScreen } = useWindowTitle('Customer Manager')
    const width = useWindowWidth()

    return <div>
        <h1>Custom Hooks</h1>
        <h1>Current Window width {width}</h1>
        <button onClick={() => {
            setScreen('CustomerManager App-Update')
        }}>Update Title</button>
    </div>
};
const User = props => {
    const { screen, setScreen } = useWindowTitle('User Manager')
    const width = useWindowWidth()

    return <div>
        <h1>Custom Hooks</h1>
        <h1>Current Window width {width}</h1>
        <button onClick={() => {
            setScreen('UserManager App-Update')
        }}>Update Title</button>
    </div>
};
const App = () => {
    return <div>
        <User />
    </div>
}
ReactDOM.render(<App />, document.getElementById('root'));
