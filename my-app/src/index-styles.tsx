import { Heading, Footer, Body } from './layouts'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import  './App.css'
import 'bootstrap/dist/css/bootstrap.css'

//ReactElement

const App = () => <div className="container">
    <Heading />
    <Body />
    <Footer />
</div>


ReactDOM.render(<App />, document.getElementById('root'))