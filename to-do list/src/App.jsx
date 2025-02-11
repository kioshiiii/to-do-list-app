import { useState } from 'react'
import Task from './components/Tasks'
import Members from './components/Members'

function App() {
  return (
    <>
    <h1 className='font-bold text-4xl text-center mt-20 '>To-Do List</h1>
    
    <div className='text-lg mt-15 font-[500] '>
          <Task message= "Learn React"/>
          <Task message= "Build a To-Do List"/>
          <Task message= "Master Javascript"/>
          <Task message= "Apply for Jobs"/>
    </div>
    
    <div>
          <button className='bg-sky-400 hover:bg-sky-600  text rounded-md text-zinc-50 absolute right-166 px-6 py-2 mt-7'onClick={() => alert('Kupal')}>Add</button>
          <button className='bg-red-500 hover:bg-red-600 text rounded-md text-zinc-50 absolute right-140 px-5 py-2 mt-7'onClick={() => alert('kupal talaga')}>Delete</button>
    </div>
    

    <div className='text-3xl mt-40 ml-140'>
          <h3 className='text-4xl mb-3'>Members:</h3>
          <Members Fullname="Jhuren B. Herrera" className="mb-2.5"/>
          <Members Fullname="Alexander James M. Persia"/>
    </div>
    </>
  )
}


export default App
