import React from "react";
import { User } from "./userTypes";
import { useDispatch } from "react-redux";
import { showModal } from "../../features/modal/modal";
import "./User.css";
interface Data {
  user: User;
}
const UserItem: React.FC<Data> = ({ user }) => {
  const dispatch = useDispatch();
  const delteUser = (): React.MouseEventHandler<HTMLButtonElement> | any => {
    console.log("clicked");
    dispatch(showModal());
  };
  return (
    <div className="user">
      <div>image</div>
      <div>
        <p>{user.name}</p>
      </div>
      <div>
        <button className="del-btn" onClick={() => delteUser()}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default UserItem;
