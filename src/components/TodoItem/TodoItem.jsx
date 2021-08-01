import React from 'react';
import './todoitem.css';

const TodoItem = ({
    todo,
    onEditClick,
    onDeleteClick
}) => {
    return (
        <>
        
            <div class="alert alert-info container " role="alert">
                <div className="container-fluid row  text-center" key={todo.id}>

                    <div className="col-sm-6  text-center " >{todo.text}</div>
                    <div className="col-sm-6 ">

                        <button className="btn btn-success" onClick={() => onEditClick(todo)}>Edit</button>
                        <button className="btn btn-danger ms-2" onClick={() => onDeleteClick(todo.id)}>Delete</button>

                    </div>

                </div>

            </div>

        </>


    )
}

export default TodoItem
