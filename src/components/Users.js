import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Users() {
   const [users, setUsers] = useState([])
   useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(function (response) {
         setUsers(response.data)
         console.log(response)
      })
      .catch(function (error) {
         console.log(error);
      }) 
   }, []);

  return (
    <React.Fragment>
      <h1>Users</h1>
         <table>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Address</th>
            <th>Company</th>
            {users.map((user) => {
               return (
                  <tr key={user}>
                     <td>{user.name}</td>
                     <td>{user.username}</td>
                     <td>{user.email}</td>
                     <td>{user.phone}</td>
                     <td>{user.website}</td>
                     <td>
                        <div>{user.address.street}</div>
                        <div>{user.address.suite}</div>
                        <div>{user.address.city}</div>
                        <div>{user.address.zipcode}</div>
                     </td>
                     <td>
                        <div><b>{user.company.name}</b></div>
                        <div>{user.company.bs}</div>
                        <div>{user.company.catchPhrase}</div>
                     </td>

                  </tr>
               )
            })}
         </table>
    </React.Fragment>
  );
}

export default Users;