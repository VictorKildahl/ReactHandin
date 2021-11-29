import React, { useEffect, useState } from "react";
import ClientList from "./ClientList";
import "./SeeListOfClients.css";

function SeeListOfClients() {
  const [listOfClients, setListOfClients] = useState([]);

  const GetClients = async () => {
    await fetch("https://afe2021fitness.azurewebsites.net/api/Users/Clients", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    }).then((response) => {
      response.json().then((data) => {
        setListOfClients(data);
      });
    });
  };

  useEffect(() => {
    GetClients();
  }, []);

  const clients = listOfClients.map((item) => (
    <ClientList
      userID={item.userId}
      firstName={item.firstName}
      lastName={item.lastName}
      email={item.email}
    />
  ));

  console.log(clients);
  return (
    <div>
      <h3>Clients</h3>
      <div>{clients}</div>
    </div>
  );
}

export default SeeListOfClients;
