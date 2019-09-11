import React from 'react'
import { useMutation } from '@apollo/react-hooks';
import { gql } from "apollo-boost";

const ADD_USER = gql`
  mutation AddUser($userName: String!, $email: String!) {
    addUser(userName: $userName, email: $email){
      userName
      email
    }
  }
`;

export default function AddUser() {
    let input;
    let inputEmail;
    const [addUser, { data }] = useMutation(ADD_USER);
    return (
        <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            addUser({ variables: { userName: input.value, email: inputEmail.value } });
            input.value = '';
            inputEmail.value = '';
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
          <button type="submit">Add User</button>
        </form>
      </div>
    )
}
