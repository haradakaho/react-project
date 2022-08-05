import React from 'react'

const Todo = ({todo, toggleTodo}) => {
  const updateTodoCompleted = () => {
    toggleTodo(todo.id);
  };

  return (
    <div className="list">
      <label className="label">
        <input type = "checkbox" checked={todo.completed} onChange={updateTodoCompleted}></input>
        {todo.name}
      </label>
    </div>
  );
};

export default Todo;