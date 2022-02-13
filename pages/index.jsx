import { useState } from 'react'
import { useRouter } from 'next/router'
import { Nav } from '../components'


export default function Home() {
  const [searchData, setSearchData] = useState('')
  const router = useRouter()

  const search = (event) => {
    event.preventDefault()

    router.push(`/search/${searchData.replace(' ', '-')}`)
    setSearchData('')
    console.log(searchData)
  }
  
  return (
    <>
      <Nav />
      <div className="bg-deep-1">
        <div className="h-screen flex justify-center items-center space-x-10">
          <img src="/python.png" alt="Image of Code" className='w-[30rem] h-[24rem] m-4 border border-ocean border-4'/>
          <div className="flex flex-col justify-center items-center text-center">
          <div className="h-[1rem]"></div>
            <h1 className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent-1 to-comp-2 px-8 py-4 rounded-full'>
              The Programming Mega-Library
            </h1>

            <p className="text-2xl font-extrabold text-accent-2">The All-in-One Coding Cheat-Sheet</p>

            <div className="flex items-center mt-12 py-2 px-4 rounded-full bg-deep-3 space-x-4 border border-2 border-ocean">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ocean" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <form onSubmit={ search }>
                <input name='searchBox' value={ searchData } onChange={ (event) => setSearchData(event.target.value) } className='focus:outline-none bg-deep-3 text-ocean font-medium' type="text" placeholder='Search the Docs'/>
              </form>
            </div>
            <div className="h-[6rem]"></div>
          </div>
        </div>
        <div className="mx-auto bg-forest-3 h-screen">
          <div>

          </div>
        </div>
        <div className="mx-auto h-screen">
          <div>

          </div>
        </div>
      </div>
    </>
  )
}
