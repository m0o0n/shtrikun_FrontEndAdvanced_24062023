import { useMemo } from 'react';
import { useState } from 'react';
import './App.css';
import { Todo } from './components/Todo';
import { TodoForm } from './components/TodoForm';

function App() {
  const [todos, setTodo] = useState([
    { id: 0, title: 'Make todo list', body: "Complete homework №43", isDone: true },
  ])
  const sortedTodos = useMemo(() => {
    return todos.sort((a, b) => b.isDone - a.isDone)
  }, [todos])

  const handleChangeStatus = (id) => {
    setTodo((prev)=> prev.map((e) => e.id === id ? {...e, isDone: !e.isDone} : e))
  }
  const handleAddTodo = (formData) => {
    setTodo((prev)=> [...prev, {id: (new Date()).getTime(), ...formData, isDone: false}])
  }
  return (
    <div className="App">
      {
        sortedTodos.map(
          ({ title, body, isDone, id }) =>
            <Todo
              key={id}
              id={id}
              title={title}
              body={body}
              isActive={isDone}
              onChangeStatus={handleChangeStatus} />
        )
      }
      <TodoForm onAddTodo={handleAddTodo} />
    </div>
  );
}

export default App;
