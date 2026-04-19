import React from "react";

function Dashboard() {
  const users = [
    { id: 1, name: "Shiva", role: "Frontend Dev", status: "Active" },
    { id: 2, name: "Kumar", role: "Backend Dev", status: "Offline" },
    { id: 3, name: "Rahul", role: "Designer", status: "Active" },
    { id: 4, name: "Ankit", role: "Manager", status: "Busy" },
    { id: 5, name: "Sneha", role: "QA Tester", status: "Active" },
  ];

  return (
    <div className="p-6 bg-gray-900 text-white h-fit rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-blue-500 p-4 rounded-lg">
          <h2 className="text-xl">Users</h2>
          <p className="text-2xl font-bold">120</p>
        </div>
        <div className="bg-green-500 p-4 rounded-lg">
          <h2 className="text-xl">Revenue</h2>
          <p className="text-2xl font-bold">$12,400</p>
        </div>
        <div className="bg-purple-500 p-4 rounded-lg">
          <h2 className="text-xl">Orders</h2>
          <p className="text-2xl font-bold">320</p>
        </div>
      </div>

      {/* User Table */}
      <div className="bg-gray-800 p-4 rounded-lg">
        <h2 className="text-xl mb-4">Team Members</h2>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="py-2">Name</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-gray-700">
                <td className="py-2">{user.name}</td>
                <td>{user.role}</td>
                <td>
                  <span
                    className={`px-2 py-1 rounded ${
                      user.status === "Active" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
