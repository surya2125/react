import React, { createContext, useContext } from "react";

export const TodoContext = createContext({
  todo: [],

  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  markTodoAsComplete: (id, status) => {},
  makeTodoPriority: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
