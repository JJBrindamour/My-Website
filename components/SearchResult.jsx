import React from 'react'

const SearchResult = ({ result }) => {
  return (
    <div className='h-96 bg-forest-1 rounded-2xl p-6 border-accent-1 border-4'>
      <h1 className='font-bold text-2xl'>{result.title}</h1>
      <hr className='border-b-2 my-2'/>
      <p className="">{result.excerpt}</p>
    </div>
  )
}

export default SearchResult