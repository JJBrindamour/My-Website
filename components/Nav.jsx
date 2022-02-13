import React from 'react'

const Nav = () => {
  return (
    <nav className="bg-accent-2 h-20 fixed inset-x-0">
      <div className="px-12 mx-auto py-4 text-deep-1 font-semibold">
        <div className='flex justify-between items-center'>
          <a href="/" className="flex items-center space-x-4 text-deep-1 hover:text-deep-3 transition duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>

            <h1 className='text-2xl font-bold'>The Programming Mega-Library</h1>
          </a>
          <div className="flex space-x-12">
            <div className="flex items-center space-x-4">
              <a href="/python" className="font-semibold hover:text-deep-3 transition duration-500">Python</a>
              <a href="/javascript" className="font-semibold hover:text-deep-3 transition duration-500">Javascript</a>
              <a href="/rust" className="font-semibold hover:text-deep-3 transition duration-500">Rust</a>
            </div>
            <div className='flex items-center space-x-4'> 
              <a href='login' className='border border-deep-1 rounded-full border-4 p-2 rounded-lg hover:text-deep-3 hover:border-deep-3 transition duration-500'>Log in</a>
              <a href='signup' className='bg-deep-1 rounded-full p-3 text-accent-2 hover:text-accent-3 font-semibold rounded-lg hover:bg-deep-3 hover:text-blue-900 transition duration-500'>Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav