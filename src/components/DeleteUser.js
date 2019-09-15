import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import { gql } from "apollo-boost"
import { Popconfirm, Icon, Modal, notification } from 'antd'

const DELETE_USER = gql`
    mutation DeleteUser($id: ID!){
        deleteUser(id: $id){
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
`

function success() {
    Modal.success({
      title: 'This is a success message',
      content: 'some messages...some messages...',
    });
  }
const openNotificationWithIcon = (dataUser) => {
    notification['success']({
      message: `${dataUser.userName} is deleted`,
      description:
        `${dataUser.userName} with email ${dataUser.email} is deleted`,
    });
  };

export default function DeleteUser(record) {

    const [deleteUser, { data }] = useMutation(
        DELETE_USER,
        { refetchQueries: [{query: GET_USERS}] }
        );
    return (
        <Popconfirm
            icon={<Icon type="question-circle-o" style={{ color: 'red' }} />} 
            title={`Do you want remove ${record.data.userName} ?`} 
            okText="Delete" 
            cancelText="Back" 
            okType="danger" 
            onConfirm={e => {
                e.preventDefault();
                deleteUser({ variables: { id: record.data.id } })
                openNotificationWithIcon(record.data);
              }}
        >
            <a>Remove</a>
        </Popconfirm>
    )
}
