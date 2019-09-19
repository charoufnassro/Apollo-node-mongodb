import React from 'react'
import { Table, Divider } from 'antd'
import DeleteUser from './DeleteUser'
import DrawerUpdateUser from './DrawerUpdateUser'

const columns = [
    {
        title: 'ID :',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'User Name :',
        dataIndex: 'userName',
        key: 'userName'
    },
    {
        title: 'Email :',
        dataIndex: 'email',
        key: 'email'
    },
    {
        title: 'Sexe :',
        dataIndex: 'sexe',
        key: 'sexe'
    },
    {
        title: 'Action :',
        align:'center',
        key: 'action',
        render: (text, record) => (
            <span>
                <DrawerUpdateUser data={record} />
                <Divider type="vertical" />
                <DeleteUser data={record} />
            </span>
            
        ),
    }
]

const UsersShow = (data) => {


      
      const columns = [
        {
          title: 'Id :',
          dataIndex: 'id',
          key: 'id',
        }, {
        title: 'Name',
        dataIndex: 'userName',
        key: 'userName',
      }, {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      }, {
        title: 'Sexe',
        dataIndex: 'sexe',
        key: 'sexe',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <a>Edit {console.log(record.name)}</a>
            <Divider type="vertical" />
            <DeleteUser id={record.id} name={record.userName}/>
          </span>
        ),
      }
    ];


    return (
        <Table
            style={{padding: '1em 0'}}
            bordered
            dataSource={data.data} 
            columns={columns}
            footer={
                ()=> <h2 style={{textAlign: 'center', textTransform: 'capitalize'}}>footer of table</h2>
            }
            size={'small'}
            title= {
                (currentPageData)=><h1 style={{textAlign:'center'}}>Totale Users : ( {currentPageData.length} )</h1>
                
            }
            rowKey={
                (record)=> record.id
            }
        /> 
    )
}

export default UsersShow
