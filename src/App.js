import React from 'react';
import UsersPage from './components/UsersPage';

export default function App() {

  const users = [];

  for (var i = 0; i < 10000 ;i++) {  
    const userId = i + 1
    users.push(
      {
        title : 'User'+' '+(i+1) ,
        id : String(userId)
      }
    )
  }

  return <UsersPage usersData={users} />
}
