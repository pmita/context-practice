import React from 'react';
//Import our styles
import './styles/app.scss';
//Let's import our components
import TodoItems from './components/TodoItems';
//Let's import our context api
import {TodoProvider} from './components/TodoContext';

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <h1>Simple to Todo</h1>
        <TodoItems />
      </div>
    </TodoProvider>

  );
}

export default App;
