import './App.css';

import TaskUseReducer from './components/TaskUseReducer';
import TaskUseContext from './components/TaskUseContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ minWidth: '20vw', border: 'solid black 0.2rem', borderColor: 'gray', padding: '0.5rem' }}>
          <TaskUseReducer></TaskUseReducer>
        </div>
        <div style={{ minWidth: '20vw', border: 'solid black 0.2rem',borderColor: 'lightgrey', padding: '0.5rem' }}>
          <TaskUseContext></TaskUseContext>
        </div>
      </header>
    </div>
  );
}

export default App;
