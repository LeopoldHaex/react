import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Field 1:
            <input type="text" name="field1" />
          </label>
          <label>
            Field 2:
            <input type="text" name="field2" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
