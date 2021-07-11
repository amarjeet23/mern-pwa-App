import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../login/Login.css";
const Signup: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const submitLogin = (): any => {
    axios
      .post(
        "http://localhost:8000/api/user/signup",
        {
          name,
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
        history.push("/login");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="page">
      login Here
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <button onClick={submitLogin}>signup</button>
    </div>
  );
};
export default Signup;
