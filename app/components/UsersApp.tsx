'use client'

import React, { useState } from "react";
import UsersTable from "./UsersTable";
import UsersAdd from "./UsersAdd";

const InitialUsers = [];

export default function UsersApp() {

  const [users, setUsers] = useState(InitialUsers);
  const [lastId, setLastId] = useState(InitialUsers.length);

  const addUser = (data) => {
    setUsers((prevState) => [...prevState, data.payload]);
    setLastId((prevState) => prevState + 1);
    console.table(data.payload);
  };


  return (
    <>
      <h1 className="text-2xl font-bold mb-2">Users App</h1>

      <UsersTable users={users} />

      <UsersAdd lastId={lastId} onAddUser={addUser}/>
    </>
  );
}
