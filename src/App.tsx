import { AddTodo } from "./components/add-todo";
import { TodoList } from "./components/todo-list";

export function App() {
  return (
    <div>
      <TodoList />
      <AddTodo />
    </div>
  )
}
