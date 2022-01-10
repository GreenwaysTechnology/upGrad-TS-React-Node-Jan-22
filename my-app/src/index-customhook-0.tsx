//Custom Hooks : Reusable feature.
//features 

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

//features;

const Customer = props => {
    //feature-1 update Screen title
    const [screen, setScreen] = useState('Customer Manager App')
    //feature 2 - get Window width
    const [width, setWidth] = useState(window.innerWidth);

    //useEffect to update window title after component mounted into dom
    useEffect(() => {
        document.title = screen;
    })
    
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        //imperative dom listner
        window.addEventListener('resize', handleResize)
        //clean up code
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    });

    return <div>
        <h1>Custom Hooks</h1>
        <h1>Current Window width {width}</h1>
        <button onClick={() => {
            setScreen('CustomerManager App-Update')
        }}>Update Title</button>
    </div>
};

const App = () => {
    return <div>
        <Customer />
    </div>
}
ReactDOM.render(<App />, document.getElementById('root'));
