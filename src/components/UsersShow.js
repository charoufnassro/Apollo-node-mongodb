import React from 'react'
// import "./UsersShow.css"
import DeleteUser from "./DeleteUser"
import { Table, Divider } from "antd"


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
        <div style={{display: 'flex', flexDirection: 'column', alignContent: 'center', textAlign: 'center'}}>
            
        <Table 
            filtered
            bordered={true} 
            dataSource={data.data} 
            columns={columns} 
            onRow={(record, rowIndex) => {
                return {
                  onClick: event => {console.log("click", record,rowIndex)}, // click row
                  onDoubleClick: event => {console.log("dbclick")}, // double click row
                  onContextMenu: event => {console.log("Menu")}, // right button click row
                  onMouseEnter: event => {console.log("mouse entre")}, // mouse enter row
                  onMouseLeave: event => {console.log("mouse leave")}, // mouse leave row
                };
            }}
            />
        {/* <table>
            <thead>
                <tr>
                    <th>Id : </th>
                    <th>User Name  : </th>
                    <th>Email : </th>
                    <th>Sexe : </th>
                    <th>Action: </th>
                </tr>
            </thead>
            <tbody>
                {data.data.map( ({id, userName, email, sexe}) => <tr key={id}>
                    <td>{id} </td>
                    <td>{userName}</td>
                    <td>{email}</td>
                    <td>{sexe}</td>
                    <td><DeleteUser id={id} name={userName}/></td>
                </tr>
                )}
            </tbody>
        </table>  */}
        </div>
           
    )
}

export default UsersShow
