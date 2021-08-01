import { useEffect,useState } from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import EditTodo from './components/EditTodo/EditTodo';
import TodoItem from './components/TodoItem/TodoItem';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



function App() {
  const[todos,setTodos] =  useState(()=>{
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }

  })
  const [todo, setTodo] = useState();
  const[edit,setEdit] = useState(false);
  const[current,setCurrent] = useState({ });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleAddInputChange(e) {
    setTodo(e.target.value);
  }

  function handleEditInputChange(e) {
    setCurrent({ ...current, text: e.target.value });
    console.log(current);
  }

  function handleAddFormSubmit(e) {
    e.preventDefault();
    

    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: new Date(),
          text: todo.trim()
        }
      ]);
    }

    setTodo("");
  }

  function handleEditFormSubmit(e) {
    e.preventDefault();

    handleUpdateTodo(current.id, current);
  }

  function handleDeleteClick(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  }

  function handleUpdateTodo(id, updatedTodo) {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setEdit(false);
    setTodos(updatedItem);
  }

  function handleEditClick(todo) {
    setEdit(true);
    setCurrent({ ...todo });
  }


  return (
    <div className="App">
      {edit ? (
        <EditTodo
          current={current}
          setEdit={setEdit}
          onEditInputChange={handleEditInputChange}
          onEditFormSubmit={handleEditFormSubmit}
        />
      ) : (
        <AddTodo
          todo={todo}
          onAddInputChange={handleAddInputChange}
          onAddFormSubmit={handleAddFormSubmit}
        />
      )}

      <div  className="container">
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            onEditClick={handleEditClick}
            onDeleteClick={handleDeleteClick}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
