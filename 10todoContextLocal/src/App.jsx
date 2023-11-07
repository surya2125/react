import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TodoProvider } from "./contexts";
import TodoForm from "./components/todo/TodoForm";
import Todo from "./screens/todo/Todo";

function App() {
  return <Todo />;
}

export default App;
