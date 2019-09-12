import React from 'react'
import { useMutation } from '@apollo/react-hooks';
import { gql } from "apollo-boost";

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

export default function AddUser() {
    let input;
    let inputEmail;
    let inputSexe;
    const [addUser, { data }] = useMutation(
      ADD_USER,
      {
        update(cache, { data: { addUser } }) {
          const data = cache.readQuery({ query: GET_USERS });
          data.getUsers.push(addUser)
          cache.writeQuery({
            query: GET_USERS,
            data,
            // data: { user: user.concat([addUser]) },
          });
        }
      }
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
          <button type="submit">Add User</button>
        </form>
      </div>
    )
}
