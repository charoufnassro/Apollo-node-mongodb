import React from 'react'
import { useMutation } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import { Button } from 'antd'

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
    return (
        <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            addUser({ variables: { userName: input.value, email: inputEmail.value, sexe: inputSexe.value } });
            input.value = '';
            inputEmail.value = '';
            inputSexe.value= "";
          }}
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
              <Button onClick={props.closeDrawer} type="primary" htmlType='submit'>
              Add
              </Button>
          </div>
        </form>
      </div>
    )
}
