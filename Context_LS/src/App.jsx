import { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './Components/TodoForm';
import { TodoProvider } from './Contexts/TodoContext';
import TodoItem from './Components/TodoItem';

function App() {
  const [todos, settodos] = useState([]);

  const addTodo = (todo) => {
    settodos((prev) => [...prev, todo]);
    console.log(todo);
  };

  const removeTodo = (id) => {
    settodos((prev) => prev.filter((i) => i.id !== id));
  };

  const updateTodo = (id, todo) => {
    settodos((prev) => prev.map((item) => (item.id === id ? { ...todo, id } : item)));
  };

  const toggleCom = (id) => {
    settodos((prev) => prev.map((item) => (item.id === id ? { ...item, Completed: !item.Completed } : item)));
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (todos && todos.length > 0) {
      settodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTodo, removeTodo, updateTodo, toggleCom }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
