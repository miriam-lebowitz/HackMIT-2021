import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home.js';
import Sustainability from '../src/sustainability5.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <body className="App-body" style={{ 
            backgroundImage: `url(${Sustainability})`,
            backgroundSize: 1600
          }}>
              <div className="HomeBox"><Home /></div>
      </body>
    </div>
  );
}

export default App;
