import Axios from "axios";
import './file.css'
import { useEffect, useState } from 'react';

function F1() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("https://dummyjson.com/users")
      .then((res) => {
        if (res.status === 200) {
          setData(res.data.users); // Access the 'users' array from the response
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  }, []);

  const renderTableRows = () => {
    return data.map((user, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>
          <img src={user.image} alt="Profile Pic" width="50" height="50" />
        </td> 
        <td>{user.firstName}</td>
        <td>{user.lastName}</td> 
        <td>{user.gender}</td>
        <td>{user.email}</td>
        <td>{user.username}</td>
        <td>{user.domain}</td>
        <td>{user.ip}</td>
        <td>{user.university}</td>
      </tr>
    ));
  }

  return (
    <div className="tabledesign">
      <h1>Dummy Data</h1>
      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Profile Pic</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {renderTableRows()}
        </tbody>
      </table>
    </div>
  );
}

export default F1;
