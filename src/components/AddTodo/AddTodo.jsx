import React from 'react'

const AddTodo = ({
  todo,
  onAddFormSubmit,
  onAddInputChange
}) => {
  return (
    <>
    <h2>Todo App</h2>
        <div className="alert alert-warning container font-weight-bold" role="alert">
          just enter your task and press enter!!!
        </div>
      <form onSubmit={onAddFormSubmit}>
        
        <div class="alert alert-secondary container" role="alert">
          <input className="p-1 me-2"
            name="todo"
            type="text"
            placeholder="Create new todo"
            value={todo}
            onChange={onAddInputChange}
          />
          <button className="btn btn-warning me-2" onClick={onAddFormSubmit}>Add</button>

        </div>

      </form>
      </>
    
  )
}

export default AddTodo
