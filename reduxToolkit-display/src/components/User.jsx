import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDelete } from "../store/reducers/UserReducer";

function User() {
  const { users } = useSelector((state) => state.UserReducer);

  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(userDelete(index));
  };
  return (
    <div>
      {" "}
      {users.map((users, index) => {
        return (
          <h1 className="text-2xl" key={users.id}>
            {users.name}{" "}
            <span
              onClick={() => handleDelete(index)}
              className="px-4 cursor-pointer"
            >
              X
            </span>
          </h1>
        );
      })}
    </div>
  );
}

export default User;
