"use client";
import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react';
import UsersContext from '../context/UsersContext';
import { useParams } from 'next/navigation';


export default function EditUser() {
  const [currentUser, setCurrentUser] = useState(null); // State to hold the current user being edited
  const fullName = useRef(null);
  const country = useRef(null);
  const prams = useParams(); // Get the URL parameters using useParams from next/navigation
  // console.log(prams);


  const { UpdatUser, users } = useContext(UsersContext);
  // console.log(users);
  // Find the user with the matching ID from the URL parameters
  useEffect(() => {

    if (users && users.length > 0) {
      const user = users.find(user => user.id === parseInt(prams.id));
      if (user) {
        setCurrentUser(user);
        fullName.current.value = user.fullName; // Set the input value to the user's full name
        setTimeout(() => {
        if (country.current) {
          country.current.value = user.country || ''; // Set the select value to the user's country
        }
      }, 0);

      } else {
        console.error(`User with ID ${prams.id} not found.`);
      }
    };

  }, [users, prams]);


  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({name: fullName.current.value, country: country.current.value});
    console.log({
      id: prams.id,
      fullName: fullName.current.value,
      country: country.current.value
    });

    UpdatUser({
      payload: {
        id: parseInt(prams.id), // Use the ID from the URL parameters
        fullName: fullName.current.value,
        country: country.current.value
      },
    });
    
  };

  return (
    <div>
        <h1 className="text-2xl font-bold text-center mt-10">Updat info for ID: {prams.id}</h1>
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto justify-center mt-10 flex flex-col gap-2">
            <input ref={fullName} type="text" id="fullName" name="fullName" className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full Name" required />
            <select defaultValue={currentUser?.country || ''} ref={country} id="countries" name="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option defaultValue={currentUser?.country || ''}>{currentUser?.country || ''}</option>
                <option value="Morocco">Morocco</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="Germany">Germany</option>
            </select>
            <button type="submit" className="bg-emerald-600 px-4 py-1 font-medium text-white rounded-md cursor-pointer">Update Info</button>
        </form>
    </div>
  )
}
