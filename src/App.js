import './App.css';
import Nav from './components/Nav';
import ArtList from './pages/ArtList/ArtList';
import { Route, Routes } from 'react-router-dom';
import Artists from './pages/Artists/Artists';

function App() {
  return (
    <div className='bg-teal-50 h-screen w-screen'>
      <Nav />
      <Routes>
        <Route path="/art" element={<ArtList />} />
        <Route path="/artists" element={<Artists />} />
      </Routes>
    </div>
  );
}

export default App;
