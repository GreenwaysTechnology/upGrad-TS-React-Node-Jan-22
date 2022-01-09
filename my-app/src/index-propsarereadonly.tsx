import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

//pure function
const User = props => {
    return <UserDetails id={props.id} name={props.name} city={props.city} />
}
//pure function
//props are readonly
const UserDetails = props => {
    //mutate the name : 
//    props.name = "Subramanian"
    return <div>
        <h2>Id : {props.id}</h2>
        <h3>Name {props.name}</h3>
        <h3>City {props.city}</h3>
    </div>
}


const App = () => <div>
    <User id={1} name="Subramanian" city="Coimbatore" />
</div>

ReactDOM.render(<App />, document.getElementById('root'))