import React from "react";

function ClientList(props) {
  return (
    <ul>
      <li>User ID: {props.userID}</li>
      <li>First Name: {props.firstName}</li>
      <li>Last Name: {props.lastName}</li>
      <li>Email: {props.email}</li>
      <li>Password: {props.password}</li>
    </ul>
  );
}

export default ClientList;