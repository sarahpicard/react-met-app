import Nav from './components/Nav';
import ArtList from './pages/ArtList/ArtList';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='bg-teal-50 h-screen w-screen'>
      <Nav />
      <Routes>
        <Route path="/art" element={<ArtList />} />
      </Routes>
    </div>
  );
}

export default App;
