import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Dashboard Header */}
      <div className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-cyan-400">Dashboard</h1>
            <p className="text-slate-400">Welcome back! Here's your overview</p>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold">
              U
            </div>
            <div className="ml-3">
              <p className="font-medium">User Name</p>
              <p className="text-sm text-slate-400">user@example.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center">
                <span className="text-xl">👥</span>
              </div>
              <span className="text-green-500 text-sm">+12%</span>
            </div>
            <h3 className="text-2xl font-bold mb-1">8,282</h3>
            <p className="text-slate-400">Total Users</p>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center">
                <span className="text-xl">💰</span>
              </div>
              <span className="text-green-500 text-sm">+8%</span>
            </div>
            <h3 className="text-2xl font-bold mb-1">$12,842</h3>
            <p className="text-slate-400">Revenue</p>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center">
                <span className="text-xl">📈</span>
              </div>
              <span className="text-red-500 text-sm">-2%</span>
            </div>
            <h3 className="text-2xl font-bold mb-1">24.5%</h3>
            <p className="text-slate-400">Conversion</p>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center">
                <span className="text-xl">⏱️</span>
              </div>
              <span className="text-green-500 text-sm">+5%</span>
            </div>
            <h3 className="text-2xl font-bold mb-1">98.2%</h3>
            <p className="text-slate-400">Uptime</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h3 className="text-xl font-bold mb-4">Revenue Overview</h3>
            <div className="h-64 flex items-end space-x-2">
              <div className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-cyan-500/20 rounded-t-lg"
                  style={{ height: "40%" }}></div>
                <span className="text-xs text-slate-400 mt-2">Jan</span>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-cyan-500/30 rounded-t-lg"
                  style={{ height: "60%" }}></div>
                <span className="text-xs text-slate-400 mt-2">Feb</span>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-cyan-500/40 rounded-t-lg"
                  style={{ height: "45%" }}></div>
                <span className="text-xs text-slate-400 mt-2">Mar</span>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-cyan-500/50 rounded-t-lg"
                  style={{ height: "70%" }}></div>
                <span className="text-xs text-slate-400 mt-2">Apr</span>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-cyan-500/60 rounded-t-lg"
                  style={{ height: "55%" }}></div>
                <span className="text-xs text-slate-400 mt-2">May</span>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-cyan-500 rounded-t-lg"
                  style={{ height: "85%" }}></div>
                <span className="text-xs text-slate-400 mt-2">Jun</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h3 className="text-xl font-bold mb-4">Traffic Sources</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Direct</span>
                  <span className="text-sm text-slate-400">42%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-cyan-500 h-2 rounded-full"
                    style={{ width: "42%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Social</span>
                  <span className="text-sm text-slate-400">28%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-cyan-500 h-2 rounded-full"
                    style={{ width: "28%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Referral</span>
                  <span className="text-sm text-slate-400">18%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-cyan-500 h-2 rounded-full"
                    style={{ width: "18%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Organic</span>
                  <span className="text-sm text-slate-400">12%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-cyan-500 h-2 rounded-full"
                    style={{ width: "12%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
          <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">👤</span>
              </div>
              <div className="ml-4">
                <p className="font-medium">New user registered</p>
                <p className="text-sm text-slate-400">
                  John Doe created an account 2 minutes ago
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">💳</span>
              </div>
              <div className="ml-4">
                <p className="font-medium">Payment received</p>
                <p className="text-sm text-slate-400">
                  Customer #1234 paid $120.00 for services
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">🔧</span>
              </div>
              <div className="ml-4">
                <p className="font-medium">System update completed</p>
                <p className="text-sm text-slate-400">
                  Security patches were applied successfully
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
