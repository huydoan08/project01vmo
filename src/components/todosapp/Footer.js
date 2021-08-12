import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  todosSelector,
  isClearCompleted,
  todoFilters,
  todoFilter,
  isSwitchFilter,
} from "../../store/todosapp/Reducer";

function Footer() {
  const todos = useSelector(todosSelector);

  const filters = useSelector(todoFilters);

  const filter = useSelector(todoFilter);

  const dispatch = useDispatch();

  const clearCompleted = () => {
    dispatch(isClearCompleted());
  };

  const switchFilter = (type) => {
    dispatch(isSwitchFilter(type));
  };

  return (
    <div>
      <footer className="flex justify-between text-gray-500 p-3 h-12 text-center rounded">
        <span className="text-left ">
          <strong>{todos.filter(filters.active).length}</strong> item left
        </span>
        <ul className=" text-center m-0 p-0 right-0 left-0 list-none inset-0">
          {Object.keys(filters).map((type) => {
            return (
              <li className="inline m-1 px-1 py-2 rounded">
                <a
                  className={filter === type && "selected"}
                  href="#"
                  onClick={() => switchFilter(type)}
                >
                  {type[0].toUpperCase() + type.slice(1)}
                </a>
              </li>
            );
          })}
        </ul>
        <span className="cursor-pointer" onClick={clearCompleted}>
          Clear completed
        </span>
      </footer>
    </div>
  );
}

export default Footer;
