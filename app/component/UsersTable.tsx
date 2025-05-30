"use client";
import React from "react";
import{ useContext} from "react";
import UsersContext, { UsersProvider } from "../context/UsersContext";

export default function UsersTable() {

    const { users } = useContext(UsersContext);
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              #Id
            </th>
            <th scope="col" className="px-6 py-3">
              Fll Name
            </th>
            <th scope="col" className="px-6 py-3">
              Contry
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>

        {users.map((user, key) => (
            <tr key={key} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                {user.id}
                </th>
                <td className="px-6 py-4">{user.fullName}</td>
                <td className="px-6 py-4">{user.country}</td>
                <td className="px-6 py-4">
                <button className="bg-emerald-600 px-4 py-1 font-medium text-white rounded-md cursor-pointer">Edit</button>
                <button className="bg-red-600 px-4 py-1 font-medium text-white rounded-md cursor-pointer ml-2">Delete</button>
                </td>
            </tr>
        ))}


          {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              1
            </th>
            <td className="px-6 py-4">mohamed</td>
            <td className="px-6 py-4">morocco</td>
            <td className="px-6 py-4"><button className="bg-emerald-600 px-4 py-1 font-medium text-white rounded-md cursor-pointer">Edit</button> <button className="bg-red-600 px-4 py-1 font-medium text-white rounded-md cursor-pointer">Delete</button></td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}
