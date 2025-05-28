'use client';
import { useState, useEffect } from 'react';

// Define the shape of our API response
interface ApiResponse {
  message: string;
  time: string;
  features: string[];
}

export default function ApiDemoPage() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/hello');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        // Handle different error types
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold mb-4">API Demo</h1>
      
      <div className="w-full max-w-md p-4 border border-gray-200 rounded-lg">
        {isLoading && <p>Loading data...</p>}
        
        {error && (
          <p className="text-red-500">Error: {error}</p>
        )}
        
        {data && (
          <div>
            <p className="mb-2"><strong>Message:</strong> {data.message}</p>
            <p className="mb-2"><strong>Time:</strong> {new Date(data.time).toLocaleString()}</p>
            <p className="mb-2"><strong>Features:</strong></p>
            <ul className="list-disc pl-5">
              {data.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}