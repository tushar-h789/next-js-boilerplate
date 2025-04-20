import React from 'react'

export default function DashboardHome() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h1 className="text-2xl font-semibold mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-lg font-medium">Total Users</h2>
          <p className="text-3xl font-bold mt-2">1,234</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg">
          <h2 className="text-lg font-medium">Revenue</h2>
          <p className="text-3xl font-bold mt-2">$5,678</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg">
          <h2 className="text-lg font-medium">Orders</h2>
          <p className="text-3xl font-bold mt-2">890</p>
        </div>
      </div>
    </div>
  );
}
