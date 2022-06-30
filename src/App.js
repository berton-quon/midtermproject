import logo from './logo.svg';
import './App.css';
import Students from './Components/Students';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import School from './Components/School';
import Teachers from './Components/Teachers';
import Subjects from './Components/Subjects';


function App() {
  return (
    <div className="App">
    <h1>Pages </h1>
    <Router>
      <ul>
        <li>
          <Link to="/Teachers">Teachers</Link>
        </li>
        <li>
          <Link to="/School">School</Link>
        </li>
        <li>
          <Link to="/Subjects">Subjects</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path='/Teachers' element={< Teachers/>}></Route>
        <Route exact path='/School' element={< School/>}></Route>
        <Route exact path='/Subjects' element={< Subjects/>}></Route>
      </Routes>
    </Router>

    <h1>Students List</h1>
    <Students/>
    </div>
  );
}

export default App;
