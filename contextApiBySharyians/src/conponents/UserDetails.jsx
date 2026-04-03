import React, { useContext } from "react";
import { UserContext } from "../context/Context";
import { useNavigate, useParams } from "react-router-dom";

function UserDetails() {
  const { user, setUser } = useContext(UserContext);
  const { id } = useParams();
  const navigate = useNavigate();
  //   console.log(user[id]);
  return (
    <div>
      <div className="  flex justify-between">
        <h1 className="text-4xl">User Details</h1>
      </div>
      <div className="flex gap-5 justify-center">
        <h1 className="text-2xl mt-[2rem]">{user[id].id}</h1>
        <h1 className="text-2xl mt-[2rem]">{user[id].name}</h1>
        <h1 className="text-2xl mt-[2rem]">{user[id].age}</h1>
      </div>

      <button
        onClick={() => navigate(-1)}
        className="mt-[3rem] bg-gray-200 py-3 px-5 rounded-full"
      >
        Go Back
      </button>
    </div>
  );
}

export default UserDetails;
