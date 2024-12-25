import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <App />
          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              duration: 2000,
            }}
          />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
