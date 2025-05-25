import React, { use } from 'react'
import { useContext } from 'react';
import { UsersContext } from './UsersApp';




export default function UsersTable() {

    const context = useContext(UsersContext);



  return (
    <div>
      <table className="w-full text-md bg-white shadow-md rounded mb-4">
        <thead className="bg-gray-200 text-black">
            <tr className="border-b">
            <th className='text-left p-3 px-5'>ID</th>
            <th className='text-left p-3 px-5'>Full Name</th>
            <th className='text-left p-3 px-5'>Country</th>
            <th className='text-left p-3 px-5'>Action</th>
            </tr>
        </thead>
        <tbody>
            {/* <tr className='border-b hover:bg-orange-100 text-black'>
            <td className='p-3 px-5'>1</td>
            <td className='p-3 px-5'>Mohamed ElBarrah</td>
            <td className='p-3 px-5'>Moroco</td>
            <td className="p-3 px-5 flex justify-end"><button type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
            </tr> */}

            {
                (context.users.length > 0)? context.users.map((user, key) => (
                    <tr key={key} className='border-b hover:bg-orange-100 text-black'>
                        <td className='p-3 px-5'>{user.id}</td>
                        <td className='p-3 px-5'>{user.fullName}</td>
                        <td className='p-3 px-5'>{user.country}</td>
                        <td className="p-3 px-5 flex justify-end">
                        <button  type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Edit</button>
                        <button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
                        </td>
                    </tr>
                ))
                 
                : 

                (
                    <tr className='border-b hover:bg-orange-100 text-black'>
                        <td className='p-3 px-5' colSpan={4}>No context.users found</td> 
                    </tr>
                )
            }
        </tbody>
        </table>
    </div>
  );
};
