import './App.css';
import milk from './assets/milk.jpg'

function App() {
  return (
    <div className="App bg-blue-200 h-screen flex items-center justify-center">
      <header className="App-header">
        <div>
       <img src={milk} />
        </div>

       <a>Hello my name is Najmi</a>
      </header>
    </div>
  );
}

export default App;



