import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
import AddUser from "./components/AddUser"
import UsersShow from "./components/UsersShow"

import { Layout} from 'antd'
const { Header, Footer, Sider, Content } = Layout



const GET_USERS = gql`
  {
    getUsers{id userName email sexe}
  }
`;



function GetUsers() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p> {`${error}`}</p>;

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignContent: 'center', textAlign: 'center'}}>
      <Layout>
        <Header>
          <h2 style={{color: '#fff'}}>Uses Manager</h2>
        </Header>
        
        <Content>
          <AddUser />
          <UsersShow data={data.getUsers}/>
        </Content>
        
    </Layout>
    </div>
      
  )
}


export default GetUsers;
