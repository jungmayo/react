import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CountProvider } from "./context/CountContext.jsx";
import { UsersProvider } from "./context/UsersContext.jsx";
import { Provider} from 'react-redux'
import store from "./store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Context Provider로 감싸서 App 하위 모든 컴포넌트에 컨텍스트 제공 */}
    <CountProvider>
      <UsersProvider>
        <Provider store={store}>
        <App />
        </Provider>
      </UsersProvider>
    </CountProvider>
  </StrictMode>
);