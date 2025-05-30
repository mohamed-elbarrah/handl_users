"use client";
import { createContext, use, useState } from "react";

const UsersContext = createContext({
  users: [],
  lastId: 0,
});



export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 1, fullName: "Mohamed", country: "Morocco" },
    { id: 2, fullName: "Ahmed", country: "Algeria" },
    { id: 3, fullName: "Fatima", country: "Tunisia" },
    { id: 4, fullName: "Amina", country: "Egypt" },
    { id: 5, fullName: "Youssef", country: "Libya" },
  ]);
  const [lastId, setLastId] = useState(users.length);

  
    // Function to add a new user
  const addUser = (data) => {
    setLastId((prevId) => prevId + 1);

    // alert("addUser called");
    console.table(data.payload);
    setUsers((prevUsers) => [...prevUsers, data.payload]);
  };
  

  return (
    <UsersContext.Provider value={{ users: users, lastId: lastId, addUser}}>
      {children}
    </UsersContext.Provider>
  );
};
export default UsersContext;
// export const useUsersContext = () => {
//   const context = useContext(UsersContext);
//   if (!context) {
//     throw new Error("useUsersContext must be used within a UsersProvider");
//   }
//   return context;
// }
