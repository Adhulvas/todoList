import logo from './logo.svg';
import './App.css';
import TodoList from './Components/TodoList/TodoList.jsx'
import Button from './Components/Button/Button.jsx'
import { useState } from 'react';


function App() {
  const [todos,setTodos]=useState([])
  const [newInput,setInput]=useState('')
  const inputChange=(event)=>{
    setInput(event.target.value)
  }
  const addNewTodo=()=>{
    setTodos([...todos, {label:newInput, completed:false}])
    setInput('')
  }
  const makeTodoDone=(index)=>{
    const temporary=[...todos]
    temporary[index].completed=true
    setTodos(temporary)
  }
  const deleteTodo=(index)=>{
    const temp=[...todos]
    temp.splice(index,1)
    setTodos(temp)
  }

  return (
    <div className='Todo-container'>
      <div className='Todo-box'>
        <div className='input-area'>
          <input placeholder='Todo name' className='name-input' onChange={inputChange} value={newInput} />
          <Button label={'Add'} handleFunction={addNewTodo} />
        </div>
        <div>
          {todos.map((ele, index)=> <TodoList label={ele.label} count={index} key={index} completed={ele.completed} makeTodoDone={makeTodoDone} deleteTodo={deleteTodo} /> )}
        </div>
      </div>
    </div>
  );
}

export default App;
