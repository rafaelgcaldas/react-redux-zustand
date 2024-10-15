import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";

export function App() {
  return (
    <div>
      <ReduxProvider store={store}>
        <h1>teste</h1>
      </ReduxProvider>
    </div>
  )
}
