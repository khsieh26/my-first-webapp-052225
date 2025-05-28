'use client';
import { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  const removeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="card p-6">
      <h2 className="text-2xl font-bold mb-4">Todo List</h2>
      
      <div className="flex mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          className="flex-grow px-4 py-2 bg-[var(--card-bg)] text-[var(--foreground)] border border-[var(--border)] rounded-l-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all duration-200"
          placeholder="Add a new task..."
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-[var(--primary)] text-white rounded-r-md hover:bg-[var(--primary-hover)] transition-colors duration-200"
        >
          Add
        </button>
      </div>
      
      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li key={index} className="flex items-center justify-between px-4 py-2 bg-[var(--card-bg)] border border-[var(--border)] rounded-md">
            <span>{todo}</span>
            <button
              onClick={() => removeTodo(index)}
              className="text-[var(--primary)] hover:text-[var(--primary-hover)] transition-colors duration-200"
            >
              Delete
            </button>
          </li>
        ))}
        {todos.length === 0 && (
          <li className="px-4 py-2 text-[var(--foreground)] opacity-60 text-center">
            No tasks yet. Add one above!
          </li>
        )}
      </ul>
    </div>
  );
}