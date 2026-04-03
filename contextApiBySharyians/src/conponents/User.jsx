import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../context/Context";

function User() {
  const { user, setUser } = useContext(UserContext);
  // console.log(user);

  return (
    <div>
      <h1 className="text-4xl">User List</h1>

      <div className="my-5 p-4 flex flex-col gap-3 ">
        {user.map((item) => {
          return (
            <Link
              key={item.id}
              to={`/user/${item.id}`}
              className="bg-red-300 px-[4rem] py-[1rem] rounded-full text-white"
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default User;
