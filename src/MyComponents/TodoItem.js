import React from 'react';

export default function TodoItem({ todo, onDelete, onChangeStatus }) {
    return (
        <div className='container my-3'>
            <div className='row'>
                <div className='col-sm-6'>
                    <div className="card">
                        <div className="card-body">
                        <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="checkBox" onClick={()=> onChangeStatus(todo)} checked={todo.isDone} />
                                <label className="form-check-label" htmlFor="checkBox">
                                    {todo.status}
                                </label>
                            </div>
                            <h5 className="card-title">{todo.title}</h5>
                            <p className="card-text">{todo.desc}</p>
                            <button className="btn btn-primary btn-danger" onClick={() => onDelete(todo)}>Delete</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
