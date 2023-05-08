import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import { store } from "./redux/countStore.ts";
import { store } from "./redux/store.ts";
import ErrorPage from "./pages/ErrorPage.tsx";
import SignUp from "./pages/SignUp.tsx";
import Main from "./pages/Main.tsx";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<ErrorPage />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/main" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
