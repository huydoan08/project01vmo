import { createSlice, nanoid } from "@reduxjs/toolkit";

const data = JSON.parse(localStorage.getItem("task"));

const todoSlice = createSlice({
  name: "todos",

  initialState: {

    allTodos: data ? data : [],
    filter: "all",
    filters: {
      all: () => true,
      active: (todo) => !todo.isCompleted,
      completed: (todo) => todo.isCompleted,
    },
  },

  reducers: {
    addTodos: (state, action) => {
      if (action.payload) {
        state.allTodos.push({
          id: nanoid(),
          title: action.payload,
          isCompleted: false,
        });
        localStorage.setItem("task", JSON.stringify(state.allTodos));
      }
    },

    deleteTodo: (state, action) => {
      const todoId = action.payload;
      state.allTodos = state.allTodos.filter((todo) => todoId !== todo.id);
      localStorage.setItem("task", JSON.stringify(state.allTodos));
    },

    markCompletedTodo: (state, action) => {
      const todoId = action.payload;
      state.allTodos = state.allTodos.map((todo) => {
        if (todo.id === todoId) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });
      localStorage.setItem("task", JSON.stringify(state.allTodos));
    },

    isClearCompleted: (state) => {
      state.allTodos = state.allTodos.filter((todo) => !todo.isCompleted);
      localStorage.setItem("task", JSON.stringify(state.allTodos));
    },

    isSwitchFilter: (state, action) => {
      const type = action.payload;
      state.filter = type;
    },
  },
});

const todosReducer = todoSlice.reducer;

export const todosSelector = (state) => state.todosReducer.allTodos;

export const todoFilters = (state) => state.todosReducer.filters;

export const todoFilter = (state) => state.todosReducer.filter;

export const {
                addTodos,
                deleteTodo,
                markCompletedTodo,
                isClearCompleted,
                isSwitchFilter
             } = todoSlice.actions;

export default todosReducer;
