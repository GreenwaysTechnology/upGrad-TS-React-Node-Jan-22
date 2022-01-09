import React from 'react';
import ReactDOM from 'react-dom';

//Layouts

const Heading = () => <div>
    <h1>Heading</h1>
</div>

const Footer = () => <div>
    <h1>Footer</h1>
</div>

const Body = () => <div>
    <h2>Declarative</h2>
    <p>
        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

        Declarative views make your code more predictable and easier to debug.
    </p>
</div>

//component composistion
const App = () => <div>
    <Heading />
    <Body/>
    <Footer />
</div>

ReactDOM.render(<App />, document.getElementById('root'))