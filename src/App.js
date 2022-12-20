import logo from './logo.svg';
import './App.css';
import ContactListComponent from './components/container/contactListComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ContactListComponent></ContactListComponent>
      </header>
    </div>
  );
}

export default App;
