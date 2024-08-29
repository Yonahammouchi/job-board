import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login';
import NotFound from './pages/NotFound';

const App = () => {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Login/>}/>
  <Route path='/404' element={<NotFound/>}/>
</Routes>
</BrowserRouter>
  );
};

export default App;