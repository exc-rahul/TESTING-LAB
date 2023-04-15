import React from 'react'
import { Table } from 'react-bootstrap'

const Rocktablee = () => {
    return (
        <div > <Table  bordered hover style={{color:'white'}}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Rock Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>s
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </Table></div>
    )
}

export default Rocktablee