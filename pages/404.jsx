import React from 'react'
import { Nav } from '../components'

const NotFound = () => {
  return (
    <>
      <Nav />
      <div className='flex flex-col justify-center items-center h-screen bg-deep-1 space-y-14 text-accent-1'>
        <h1 className="font-black text-8xl">Oops...</h1>
        <p className="text-4xl font-medium">That Page Doesn't Exist</p>
        <a href="/" className='bg-accent-1 text-deep-2 p-3 rounded-full font-bold hover:bg-accent-3 hover:text-deep-3 hover:-translate-y-1 transition duration-500'>Go Back Home</a>
      </div>
    </>
  )
}

export default NotFound