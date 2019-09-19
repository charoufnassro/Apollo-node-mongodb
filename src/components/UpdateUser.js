import React from 'react'
import { useMutation } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import { Button, Form, Input, Icon } from 'antd'

const ADD_USER = gql`
  mutation AddUser($userName: String!, $email: String!, $sexe: String!) {
    addUser(userName: $userName, email: $email, sexe: $sexe){
      userName
      email
      sexe
    }
  }
`;

const UPDATE_USER = gql`
    mutation UpdateUser($id: ID!, $userName: String!, $email: String!, $sexe: String!){
    updateUser(
            id: $id,
            inputUser:{userName: $userName, email: $email,sexe: $sexe}
                ){
                    userName
                    email
                    sexe
                }
    }
`

const GET_USERS = gql`
  {
    getUsers{id userName email sexe}
  }
`;

export default function UpdateUser(props) {
    let input;
    let inputEmail;
    let inputSexe;
    const [updateUser, { data }] = useMutation(
      UPDATE_USER,
      // {
      //   update(cache, { data: { addUser } }) {
      //     const data = cache.readQuery({ query: GET_USERS });
      //     data.getUsers.push(addUser)
      //     cache.writeQuery({
      //       query: GET_USERS,
      //       data,
      //       // data: { user: user.concat([addUser]) },
      //     });
      //   }
      // }
      { refetchQueries: [{query: GET_USERS}] }
      );


    return (
        <div>
          <Form layout="vertical" onSubmit={e => {
            e.preventDefault();
            updateUser({ variables: {id: props.data.data.id, userName: e.target.elements.userName.value, email: e.target.elements.email.value, sexe: e.target.elements.sexe.value}})}}>
            <Form.Item >
              
                <Input
                  name="userName"
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Enter your username"
                  defaultValue={props.data.data.userName}
                />
            </Form.Item>
            <Form.Item >
              
                <Input
                  name="email"
                  prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Enter your email"
                  defaultValue={props.data.data.email}
                />
            </Form.Item>
            <Form.Item >
              
                <Input
                name="sexe"
                  prefix={<Icon type="team" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Enter your sexe"
                  defaultValue={props.data.data.sexe}
                />
            </Form.Item>
         
              <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    borderTop: '1px solid #e8e8e8',
                    padding: '10px 16px',
                    textAlign: 'right',
                    left: 0,
                    background: '#fff',
                    borderRadius: '0 0 4px 4px',
                    }}
                >
                    <Button
                    style={{
                        marginRight: 8,
                    }}
                    onClick={props.closeDrawer}
                    >
                    Back
                    </Button>
                    <Button onClick={props.closeDrawer} type="primary" htmlType='submit' icon='user-add'>
                    Update
                    </Button>
              </div>
          </Form>
      </div>
    )
}
