import React from 'react';
import Layout from '../../components/layout';

const FitnessDashboard = () => {
  // Sample workout data - in a real app this would come from an API or state
  const workoutData = [
    { hour: 1, duration: 1.325 },
    { hour: 2, duration: 2.300 },
    { hour: 3, duration: 3.000 },
    { hour: 4, duration: 4.000 },
    { hour: 5, duration: 5.500 },
    { hour: 6, duration: 6.000 },
    { hour: 7, duration: 7.500 },
    { hour: 8, duration: 8.500 },
    // Add more hours as needed
  ];

  return (
    <Layout>

    
    <div className="flex min-h-screen ml-20 bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white p-6 shadow-md">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <p className="mt-2 text-lg text-gray-600">Hi, Amanda!</p>
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Learn</h2>
          <p className="mt-1 text-gray-500">Let's take a look at your activity today</p>
        </div>
        
        <div className="space-y-4">
          <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Today's Activity
          </button>
          <button className="w-full py-2 px-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
            Workout History
          </button>
          <button className="w-full py-2 px-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
            Progress Charts
          </button>
          <button className="w-full py-2 px-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
            Settings
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Workout Results for Today</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {workoutData.map((item, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-blue-800">Hour {item.hour}</h3>
                <p className="text-2xl font-bold text-blue-600">{item.duration.toFixed(3)} hours</p>
              </div>
            ))}
          </div>
          
          {/* Summary Card */}
          <div className="mt-8 bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-xl text-white">
            <h3 className="text-xl font-semibold mb-2">Today's Summary</h3>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm opacity-80">Total Workout Time</p>
                <p className="text-3xl font-bold">8.500 hours</p>
              </div>
              <div>
                <p className="text-sm opacity-80">Active Hours</p>
                <p className="text-3xl font-bold">8</p>
              </div>
              <div>
                <p className="text-sm opacity-80">Avg. Duration</p>
                <p className="text-3xl font-bold">1.062h</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Activity Graph Placeholder */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Weekly Activity</h3>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
            [Activity Chart Placeholder]
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default FitnessDashboard;