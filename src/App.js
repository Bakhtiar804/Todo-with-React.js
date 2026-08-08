
import './App.css';
import Heading from './components/heading/Heading.jsx';
import InputComponent from './components/input/Input.jsx';
import ButtonComponent from './components/button/Button.jsx';
import { useState } from 'react';
import { saveTodo } from './components/config/Config.js';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="App">
      <Heading name="My Todos" />
      <div className='input-btn'>
        <InputComponent value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <div className='btnFlex'>
          <ButtonComponent onClick={() => { 
            setTodos([...todos, inputValue])
            setInputValue('');
            saveTodo(inputValue);

          }}
            btnName={'Add todo'} />
          <ButtonComponent onClick={() => setTodos([])} btnName={'Delete All'} />
        </div>


        

      </div>
<div>
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>{todo}</li>

            ))}</ul>
        </div>
    </div>
  );
}

export default App;
