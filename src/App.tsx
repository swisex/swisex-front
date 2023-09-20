import React from "react";
import "./App.css";
import Login from "./features/auth/Login";
import { useAppSelector } from "./app/hooks";
import { selectAccessToken } from "./features/auth/authSlice";
import TabBar from "./features/exercise/TabBar";

function App() {
  const accessToken = useAppSelector(selectAccessToken);
  if (!accessToken) {
    return <Login />;
  } else {
    return <TabBar />;
  }
}

export default App;
