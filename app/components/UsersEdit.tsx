import React, { use, useRef, useContext} from "react";
import { UsersContext } from "./UsersApp";



export default function UsersEdit() {
  const fullName = useRef(null);
  const country = useRef(null);


  
  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <div className="grid gap-6 mb-6 md:grid-cols-2">
      <h1 className="text-2xl font-bold">Updat infos</h1>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-5">
          <input
            type="text"
            id="fullName"
            ref={fullName}
            name="fullName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Full Name"
            required
          />
        </div>

        <div className="mb-5">
          <select
            id="country"
            ref={country}
            name="country"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Chose your Country</option>
            <option value="Morocco">Morocco</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="Germany">Germany</option>
          </select>
        </div>

        <div className="mb-5">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
