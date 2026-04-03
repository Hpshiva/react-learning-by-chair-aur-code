import React from "react";
import Profile from "./Profile";

function Dashboard({ data }) {
  return (
    <div>
      <p>Dashboard - props - {data}</p>
      <Profile data={data} />
    </div>
  );
}

export default Dashboard;
