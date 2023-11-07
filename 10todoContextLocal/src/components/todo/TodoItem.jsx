import React, { useEffect, useState } from "react";
import { useTodo } from "../../contexts";

const TodoItem = ({ todo }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState("");
  const [completedTodo, setCompletedTodo] = useState(false);
  const { updateTodo, markTodoAsComplete, deleteTodo, makeTodoPriority } =
    useTodo();

  const editTodo = () => {
    updateTodo(todo?.id, { ...todo, todo: todoMsg });
    setIsEditable(false);
  };

  const completeTodo = () => {
    setCompletedTodo((prev) => !prev);
    markTodoAsComplete(todo.id);
  };

  const removeTodo = () => {
    deleteTodo(todo.id);
  };

  const makeTodoAsPriority = () => {
    makeTodoPriority(todo.id);
  };

  useEffect(() => {
    setTodoMsg(todo?.todo);
    setCompletedTodo(todo?.completed);
  }, [todo]);

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        completedTodo ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }  hover:-translate-y-1 hover:scale-110 hover:bg-lime-200 duration-300 cursor-pointer`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        value={completedTodo}
        checked={completedTodo}
        onChange={completeTodo}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isEditable
            ? "border-black/10 px-2"
            : "border-transparent cursor-pointer"
        }`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isEditable}
      />
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 "
        onClick={makeTodoAsPriority}
        disabled={completedTodo}
      >
        {/* {isEditable ? "📁" : "✏️"} */}⭐
      </button>
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (completedTodo) return;
          if (isEditable) {
            editTodo();
          } else setIsEditable((prev) => !prev);
        }}
        disabled={completedTodo}
      >
        {isEditable ? "📁" : "✏️"}
      </button>
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => removeTodo(todo?.id)}
      >
        ❌
      </button>
    </div>
  );
};

export default TodoItem;
