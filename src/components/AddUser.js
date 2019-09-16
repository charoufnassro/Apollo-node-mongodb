import React from 'react'
import { useMutation, useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import { Form, Icon, Input, Button } from 'antd';

const ADD_USER = gql`
  mutation AddUser($userName: String!, $email: String!, $sexe: String!) {
    addUser(userName: $userName, email: $email, sexe: $sexe){
      userName
      email
      sexe
    }
  }
`;

const GET_USERS = gql`
  query{
    getUsers{id userName email sexe}
  }
`;

export default function AddUser() {
    let input;
    let inputEmail;
    let inputSexe;
    
    const [addUser] = useMutation(
      ADD_USER,
      {
        refetchQueries: [{ query: GET_USERS }]
      }
      );

    return (
      
        <div>
          <Form layout="inline" onSubmit={e => {
            e.preventDefault();
            addUser({ variables: {userName: e.target.elements.userName.value, email: e.target.elements.email.value, sexe: e.target.elements.sexe.value } });
            e.target.elements.userName.value = '';
            inputEmail.value = '';
            inputSexe.value= "";
          }}>
            <Form.Item >
              
                <Input
                  name="userName"
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="UserName"
                />
            </Form.Item>
            <Form.Item >
              
                <Input
                  name="email"
                  ref={node => { inputEmail = node; }}
                  prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Email"
                />
            </Form.Item>
            <Form.Item >
              
                <Input
                name="sexe"
                  prefix={<Icon type="team" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  ref={node => { inputSexe = node; }}
                  placeholder="Sexe"
                />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" icon="usergroup-add" >
                Add User
              </Button>
            </Form.Item>
          </Form>
      </div>
    )
}
