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
    <h1 className='text-6xl my-10 font-bold'>To-Do-List</h1>
    <div className="input">
     <input className='  bg-white w-80 py-2 px-3 text-black rounded-md text-xl' type="text" placeholder='Enter a task....' value={newTask} onChange={handleChange}/>
     <button onClick={addTask} className='px-5 py-2 text-xl font-bold text-white mx-3 rounded-md bg-green-500 cursor-pointer'>Add</button>
    </div>

    <ol className='my-5'>
      {tasks.map((task, index) =>
        <li className='my-3 px-5 w-150 bg-white text-black rounded-md py-3 flex justify-center  ' key={index} >
          <span className=' font-bold text-[26px] flex-1'>{task}</span>
          <button onClick={()=> deleteTask(index)} className='px-4 py-1 text-base  text-white font-bold mx-3 rounded-md cursor-pointer bg-red-500 ml-30'>Delete</button>
          <button onClick={()=> moveTaskUp(index)} className='text-2xl rounded-md mx-1 bg-blue-200'>👆</button>
          <button onClick={()=> moveTaskDown(index)} className='text-2xl rounded-md mx-1 bg-blue-200'>👇</button>
        </li>
      )}
    </ol>

  </div>
      
    </>
  )
}

export default App
