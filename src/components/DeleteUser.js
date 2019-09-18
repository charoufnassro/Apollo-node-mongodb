import React from 'react'
import {useMutation} from '@apollo/react-hooks'
import {gql} from 'apollo-boost'
import { Popconfirm, message } from 'antd'


const DELETE_USER = gql`
    mutation DeleteUser($id: ID!){
        deleteUser(id: $id){
            id
            userName
            email
            sexe
        }
    }
`
const GET_USERS = gql`
  query{
    getUsers{id userName email sexe}
  }
`;

export default function DeleteUser(idDeleted) {
    
    const [deleteUser] = useMutation(
        DELETE_USER,
        { refetchQueries: [{ query: GET_USERS }] },
    )
    return (
        <Popconfirm title={`do you want to remove ？${idDeleted.name}`} okText="Yes" cancelText="No" onConfirm={() => deleteUser({ variables: { id: idDeleted.id } })}>
            <a>Remove</a>
        </Popconfirm>
        
    )
}
