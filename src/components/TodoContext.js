import React, {useState, createContext} from 'react';

//Let's initiate our context api
export const TodoContext = createContext();

//Let's create out context api provider
export const TodoProvider = () => {
    //Let's set our global state
    const [allTodos, setAllTodos] = useState([
        {
            task: 'Practice react',
            isCompleted: true
        },
        {
            task: 'Connect on LinkedIn',
            isCompleted: true
        },
        {
            task: 'Work out',
            isCompleted: false
        },
        {
            task: 'Stick to macrod',
            isCompleted: false
        },
    ])
    return(
        <TodoContext.Provider testValue='This is a test'>
            {props.children}
        </TodoContext.Provider>
    );
}