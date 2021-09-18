import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import { Button } from 'react-bootstrap';
// import Project from './components/project.js';
// import MultiSelect from './components/MultiSelect.js';
// import Intro from './components/Intro.js';
import Home from './components/Home.js';
import Sustainability from '../src/sustainability5.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Name of App
        </p> */}
      </header>
      <body className="App-body" style={{ 
            backgroundImage: `url(${Sustainability})`,
            backgroundSize: 1600
          }}>
            
              <div className="HomeBox"><Home /></div>
        {/* <MultiSelect prompt="How do you get to where you need to go on a typical day?" question1="Question 1" question2="Question 2" question3="Question 3" question4="Question 4" question5="Question 5"/> */}
        {/* <Intro /> */}
        
      </body>
    </div>
  );
}

export default App;
