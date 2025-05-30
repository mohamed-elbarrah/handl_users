"use client";
import React, { useRef } from 'react'
import { useContext } from 'react';
import UsersContext from '../context/UsersContext';

export default function UsersAdd() {
  const fullName = useRef(null);
  const country = useRef(null);

  const { lastId, addUser } = useContext(UsersContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setLastId(lastId + 1);

    // console.log({name: fullName.current.value, country: country.current.value});

    addUser({
      payload: {
        id: lastId+1,
        fullName: fullName.current.value,
        country: country.current.value
      },
    })
    fullName.current.value = '';
    country.current.value = '';
  };

  return (
    <div>
        <h1 className="text-2xl font-bold text-center mt-10">Current ID: {lastId+1}</h1>
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto justify-center mt-10 flex flex-col gap-2">
            <input ref={fullName} type="text" id="fullName" name="fullName" className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full Name" required />
            <select ref={country} id="countries" name="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">Select you country</option>
                <option value="MA">Morocco</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="DE">Germany</option>
            </select>
            <button type="submit" className="bg-emerald-600 px-4 py-1 font-medium text-white rounded-md cursor-pointer">Add User</button>
        </form>
    </div>
  )
}
