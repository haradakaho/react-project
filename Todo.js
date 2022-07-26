import React from 'react'

const Todo = ({todo, toggleTodo}) => {
  const updateTodoCompleted = (todo) => {
    toggleTodo(todo.id);
    todo.completed = !todo.completed
  };

  return (
    <div>
        <label>
        <input type="checkbox" onChange={updateTodoCompleted(todo)} checked={todo.completed}/>
        {todo.name}
        </label>
    </div>
  );
};

export default Todo;