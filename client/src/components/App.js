import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserProvider } from './UserContext';
import TopBar from './TopBar';
import NavBar from './NavBar';
import Home from './Home';
import Plants from './Plants';
import Plant from './Plant';
import Login from './Login';
import Signup from './Signup';

const App = () => {

  return (
    <UserProvider>
      <TopBar />
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Login' element={<Login />} />
        <Route exact path='/Signup' element={<Signup />} />
        <Route exact path='/plants' element={<Plants />} />
        <Route exact path='/plants/:id' element={<Plant />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
