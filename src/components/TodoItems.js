import React, {useContext} from 'react';
//Let's import our context 
import {TodoContext} from './TodoContext';

const TodoItems = () => {
    const [allTodos, setAllTodos] = useContext(TodoContext);
    return(
        <div className="todo-items">
            {allTodos.map( item => (
                <h1>{item.task}</h1>
            ))}
        </div>
    );
}

export default TodoItems;