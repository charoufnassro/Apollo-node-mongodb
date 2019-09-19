import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import { Row, Col,  Layout} from 'antd'

<<<<<<< HEAD
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
import AddUser from "./components/AddUser"
import UsersShow from "./components/UsersShow"

import { Layout} from 'antd'
const { Header, Footer, Sider, Content } = Layout
=======

import { gql } from "apollo-boost"
import { useQuery } from '@apollo/react-hooks'
import UsersShow from "./components/UsersShow"
import DrawerAddUser from './components/DrawerAddUser'
>>>>>>> ebe8215892ec98dc3c9f03e189189470a1cfadb0

const {Header, Content, Footer } = Layout


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
<<<<<<< HEAD
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
      
=======
    <Layout>
        <Row >
          <Col span={24} >
            <Header style={{color: '#fff', textAlign: 'center', fontWeight: 'bold'}}>
                <Col span={18}>
                  Manager Users App
                </Col>
                <Col span={6}>
                  <DrawerAddUser />
                </Col>
            </Header>
          </Col>
        </Row>
        
        <Row>
          <Col sm={{ span: 24}} lg={{span: 18, offset:3}}>
            <Content style={{padding: '1em'}}>
              <UsersShow data={data.getUsers}/>
            </Content>
          </Col>
          
        </Row>

        <Row >
          <Col>
             <Footer style={{textAlign: 'center', fontWeight: 'bold'}}>Footer</Footer>
          </Col>
        </Row>
       

    </Layout>  
>>>>>>> ebe8215892ec98dc3c9f03e189189470a1cfadb0
  )
}


export default GetUsers;
