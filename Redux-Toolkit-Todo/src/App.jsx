import { useEffect } from 'react';
import './App.css';
import AddTodo from './Components/AddTodo';
import Todos from './Components/Todos';
import { useDispatch, useSelector } from 'react-redux';
import { addtodo } from './Features/Todo/TodoSlice'; 

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  useEffect(() => {
    // Retrieve todos from localStorage and add them to the Redux state
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos && savedTodos.length > 0) {
      savedTodos.forEach((todo) => dispatch(addtodo(todo.todomsg)));
    }
  }, []);

  useEffect(() => {
    
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
    <b><h1 >Todo With Redux-Toolkit</h1></b>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
