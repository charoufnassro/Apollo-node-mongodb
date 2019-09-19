import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import { Row, Col,  Layout} from 'antd'


import { gql } from "apollo-boost"
import { useQuery } from '@apollo/react-hooks'
import UsersShow from "./components/UsersShow"
import DrawerAddUser from './components/DrawerAddUser'

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
  )
}


export default GetUsers;
