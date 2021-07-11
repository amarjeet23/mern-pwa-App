import { useState } from "react";
import * as React from "react";
import "./App.css";
import Loader from "./components/Loader/Loader"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/register/Signup";
import Home from "./pages/home/Home";
import AlertModal from "./components/Modal/Modal";
// interface
export interface Props {
  name: string;
  priority?: boolean;
}
// Type
type stateData = {
  value: number;
  name: string;
};
// Generic
function Add<T, U>(arg1: T, arg2: U): any {
  return;
}
Add<number, string>(5, "arrr");

// enum
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

const App: React.FC<Props> = (props) => {
  const [value] = useState<stateData>({ value: 5, name: "Amarjeet yadav" });
  return (
    <div className="App">
      <Loader/>
      <AlertModal />
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Signup />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
