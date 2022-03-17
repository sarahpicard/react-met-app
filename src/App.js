import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { useState } from 'react';
import ArtList from './pages/ArtList/ArtList';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <h1>REACT MET Art App</h1>
      <Routes>
        <Route path="/all-art" element={<ArtList />} />
      </Routes>
    </>
  );
}

export default App;
