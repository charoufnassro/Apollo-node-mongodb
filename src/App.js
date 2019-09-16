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

// const USER_INSERTED_SUBSCRIPTION = gql`
//   subscription userInserted{
//     userInserted{
//       id
//       userName
//       email
//       sexe
//     }
//   }
// `

// const USER_DELETED_SUBSCRIPTION = gql`
//   subscription userDeleted{
//     userDeleted{
//       id
//       userName
//       email
//       sexe
//     }
//   }
// `



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

// function NotificationInserted() {
//   const { data, loading, error } = useSubscription(
//     USER_INSERTED_SUBSCRIPTION,
//   );
//   return <h4>User inserted: {!loading && data}</h4>;
// }
// function NotificationDeleted() {
//   const { data, loading, error } = useSubscription(
//     USER_DELETED_SUBSCRIPTION,
//   );
//   return <h4>User deleted: {!loading && data}</h4>;
// }


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default GetUsers;
