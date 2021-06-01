import React, {useState, createContext} from 'react';

//Let's initiate our context api
export const TodoContext = createContext();

//Let's create out context api provider
export const TodoProvider = (props) => {
    //Let's set our global state
    const [allTodos, setAllTodos] = useState([
        {
            task: 'Practice react',
            isCompleted: true,
            id: 0
        },
        {
            task: 'Connect on LinkedIn',
            isCompleted: true,
            id: 1
        },
        {
            task: 'Work out',
            isCompleted: false,
            id: 2
        },
        {
            task: 'Stick to macros',
            isCompleted: false,
            id: 3
        },
    ])
    return(
        <TodoContext.Provider value={[allTodos, setAllTodos]}>
            {props.children}
        </TodoContext.Provider>
    );
}