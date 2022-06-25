import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MyProvider } from './MyContext'
import Plants from './Plants';

function App() {

  return (
    <MyProvider>
      <Routes>
        {/* <Route exact path='/' element={<Home />} /> */}
        <Route exact path='/plants' element={<Plants />} />
      </Routes>
    </MyProvider>
  );
}

export default App;
