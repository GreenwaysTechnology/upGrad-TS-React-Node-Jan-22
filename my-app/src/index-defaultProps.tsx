import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'


export interface ProfileType {
    id: number;
    name: string;
    status?: boolean;
    skills?: Array<string>
    gender?: "Male" | "Female" | "Thrid Sex"
    address?: {
        city?: string
    }
}

class Profile extends React.Component<ProfileType> {

    render() {
        return <div className="container">
            <h1>Id: {this.props.id}</h1>
            <h2>Name {this.props.name}</h2>
            <h2>Status {this.props?.status ? "Available" : "Not Available"}</h2>
            <h2>Contact {this.props.address?.city ?? "city"}</h2>
        </div>
    }
}
// //default Props
// Profile.defaultProps = {
//     id: 0,
//     name: 'name',
//     status: false,

//     address: {
//         city: 'city'
//     }
// }

const id = 1;
const name = "subramanian"
const status = true;
const address = {
    city: 'coimbatore'
}
const App = () => <div className="container">
    <h1>Property Binding</h1>
    <Profile id={id} name={name}  />
</div>
ReactDOM.render(<App />, document.getElementById('root'))