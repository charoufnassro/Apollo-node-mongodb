import React from 'react'
import "./UsersShow.css"

const UsersShow = (data) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Id : </th>
                    <th>User Name  : </th>
                    <th>Email : </th>
                    <th>Sexe : </th>
                </tr>
            </thead>
            <tbody>
                {console.log(data)}
                {data.data.map( ({id, userName, email, sexe}) => <tr key={id}>
                    <td>{id}</td>
                    <td>{userName}</td>
                    <td>{email}</td>
                    <td>{sexe}</td>
                </tr>
                )}
            </tbody>
        </table>    
    )
}

export default UsersShow
