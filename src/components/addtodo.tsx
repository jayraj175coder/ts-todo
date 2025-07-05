import React ,{useState} from 'react'

const addtodo = () => {

    const [todo, setTodo]=useState('');
  return (
    <div>
      
      <h3>Todo list</h3>
      
      <button  value={todo} onClick={setTodo((value)=>value.target)}>
       Add todos
      </button>
    </div>
  )
}

export default addtodo
