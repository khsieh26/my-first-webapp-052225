'use client';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  // Determine message based on count
  let message;
  if (count > 0) {
    message = "Counter is positive!";
  } else if (count < 0) {
    message = "Counter is negative!";
  } else {
    message = "Counter is zero!";
  }

  // Determine text color based on count
  let textColorClass;
  if (count > 0) {
    textColorClass = "text-green-400";  // Lighter shade for dark mode compatibility
  } else if (count < 0) {
    textColorClass = "text-red-400";    // Lighter shade for dark mode compatibility
  } else {
    textColorClass = "text-gray-400";   // Lighter shade for dark mode compatibility
  }

  return (
    <div className="card p-6">
      <h2 className="text-2xl font-bold mb-4">Counter</h2>
      <p className="text-4xl font-bold mb-4">{count}</p>
      
      {/* New conditional message */}
      <p className={`mb-4 ${textColorClass}`}>{message}</p>
      
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-[var(--primary)] text-white rounded-md hover:bg-[var(--primary-hover)] transition-colors duration-200"
        >
          Decrease
        </button>
        
        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-[var(--card-bg)] text-[var(--foreground)] border border-[var(--border)] rounded-md hover:bg-[var(--border)] transition-colors duration-200"
        >
          Reset
        </button>
        
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-[var(--primary)] text-white rounded-md hover:bg-[var(--primary-hover)] transition-colors duration-200"
        >
          Increase
        </button>
      </div>
    </div>
  );
}