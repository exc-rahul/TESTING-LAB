
import './App.css';
import NavigationBar from './Component/NavigationBar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Register from './Component/Register';
import Login from './Component/Login';
import Home from './Pages/Home';

import Contact from './Pages/Contact';
import About from './Pages/About';
import Profile from './Pages/Profile';
import ConcreteTable from './TestingTable/ConcreteTable';
import { RoadTable } from './TestingTable/RoadTable';
import Rocktablee from './TestingTable/Rocktablee';

function App() {
  return (
    <> <NavigationBar />
    
      <Router>
     
        <Routes>
        
          {/* <Route path='/contact' element={< />} /> */}
          <Route exact path='/contact' element = {<Contact/>}/>
          <Route exact path='/concrete-testing' element = {<ConcreteTable/>}/>
          <Route exact path='/road-testing' element = {<RoadTable/>}/>
          <Route exact path='/rock-testing' element = {<Rocktablee/>}/>
          <Route exact path='/' element = {<Home/>}/>
          <Route exact path='/about' element = {<About/>}/>
          <Route exact path='/profile' element = {<Profile/>}/>
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login />} />
        </Routes>
      </Router>
      {/* <Register/>
      <Login/> */}
    </>
  );
}

export default App;
