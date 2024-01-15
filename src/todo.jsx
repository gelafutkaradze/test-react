import React, { useEffect, useState } from 'react'
import { TodoItem } from './todo-item'
import photo from './todo-img.png'

export const TodoLayout = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000)
  }, [])

  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([])

  return (
    <div className='main-container'>
      <div className='img-container'>
        <h1 className='time'>{time.toLocaleTimeString()}</h1>
        <img className='img' src={photo}></img>
      </div>
      <div className='input-container'>
        <input
          placeholder='Note'
          value={inputValue}
          onChange={event => {
            setInputValue(event.target.value)
          }}
        ></input>
        <button
          className='plus-btn'
          onClick={() => {
            setTodos(prev => [...prev, { title: inputValue }])
            setInputValue('')
          }}
        >
          <i className='fa-solid fa-plus plus-icon'></i>
        </button>
      </div>
      {todos.map(todo => {
        return <TodoItem todo={todo} todos={todos} setTodos={setTodos} />
      })}
    </div>
  )
}
