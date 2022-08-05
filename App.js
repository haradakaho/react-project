import TodoList from "./TodoList";
import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import "./TodoList.css"
import ApiFetch from "./ApiFetch";

function App() {
  const [todoList, setTodoList] = useState([]);

  const todoNameRef = useRef();

  const LOCAL_STORAGE_KEY = "todo"
  useEffect(() => {
    console.log(localStorage.getItem(LOCAL_STORAGE_KEY))
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    console.log(storedTodos)
    if((!Array.isArray(storedTodos) && storedTodos) || (Array.isArray(storedTodos) && storedTodos.length > 0)) {
      setTodoList(storedTodos)
    };
  }, []);

  useEffect(() => {
    console.log(todoList)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoList))
  }, [todoList]);

  const handleAddTodo = () => {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodoList(prevTodos => {
      return [...prevTodos, { id : uuidv4(), name: name, completed:false}]
    })
    todoNameRef.current.value = null;
  };

  const toggleTodo = (id) => {
    const newTodoList = [...todoList];
    const todo = newTodoList.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    console.log(todo.completed);
    console.log(id);
    setTodoList(newTodoList);
  };

  const handleClear = () => {
    const newTodoList = todoList.filter((todo) => !todo.completed)
    setTodoList(newTodoList); 
  };

  return (
    <div className="todoList">
      <ApiFetch />
      <h1 className="title">TodoList</h1>
      <TodoList todoList={todoList} toggleTodo={toggleTodo}/>
      <input type="text" ref={todoNameRef}/>
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClear}>Clear Completed</button>
      <div>{todoList.filter((todo) => !todo.completed).length} left to do</div>
    </div>
  );
}

export default App;