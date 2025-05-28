// src/app/counter/page.tsx
import Counter from '../components/Counter'; // Adjust path as needed

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold mb-4">Counter Page</h1>
      {/* The Counter component should be rendered directly, not in a way that might block clicks */}
      <Counter />
    </div>
  );
}