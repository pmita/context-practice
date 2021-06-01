import React, {useState} from 'react';

const AddTodo = () => {
    //Let's set this component's state
    const [todo, setTodo] = useState('');
    const [isCompleted, setIsCompleted] = useState('');

    //Let's define our event handlers
    const addTodoHandler = (e) => {
        setTodo(e.target.value);
    }

    const isCompletedHandler = (e) => {
        if( e.target.value === 'completed'){
            setIsCompleted(true);
        } else{
            setIsCompleted(false);
        }
    }
    return(
        <form>
            <input type="text" name="task" onChange={addTodoHandler}/>
            <input type="text" name="isCompeted" onChange={isCompletedHandler}/>
            <button>Add</button>
        </form>
    );
}

export default AddTodo;