import React from 'react'

const EditTodo = ({
  current,
  setEdit,
  onEditInputChange,
  onEditFormSubmit
}) => {
    return (
        <div>
            <form onSubmit={onEditFormSubmit}>
                <h2>Edit Todo</h2>
                <div class="container p-3 my-3  bg-dark text-white">
                
                <input className="p-1 me-2 text-centre"
                    name="updateTodo"
                    type="text"
                    placeholder="Update todo"
                    value={current.text}
                    onChange={onEditInputChange}
                />
                
                <button  className="btn btn-warning me-2" type="submit" onClick={onEditFormSubmit}>
                    Update
                </button>
                <button className="btn btn-secondary" onClick={() => setEdit(false)}>Cancel</button></div>
            </form>
        </div>
    )
}

export default EditTodo
