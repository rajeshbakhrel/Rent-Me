// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css';
import { BrowserRouter as  Router,Route,Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import Footer from './Component/Footer';
import Book from './Pages/Book';
import HostelContainer from './Component/HostelContainer';
import LandContainer from './Component/LandContainer';
import VehicheContainer from './Component/VehicheContainer';
import SinglePage from './Pages/SinglePage';
// import SingleLand from './Component/SingleLand';
import SingleLandPage from './Pages/SingleLandPage';
import Login from './Component/Login';
// import { Profiler } from 'react';
import Profile from './Pages/Profile';
import EditIt from './Pages/EditIt';
import VecSIngle from './Component/VecSIngle';



function App() {
  return (
    <div className="App">
        <Router>
         <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/Contact' element={<Contact/>} />
            <Route path='/book' element={<Book/>} />
            <Route path='/Add' element={<EditIt/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/Profile' element={<Profile/>} />
            <Route path='/SingleProduct/:id' element={<SinglePage/>} />
            <Route path='/SingleLand/:id' element={<SingleLandPage/>} />
            <Route path='/SingleVec/:id' element={<VecSIngle/>} />
            <Route path='*' element={<Error/>}/>
            <Route path="/hostel" element={<HostelContainer />} />
          <Route path="/land" element={<LandContainer />} />
          <Route path="/vehicle" element={<VehicheContainer />} />
            
        </Routes>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
