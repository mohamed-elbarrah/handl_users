import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    
        <nav className="bg-gray-800 p-4 justify-items-center">
            <div>
                <Link href="/" className="text-gray-300 hover:text-white px-3">All users</Link>
                <Link href="/usersadd" className="text-gray-300 hover:text-white px-3">Add new user</Link>
            </div>
        </nav>
    
  )
}
