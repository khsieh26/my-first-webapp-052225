import ToDoList from '../components/ToDoList';

export default function Todos() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <ToDoList />
    </div>
  );
}