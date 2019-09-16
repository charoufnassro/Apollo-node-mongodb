import React from 'react'
import {useMutation} from '@apollo/react-hooks'
import {gql} from 'apollo-boost'
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Icon } from 'antd';


const { Option } = Select;

const UPDATE_USER = gql`
    mutation UpdateUser($id: ID!, $userName: String!, $email: String!, $sexe: String!){
        updateUser(id: $id,userName: $userName, email: $email, sexe: $sexe){
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


function UpdateUser() {
        state = { visible: false };

        showDrawer = () => {
            this.setState({
            visible: true,
            });
        };

        onClose = () => {
            this.setState({
            visible: false,
            });
        };

    const [updateUser] = useMutation(
        UPDATE_USER,
        { refetchQueries: [{ query: GET_USERS }] },
    )
    return (
        <div>
            
        </div>
    )
}

export default UpdateUser
