import './App.css';
import { TodoForm } from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TodoList />
      <TodoForm handleAction='add'/>
    </div>
  );
}

export default App;
