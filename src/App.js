import './App.css';
import Clock from './components/pure/Clock';
import { ClockHook } from './hooks/ClockHook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <table>
          <caption><h1>Ejercicio 3, 4 y 5</h1></caption>
          <tr>
            <td><h2>Class Clock</h2></td>
            <td><h2>Function Clock</h2></td>
          </tr>
          <tr>
            <td>
              <Clock></Clock>
            </td>
            <td>
              <ClockHook></ClockHook>
            </td>
          </tr>
        </table>
      </header>
    </div>
  );
}

export default App;
