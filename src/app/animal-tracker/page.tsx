'use client';
import { useState, useEffect } from 'react';
import AnimatedAnimals from '../components/AnimatedAnimals';

interface ApiResponse {
  message: string;
  time: string;
  items: Array<{
    id: string;
    name: string;
    description: string;
    created_at: string;
  }>;
}

export default function AnimalTrackerPage() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newItem, setNewItem] = useState({ name: '', description: '' });

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/hello');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      });
      
      if (!response.ok) {
        throw new Error('Failed to create item');
      }
      
      setNewItem({ name: '', description: '' });
      fetchData(); // Refresh the list
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      setError(errorMessage);
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-900">
      <AnimatedAnimals />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-2">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 text-white">Animal Tracker 🦁</h1>
          <p className="text-xl text-gray-300">Animals in Kaity's Zoo</p>
        </div>
        
        <div className="w-full max-w-md p-6 border border-gray-700 rounded-lg mb-8 bg-gray-800/95 shadow-xl backdrop-blur-sm">
          <div className="flex items-center mb-4">
            <h2 className="text-xl font-bold text-white">Add New Animal</h2>
            <span className="ml-2 text-2xl">🦒</span>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-200">Animal Name:</label>
              <input
                type="text"
                value={newItem.name}
                onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                placeholder="e.g., Leo the Lion"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-200">Animal Details:</label>
              <textarea
                value={newItem.description}
                onChange={(e) => setNewItem({...newItem, description: e.target.value})}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                placeholder="e.g., A friendly lion who loves afternoon naps"
                rows={3}
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors duration-200 shadow-lg hover:shadow-green-500/25"
            >
              Add Animal 🐾
            </button>
          </form>
        </div>
        
        <div className="w-full max-w-md p-6 border border-gray-700 rounded-lg bg-gray-800/95 shadow-xl backdrop-blur-sm">
          {isLoading && <p className="text-gray-300">Loading zoo animals...</p>}
          
          {error && (
            <p className="text-red-400">Error: {error}</p>
          )}
          
          {data && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">Zoo Residents</h3>
                <div className="text-2xl">🦁 🐘 🦒 🦊</div>
              </div>
              
              {data.items && data.items.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-700/50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Details</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Joined Zoo</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {data.items.map(item => (
                        <tr key={item.id} className="hover:bg-gray-700/50 transition-colors duration-150">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.id}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">{item.name}</td>
                          <td className="px-6 py-4 text-sm text-gray-300">{item.description || '-'}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                            {new Date(item.created_at).toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-300 mb-2">No animals in the zoo yet!</p>
                  <p className="text-2xl">🏞️</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}