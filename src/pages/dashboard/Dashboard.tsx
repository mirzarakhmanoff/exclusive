const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-700">Total Sales</h2>
          <p className="text-2xl font-bold text-green-500 mt-2">$24,000</p>
          <p className="text-sm text-gray-400">Compared to last month</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-700">New Users</h2>
          <p className="text-2xl font-bold text-blue-500 mt-2">1,200</p>
          <p className="text-sm text-gray-400">In the last 30 days</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-700">Products Sold</h2>
          <p className="text-2xl font-bold text-yellow-500 mt-2">8,500</p>
          <p className="text-sm text-gray-400">This quarter</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-700">
            Pending Orders
          </h2>
          <p className="text-2xl font-bold text-red-500 mt-2">32</p>
          <p className="text-sm text-gray-400">Requires attention</p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Sales Overview</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-gray-400 text-center">[Insert Chart Here]</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
