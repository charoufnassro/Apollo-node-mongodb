import React from 'react'
import { useMutation } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import { Button, Input, Select, Form, Icon } from 'antd'

const { Option } = Select

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
  {
    getUsers{id userName email sexe}
  }
`;

export default function AddUser(props) {
    let input;
    let inputEmail;
    let inputSexe;
    const [addUser, { data }] = useMutation(
      ADD_USER,
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
      
      function hasErrors(fieldsError) {
        return Object.keys(fieldsError).some(field => fieldsError[field]);
      }

    return (
        <div>
          <Form layout="vertical" onSubmit={e => {
            e.preventDefault();
            console.log(e.username.target.value)
            addUser({ variables: { userName: e.target.value, email: e.target.value, sexe: e.target.value } });
          }} >
            <Form.Item>
              <Input name='username' placeholder="Enter your username" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} onChange={(e) => console.log(e.username)} />
            </Form.Item>
            <Form.Item>
              <Input name='email' placeholder="Enter your email" prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}/>
            </Form.Item>
            <Form.Item>
              <Input placeholder="Enter your sexe" prefix={<Icon type="woman" style={{ color: 'rgba(0,0,0,.25)' }} />}/>
            </Form.Item>
          </Form>
          
          
        <form
        >
          <input ref={node => {
              input = node;
            }}
          />
          <input ref={node => {
              inputEmail = node;
            }}
          />
          <input ref={node => {
              inputSexe = node;
            }}
          />
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
              Add 
              </Button>
          </div>
        </form>
      </div>
    )
}
