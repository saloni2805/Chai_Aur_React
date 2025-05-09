import { useState, useEffect } from 'react'
import { ToDoContextProvider } from './contexts/index'
import './App.css'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    console.log("add vala todo", todo)
    setTodos((prev) => {
      console.log("prev", prev)  //useState made je pn ky by default asel like [],{},"" it stores the previous or all the values in it ...
      return [{ todo, ...todo }, ...prev]
    })
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id
      ? { ...prevTodo, complete: !prevTodo.complete }
      : prevTodo
    )))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))  //Converts the data in array of object format from string format
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))   //Converts the data in String format from Array of object format
  }, [todos])

  return (
    <ToDoContextProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {
              todos.map((todo) => (
                <div key={todo.id} className='w-full' >
                  <TodoItem todo={todo} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </ToDoContextProvider >
  )
}

export default App
