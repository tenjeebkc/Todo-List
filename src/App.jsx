import { useState } from 'react'
import Navbar from './components/Navbar';


function App() {
  // this is the array that holds the input value
  const [tasks, setTasks] = useState([]);
  // this is the input task
  const [newTask, setNewTask] = useState("");

  function addTask(){
    if (newTask.trim() !== "") {
      setTasks(t =>[...t, newTask]);
      setNewTask("")
    }
  }

  function moveTaskUp(index){
    if (index > 0){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index -1]] = 
      [updatedTasks[index - 1], updatedTasks[index]]
      setTasks(updatedTasks)
    } 
  }

 function moveTaskDown (index){
      if (index < tasks.length -1){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = 
      [updatedTasks[index + 1], updatedTasks[index]]
      setTasks(updatedTasks)
    }
    
  }

  function deleteTask (index){
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks)
  }

  const handleChange = (e) =>{
    setNewTask(e.target.value)
  }

  return (
    <>
    <Navbar/>
   
  <div className="to-do-list my-8 flex flex-col items-center ">
    <h1 className='md:text-6xl text-4xl my-10 font-bold'>To-Do-List</h1>
    <div className="input md:flex md:flex-row flex items-center flex-col">
     <input className='  bg-white md:w-80 w-75 py-2 px-3 text-black rounded-md md:text-xl' type="text" placeholder='Enter a task....' value={newTask} onChange={handleChange}/>
     <button onClick={addTask} className='w-20 py-2 text-xl md:my-0 mt-4 font-bold  text-white mx-3 rounded-md bg-green-500 cursor-pointer'>Add</button>
    </div>

    <ol className='my-6'>
      {tasks.map((task, index) =>
        <li className='my-3 px-2 w-80 md:w-150 bg-white text-black rounded-md md:py-3 py-2 flex justify-center' key={index} >
          <span className=' font-bold text-[20px] md:text-[26px] flex-1'>{task}</span>
          <button onClick={()=> deleteTask(index)} className='px-2 py-1  text-white font-bold mx-1 rounded-md cursor-pointer bg-red-500 md:ml-30'>Delete</button>
          <button onClick={()=> moveTaskUp(index)} className='md:text-2xl rounded-md mx-1 bg-blue-200'>👆</button>
          <button onClick={()=> moveTaskDown(index)} className='md:text-2xl rounded-md mx-1 bg-blue-200'>👇</button>
        </li>
      )}
    </ol>

  </div>
      
    </>
  )
}

export default App
