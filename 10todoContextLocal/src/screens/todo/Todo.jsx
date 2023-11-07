import React, { useEffect, useState } from "react";
import { TodoProvider } from "../../contexts";
import TodoForm from "../../components/todo/TodoForm";
import TodoItem from "../../components/todo/TodoItem";

const Todo = () => {
  const [todo, setTodo] = useState([]);

  const addTodo = async (data) => {
    await setTodo((prev) => [
      ...prev,
      { id: Date.now(), order: todo[todo.length - 1]?.order + 1 || 1, ...data },
    ]);
    console.log(todo[todo.length - 1]?.order + 1);
  };

  const updateTodo = (id, todo) => {
    setTodo((prev) => prev.map((e) => (e.id === id ? todo : e)));
  };

  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((e) => e.id !== id));
  };

  const markTodoAsComplete = (id) => {
    setTodo((prev) =>
      prev.map((e) => (e.id === id ? { ...e, completed: !e.completed } : e))
    );
  };

  const makeTodoPriority = async (id) => {
    const priorityTodo = await todo.filter((e) => e.id === id);
    setTodo((prev) =>
      prev.map((e) =>
        e.id === id
          ? { ...e, order: 1 }
          : {
              ...e,
              order: e.order > priorityTodo[0].order ? e.order : e.order + 1,
            }
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    setTodo(todos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  return (
    <TodoProvider
      value={{
        todo,
        addTodo,
        deleteTodo,
        markTodoAsComplete,
        updateTodo,
        makeTodoPriority,
      }}
    >
      <TodoForm />
      {todo
        .sort((a, b) => a.order - b.order)
        .map((todo, index) => {
          return (
            <div
              key={index}
              className="p-0.5 transition ease-in-out delay-150 "
            >
              <TodoItem todo={todo} />
            </div>
          );
        })}
    </TodoProvider>
  );
};

export default Todo;
