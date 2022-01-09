import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

//types for props
export interface ProfileType {
    id: number;
    name: string;
    status?: boolean;
    skills?: Array<string>
    gender?: "Male" | "Female" | "Thrid Sex"
    address: {
        city?: string
    }
}

const Profile = (props: ProfileType) => <div>
    <div className="container">
        <h1>Id: {props.id}</h1>
        <h2>Name {props.name}</h2>
        <h2>Gender{props.gender}</h2>
        <h2>Status {props.status ? "Available" : "Not Available"}</h2>
        <h2>Contact {props.address.city}</h2>
        <ul>
            {
                props.skills.map((value: string, index: number) => {
                    return <li key={index}>{value?.toLowerCase() ?? ".."}</li>
                })
            }
        </ul>
    </div>
</div>

const id = 1;
const name = "subramanian"
const status = true;
const skills: Array<string> = ["React", "Ts", "Redux"]
const address = {
    city: 'coimbatore'
}
const App = () => <div className="container">
    <h1>Property Binding</h1>
    <Profile id={id} gender={"Male"} skills={skills} name={name} status={status} address={address} />

</div>
ReactDOM.render(<App />, document.getElementById('root'))