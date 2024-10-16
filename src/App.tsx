import { Provider as ReduxProvider } from "react-redux";
import { Player } from "./pages/player";
import { store } from "./store";

import './styles/global.css';

export function App() {
  return (
    <div>
      <ReduxProvider store={store}>
        <Player />
      </ReduxProvider>
    </div>
  )
}
