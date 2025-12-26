import { useState } from 'react'
import Navbar from './components/Navbar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
  <div className="container mx-auto bg-violet-100 p-4 my-5 rounded-xl min-h-[80vh] ">
    <div className="addTodo">
      <h2 className='text-xl font-bold' >Add a Todo</h2>
      <input className='bg-white' type="text" />
      <button className='bg-violet-600 hover:bg-violet-800 text-white py-1 px-3 rounded-md mx-5 text-sm font-bold '>Add</button>
    </div>

    <h2 className=' text-xl font-bold' >Your Todos</h2>
    <div className="todo">
      <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, laborum!</div>
      <div className="button">
        <button className='bg-violet-600 hover:bg-violet-800 text-white py-1 px-3 rounded-md mx-3 text-sm font-bold '>Edit</button>
        <button className='bg-violet-600 hover:bg-violet-800 text-white py-1 px-3 rounded-md mx-3 text-sm font-bold '>Delete</button>
      </div>

    </div>
  </div>
    </>
  )
}

export default App
