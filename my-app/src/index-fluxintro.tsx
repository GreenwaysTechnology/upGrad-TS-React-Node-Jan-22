import ReactDOM from 'react-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

const Avatar = props => {
    return <div>
        <img src={props.avatar.url} />
    </div>
}
const Address = props => <div>
    <address>
        <p>{props.address.city}</p>
    </address>
</div>

export const User = props => <div>
    <h2>id {props.user.id}</h2>
    <h3>Name {props.user.name}</h3>
    <Avatar avatar={props.user.avatar} />
    <Address address={props.user.address} />
</div>


const Panel = props => <div>
    <User user={props.user} />
</div>
const PageLayout = props => <div>
    <Panel user={props.user} />
</div>

const Page = props => <div>
    <PageLayout user={props.user} />
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
const App = props => <div className="container">
    <h1>Nested Components and Props</h1>
    <Page user={user} />
</div>

ReactDOM.render(<App />, document.getElementById('root'))