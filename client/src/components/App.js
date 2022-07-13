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
import ReviewForm from './ReviewForm';
import MyLandscape from './MyLandscape';
import EditReview from './EditReview';

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
        <Route exact path='/landscape' element={<MyLandscape />} />
        <Route exact path='/plants/:id' element={<Plant />} />
        <Route exact path='/plants/:plant_id/reviews/new' element={<ReviewForm />} />
        <Route exact path='/plants/:plant_id/reviews/:id' element={<EditReview />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
