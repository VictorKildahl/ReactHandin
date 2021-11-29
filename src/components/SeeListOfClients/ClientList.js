import React from "react";
import "./ClientList.css";

function ClientList(props) {
  return (
    <div className="Placement">
      <div className="box">
        <p>User ID: {props.userID}</p>
        <p>First Name: {props.firstName}</p>
        <p>Last Name: {props.lastName}</p>
        <p>Email: {props.email}</p>
      </div>
    </div>
  );
}

export default ClientList;
