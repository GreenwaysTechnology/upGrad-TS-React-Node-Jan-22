import React, { Fragment } from 'react';
import ReactDOM from 'react-dom'
/**
 * 
 * 
 * <table>
 *  <thead></thead>
 *  <tr><td</td></td>
 * </table>
 */

const Grid = props => {
    return <table>
        <thead >
            <Columns />

        </thead>
        <GridBody users={props.datasource} />

    </table>
}
//withoutFragement
// const Columns = props => {
//     return <React.Fragment>
//         <td>Name</td>
//         <td>Location</td>
//     </React.Fragment>
// }
// const Columns = props => {
//     return <Fragment>
//         <td>Name</td>
//         <td>Location</td>
//     </Fragment>
// }
const Columns = props => {
    return <>
        <td>Name</td>
        <td>Location</td>
    </>
}
const GridBody = props => {
    return <>
        <tbody>
            {
                props.users.map((user, index) => {
                    return <tr key={index}>
                        <th scope="row">{user.id}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                })
            }

        </tbody>
    </>
}
const USERS = [
    { id: 1, name: 'subramaian', email: 'subu@gmail.com' },
    { id: 2, name: 'Dodge', email: 'dodge@gmail.com' }
]
const App = () => <div>
  <Grid datasource={USERS} />
  </div>


ReactDOM.render(<App />, document.getElementById('root'))