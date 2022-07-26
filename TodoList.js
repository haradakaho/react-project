import React from 'react'
import Todo from './Todo'

const TodoList = ({todoList, toggleTodo}) => {
  return todoList.map((todo) => <Todo todo={todo} key={todo.name} toggleTodo={toggleTodo}/>);
};

export default TodoList;
