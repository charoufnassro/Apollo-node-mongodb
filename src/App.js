import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
import AddUser from "./AddUser"
import UsersShow from "./components/UsersShow"



const EXCHANGE_USERS = gql`
  {
    getUsers{id userName email sexe}
  }
`;



function ExchangeUsers() {
  const { loading, error, data } = useQuery(EXCHANGE_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p> {`${error}`}</p>;

  return (
    <div>
      <UsersShow data={data.getUsers}/>
      <AddUser />
    </div>
      
  )
}


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

export default ExchangeUsers;
