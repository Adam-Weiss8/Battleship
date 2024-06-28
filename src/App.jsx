import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>hello world
    <div className='mb-48 md:mb-2 lg:mb-1'>
    <Header foo="Foo prop" bar={x}>Hello</Header>
  </div>
  <div className='flex flex-row'>
    <div className='p-2 border-2 w-32 lg:bg-red-200 h-32'>1</div>
    <div className='p-2 border-2 w-32 lg:w-48 h-32'>2</div>
    <div className='p-2 border-2 w-32 lg:w-48 h-32'>3</div>
    <div className='p-2 border-2 w-32 lg:w-48 h-32'>4</div>
  </div></>
  )
}

export default App
