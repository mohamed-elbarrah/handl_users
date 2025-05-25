'use client'

import React, { useState, createContext  } from "react";
import UsersTable from "./UsersTable";
import UsersAdd from "./UsersAdd";
import { create } from "domain";
import UsersEdit from "./UsersEdit";


export const UsersContext = createContext({
  users: [],
  lastId: 0,
  addUser: () => null,
});



const InitialUsers = [];

export default function UsersApp() {

  const [users, setUsers] = useState(InitialUsers);
  const [lastId, setLastId] = useState(InitialUsers.length);

  // pop up edit
  const [editingUser, setEditingUser] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false); // show/hide popup edit

  const openEditPopup = (user) => {
    setEditingUser(user);
    setIsEditOpen(true);
  };

  const closeEditPopup = () => {
    setEditingUser(null);
    setIsEditOpen(false);
  }

  const updateUser = (updateUser) => {
    setUsers((prevState) =>
      prevState.map((user) => 
        user.id === editingUser.id ? updateUser : user
    )
  );
  closeEditPopup();
  };

  const addUser = (data) => {
    alert("ok");
    setUsers((prevState) => [...prevState, data.payload]);
    setLastId((prevState) => prevState + 1);
    console.table(data.payload);
  };


  return (
    <>
      <UsersContext.Provider value={{ users, lastId, addUser, closeEditPopup,         updateUser,
      onEditUser: openEditPopup,
      editingUser,
      isEditOpen,
      }}>

        <h1 className="text-2xl font-bold mb-2">Users App</h1>
        <UsersTable />
        <UsersAdd />
        <UsersEdit />

      </UsersContext.Provider>
    </>


  );
}
