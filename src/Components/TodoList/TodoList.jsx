import React from 'react'
import './TodoList.css'


function TodoList({count,label,completed,makeTodoDone,deleteTodo}) {
  return (
    <div className='List-item'>
      <h3 className={`${completed? 'done' : ""}`}> {count+1}. {label}</h3>
      <div>
        <button onClick={()=>deleteTodo(count)} className='Remove-button'>Remove</button>
        {!completed && <button onClick={()=>makeTodoDone(count)} className='Done-button'>Done</button>}
      </div>
    </div>
  )
}

export default TodoList