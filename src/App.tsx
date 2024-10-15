import { AddTodo } from "./components/add-todo";
import { TodoList } from "./components/todo-list";

import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";

export function App() {
  return (
    <div>
      <ReduxProvider store={store}>
        <TodoList />
        <AddTodo />
      </ReduxProvider>
    </div>
  )
}
