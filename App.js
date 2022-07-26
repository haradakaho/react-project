import TodoList from "./TodoList";
import React, { useState, useRef } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);

  const todoNameRef = useRef();

  const handleAddTodo = () => {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodoList([{id: "1", name: name, completed: false}]) 
    
    //   return [...prevTodoList, {id: "1", name: name, completed: false}];
    // });
    todoNameRef.current.value = null;
  };

  const toggleTodo = (id) => {
    const newTodoList = [...todoList];
    const todo = newTodoList.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodoList(newTodoList);
  };

  const handleClear = () => {
    const newTodoList = todoList.filter((todo) => !todo.completed)
    setTodoList(newTodoList); 
  };

  return (
    <>
      <TodoList todoList={todoList} toggleTodo={toggleTodo}/>
      <input type="text" ref={todoNameRef}/>
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClear}>Clear Completed</button>
      <div>{todoList.filter((todo) => !todo.completed).length} left to do</div>
    </>
  );
}

export default App;
