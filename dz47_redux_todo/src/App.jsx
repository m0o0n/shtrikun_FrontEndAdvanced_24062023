import { useSelector } from 'react-redux';
import './App.css';
import { Todo } from './components/Todo';
import { TodoForm } from './components/TodoForm';

function App() {

  const todos = useSelector(state => state.todo.todos)

  return (
    <div className="App">
      {
        todos.map(
          ({ title, body, isDone, id }) =>
            <Todo
              key={id}
              id={id}
              title={title}
              body={body}
              isActive={isDone} 
            />
        )
      }
      <TodoForm />
    </div>
  );
}

export default App;
