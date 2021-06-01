import React from 'react';
//Import our styles
import './styles/app.scss';
//Let's import our components
//Let's import our context api
import {TodoContext} from './components/TodoContext';

function App() {
  return (
    <TodoContext>
      <div className="App">
        <h1>Simple to Todo</h1>
      </div>
    </TodoContext>

  );
}

export default App;
