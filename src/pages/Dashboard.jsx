import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Dashboard = () => {
  const stats = [
    { label: "Total Passwords", value: "48", icon: "🔑" },
    { label: "Weak Passwords", value: "3", icon: "⚠️" },
    { label: "Strong Passwords", value: "45", icon: "💪" },
    { label: "Reused Passwords", value: "2", icon: "🔄" }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        <div className="mycontainer">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-slate-800 dark:text-white">
              Dashboard
            </h1>
            <button className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-300">
              Add New Password
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-slate-800 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-600 dark:text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
              Recent Activity
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                <div className="flex items-center gap-4">
                  <span className="text-xl">🔑</span>
                  <div>
                    <div className="font-medium text-slate-800 dark:text-white">Password Updated</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Google Account</div>
                  </div>
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">2 hours ago</div>
              </div>
              {/* Add more activity items */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard; 