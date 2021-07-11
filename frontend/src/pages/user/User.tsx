import React, { useState, useEffect } from "react";
import axios from "axios";
import UserItem from "../user/UserItem";
import { User } from "./userTypes";
import { showLoader,hideLoader } from "../../features/modal/modal";
import { useDispatch } from "react-redux";
export default function Users() {
  const dispatch = useDispatch()
  const [user, setUser] = useState([]);
  useEffect(() => {
    dispatch(showLoader())
    axios
      .get(`${process.env.REACT_APP_URL}/user`)
      .then((data) => {
        setUser(data.data.user);
        dispatch(hideLoader())
      })
      .catch((err) => {
        console.log(err);
        dispatch(hideLoader())
      });
  }, []);
  return (
    <div className="userItem">
      {user.length !== 0 &&
        user.map((data: User) => {
          return <UserItem key={data._id} user={data} />;
        })}
    </div>
  );
}
