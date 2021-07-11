import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./Login.css";
import { useDispatch } from "react-redux";
import { showLoader,hideLoader } from "../../features/modal/modal";
const Login: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const submitLogin = (): any => {
    dispatch(showLoader())
    axios
      .post(
        "http://localhost:8000/api/user/login",
        {
          email,
          password
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
            // Authorization: 'Bearer ' + token // if you use token
          }
        }
      )
      .then(function (response) {
        console.log(response);
        dispatch(hideLoader())
        history.push("/");
      })
      .catch(function (error) {
        dispatch(hideLoader())
        console.log(error);
      });
  };
  return (
    <div className="page">
      login Here
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={submitLogin}>Login</button>
    </div>
  );
};
export default Login;
