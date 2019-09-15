import React from 'react'
import { Table, Divider } from 'antd'
import DeleteUser from './DeleteUser'

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
                <a>Edit</a>
                <Divider type="vertical" />
                <DeleteUser data={record} />
            </span>
            
        ),
    }
]

const UsersShow = (data) => {
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
        // <table>
        //     <thead>
        //         <tr>
        //             <th>Id : </th>
        //             <th>User Name  : </th>
        //             <th>Email : </th>
        //             <th>Sexe : </th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {console.log(data)}
        //         {data.data.map( ({id, userName, email, sexe}) => <tr key={id}>
        //             <td>{id}</td>
        //             <td>{userName}</td>
        //             <td>{email}</td>
        //             <td>{sexe}</td>
        //         </tr>
        //         )}
        //     </tbody>
        // </table>    
    )
}

export default UsersShow
