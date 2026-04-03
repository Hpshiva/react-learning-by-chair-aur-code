import React from "react";
import UserName from "./UserName";

function Profile({ data }) {
  return (
    <div>
      <p>Profile - props - {data}</p>
      <UserName data={data} />
    </div>
  );
}

export default Profile;
