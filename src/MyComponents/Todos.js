import React from 'react';
import Alert from './Alert';
import TodoItem from './TodoItem';

export default function Todos(props) {
    return (
        <>
        {
            props.todos.length === 0 ?  <Alert type="Message" message="You have not added anything in the TODO list."/> :
            props.todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.id} onDelete={props.onDelete} onChangeStatus={props.onChangeStatus}/>
            })
        }
        </>
    );
}
