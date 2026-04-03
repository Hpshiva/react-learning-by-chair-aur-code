import React from "react";
import { useContext } from "react";
import { UserContext } from "../context-api/Context";

function UserName() {
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <p>UserName</p>
      {user.map((item, index) => {
        return (
            <>
                <div className="flex gap-4">

            <p>{user[index].name}</p> <p>{user[index].age}</p>
                </div>
          </>
        );
      })}
    </div>
  );
}

export default UserName;
