import React from "react";
import { Provider } from "react-redux";
import store, { persistor } from "./app/store.jsx";
import "./App.css";
import AppRouter from "./router/AppRouter.jsx";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import AppTheme from "./theme/AppTheme.jsx";

function App() {
  return (
    <AppTheme>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRouter />
        </PersistGate>
      </Provider>
      <ToastContainer />
    </AppTheme>
  );
}

export default App;
