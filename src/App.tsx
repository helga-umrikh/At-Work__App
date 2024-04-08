import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import EditPage from './pages/EditPage/EditPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={'/'} element={<HomePage />}/>
        <Route path={'/edit/:id'} element={<EditPage />}/>
      </Routes>
    </div>
  );
}

export default App;
