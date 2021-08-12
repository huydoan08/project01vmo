import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  todosSelector,
  addTodos,
  deleteTodo,
  markCompletedTodo,
  todoFilters,
  todoFilter,
} from "../../store/todosapp/Reducer";

const Section = () => {

  const todos = useSelector(todosSelector);

  const filters = useSelector(todoFilters);

  const filter = useSelector(todoFilter);

  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  const addSingleTodo = (event) => {
    event.preventDefault();
    if (event.keyCode === 13) {
      dispatch(addTodos(title));
      setTitle('');
    }
  };

  const deleteSingleTodo = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  const toggleTodoCompleted = (todoId) => {
    dispatch(markCompletedTodo(todoId));
  };

  return (
    <div>
      <header>
        <h1 className="absolute -top-40 w-full text-8xl text-red-400">todos-list</h1>
        <input
          onKeyUp={addSingleTodo}
          className="new-todo relative m-0 pl-12 w-full text-2xl p-2 rounded-sm box-border"
          placeholder="What needs to be done?"
          value={title}
          onChange={changeTitle}
          autofocus
        />
        <label className="toggle-all"></label>
      </header>
      <section className="main">
        <ul className="todo-list  m-0 p-0 list-none">
          {todos.filter(filters[filter]).map((todo) => (
            <li className=" completed relative p-4">
              <div className="flex flex-start">
                <input
                  className="w-10 h-5 mt-3 mr-5"
                  type="checkbox"
                  checked={todo.isCompleted}
                  onChange={toggleTodoCompleted.bind(this, todo.id)}
                />
                <label className={todo.isCompleted ? 'todocompleted' : ''}>
                  {todo.title}
                </label>
                <button
                  className="destroy"
                  onClick={() => deleteSingleTodo(todo.id)}
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Section;
