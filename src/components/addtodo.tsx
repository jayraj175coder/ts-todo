import React ,{useState} from 'react'

const addtodo = () => {

    const [todo, setTodo]=useState('');

    const handleSubmit =(e)=>{
        e.preventDefault();
    }
  return (
    <div>
      
      <h3>Todo list</h3>
      
      <form onSubmit={handleSubmit}>
      <input type="text" value={todo} onChange={(e)=>{setTodo(e.target.value)}}/>

      <button type="submit" >Add todos here</button>
      </form>
    </div>
  )
}

export default addtodo
