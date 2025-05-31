"use client";
import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react';
import UsersContext from '../context/UsersContext';
import { useParams } from 'next/navigation';

export default function DeleteUsers() {
  const fullName = useRef(null);
  const country = useRef(null);
  const params = useParams(); // Get the URL parameters using useParams from next/navigation
  const [currentUser, setCurrentUser] = useState(null); // State to hold the current user being edited

  const { deleteUser, users } = useContext(UsersContext);

  useEffect(() => {
    if (users && users.length > 0) {
      const user = users.find(user => user.id === parseInt(params.id));
      setCurrentUser(user);
      console.log(currentUser);
    }
  }, [users, params]);

console.log(currentUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setLastId(lastId + 1);

    // console.log({name: fullName.current.value, country: country.current.value});

    deleteUser({
      payload: {
        id: params.id,
      },
    })
  };

  return (
    <div className='container mx-auto mt-10 h-screen flex flex-col items-center justify-center'>
        <h1 className="text-2xl font-bold text-center m-4">Are you sure you want to delete user!!!</h1>
        <div>
          fullName: <span className='font-bold'> {currentUser?.fullName}</span>
          <br />
          country: <span className='font-bold'> {currentUser?.country}</span>
        </div>
        <button onClick={handleSubmit} className="bg-orange-600 px-4 py-1 font-medium text-white rounded-md cursor-pointer">Delete User</button>
    </div>
  )
}
