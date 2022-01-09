// import { Heading } from "./layouts/heading";
// import { Footer } from "./layouts/footer";
// import { Body } from "./layouts/body";

import { Heading, Footer, Body } from './layouts'
import React from 'react'
import ReactDOM from 'react-dom'


const App = () => <div>
    <Heading />
    <Body />
    <Footer />
</div>


ReactDOM.render(<App />, document.getElementById('root'))