import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { useState } from 'react';
import ArtList from './pages/ArtList/ArtList';
import { Route, Routes } from 'react-router-dom';
import Artists from './pages/Artists/Artists';
import Art from './pages/Art/Art';
import Artist from './pages/Artist/Artist';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/all-art" element={<ArtList />} />
        <Route path="/all-artists" element={<Artists />} />
        <Route path="/art" element={<Art />} />
        <Route path="/artist" element={<Artist />} />
      </Routes>
    </>
  );
}

export default App;
