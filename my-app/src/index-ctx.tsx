
import ReactDOM from 'react-dom';
import React, { createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css'



const { Provider, Consumer } = createContext<any>("theme");


const Avatar = props => {
    //   props.something = "test";
    return <div>
        <img src={props.avatar.url} />
    </div>
}
const Address = props => <div>
    <address>
        <p>{props.address.city}</p>
    </address>
</div>
const Location = props => <div>
    <p>{props.lat} {props.lng}</p>
</div>

const User = props => <Consumer>
    {theme => {
        return <div style={theme}>
            <h1>{props.title}</h1>
            <h2>id {props.user.id}</h2>
            <h3>Name {props.user.name}</h3>
            <Avatar avatar={props.user.avatar} />
            <Address address={props.user.address} />
            <Location lat={props.lat} lng={props.lng} />
        </div>
    }}
</Consumer>

const Panel = props => <div>
    {/* <User user={user} /> */}
    <User {...props} title="Profile Dashboard" />

</div>
const PageLayout = props => <div>
    {/* <Panel user={user} /> */}
    <Panel {...props} />
</div>

const Page = props => <div>
    {/* <PageLayout user={user} lat={props.lat} lng={props.lng} /> */}
    <PageLayout {...props} />
</div>

const user = {
    id: 1,
    name: 'Subramanian',
    address: {
        city: 'Coimbatore'
    },
    avatar: {
        url: 'https://picsum.photos/200'
    }
}
const user1 = {
    id: 2,
    name: 'Murugan',
    address: {
        city: 'Coimbatore'
    },
    avatar: {
        url: 'https://picsum.photos/202'
    }
}

const theme = {
    "backgroundColor": "pink",
    "color": "black"
}
const App = props => <div className="container">
    <Provider value={theme}>
        <h1>Nested Components and Props</h1>
        <hr />
        <Page user={user} lat="1.899" lng="3.908" />
        <hr />
        <Page user={user1} lat="1.899" lng="3.908" />
    </Provider>

</div>

ReactDOM.render(<App />, document.getElementById('root'))